import { createContext, useContext, useState, type ReactNode } from "react";

type TradeMode = "buy" | "sell" | null;

interface TradeContextValue {
  mode: TradeMode;
  open: (mode: "buy" | "sell") => void;
  close: () => void;
}

const TradeContext = createContext<TradeContextValue | null>(null);

export function TradeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<TradeMode>(null);

  return (
    <TradeContext.Provider
      value={{ mode, open: setMode, close: () => setMode(null) }}
    >
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  const ctx = useContext(TradeContext);
  if (!ctx) throw new Error("useTrade must be used within TradeProvider");
  return ctx;
}
