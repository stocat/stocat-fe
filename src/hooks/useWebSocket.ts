import { useEffect, useRef, useCallback } from "react"
import { useWebSocketStore } from "../store/webSocketStore"

type WebSocketChannel = "exchange-rates" | "crypto/trades" | "kr-stock/trades"

const MAX_BACKOFF_MS = 30_000
const BASE_BACKOFF_MS = 1_000

function getChannelPath(channel: WebSocketChannel): string {
  return `${import.meta.env.VITE_WS_BASE_URL}/ws/${channel}`
}

export function useWebSocket(channel: WebSocketChannel) {
  const wsRef = useRef<WebSocket | null>(null)
  const retryCountRef = useRef(0)
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isConnectedRef = useRef(false)

  const { setExchangeRate, setCryptoTrade, setKrStockTrade } = useWebSocketStore()

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        if (channel === "exchange-rates") {
          setExchangeRate(data)
        } else if (channel === "crypto/trades") {
          setCryptoTrade(data)
        } else if (channel === "kr-stock/trades") {
          setKrStockTrade(data)
        }
      } catch {
        // 파싱 실패 무시
      }
    },
    [channel, setExchangeRate, setCryptoTrade, setKrStockTrade],
  )

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return

    const ws = new WebSocket(getChannelPath(channel))
    wsRef.current = ws

    ws.onopen = () => {
      retryCountRef.current = 0
      isConnectedRef.current = true
    }

    ws.onmessage = handleMessage

    ws.onclose = () => {
      isConnectedRef.current = false

      if (!document.hidden) {
        const backoff = Math.min(BASE_BACKOFF_MS * 2 ** retryCountRef.current, MAX_BACKOFF_MS)
        retryCountRef.current += 1
        retryTimerRef.current = setTimeout(connect, backoff)
      }
    }

    ws.onerror = () => {
      ws.close()
    }
  }, [channel, handleMessage])

  const disconnect = useCallback(() => {
    if (retryTimerRef.current) {
      clearTimeout(retryTimerRef.current)
      retryTimerRef.current = null
    }
    wsRef.current?.close()
    wsRef.current = null
    isConnectedRef.current = false
  }, [])

  useEffect(() => {
    connect()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        disconnect()
      } else {
        retryCountRef.current = 0
        connect()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      disconnect()
    }
  }, [connect, disconnect])
}
