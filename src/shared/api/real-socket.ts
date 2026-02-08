
import { RealTimeClient } from "./realtime";

type Listener = (data: any) => void;
type StatusListener = (isConnected: boolean) => void;

const WS_URL = 'ws://localhost:8080/ws';

export class RealSocketService implements RealTimeClient {
    private socket: WebSocket | null = null;
    private listeners: Map<string, Set<Listener>> = new Map();
    private statusListeners: Set<StatusListener> = new Set();
    private isConnected = false;
    private reconnectTimeout: NodeJS.Timeout | null = null;

    connect() {
        if (this.isConnected || this.socket) {
            this.notifyStatus(this.isConnected);
            return;
        }

        console.log('[RealSocket] Connecting to', WS_URL);
        this.socket = new WebSocket(WS_URL);

        this.socket.onopen = () => {
            console.log('[RealSocket] Connected');
            this.isConnected = true;
            this.notifyStatus(true);

            // Resubscribe to existing topics
            this.listeners.forEach((_, topic) => {
                this.sendSubscribe(topic);
            });
        };

        this.socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.topic && message.payload) {
                    this.notify(message.topic, message.payload);
                }
            } catch (e) {
                console.error('[RealSocket] Failed to parse message', e);
            }
        };

        this.socket.onclose = () => {
            console.log('[RealSocket] Disconnected');
            this.isConnected = false;
            this.notifyStatus(false);
            this.socket = null;
            // Auto-reconnect logic
            this.reconnectTimeout = setTimeout(() => this.connect(), 5000);
        };

        this.socket.onerror = (error) => {
            console.error('[RealSocket] Error', error);
            // Error usually precedes close, so status update handled in onclose
        };
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        this.isConnected = false;
        this.notifyStatus(false);
    }

    subscribe(topic: string, callback: Listener) {
        if (!this.listeners.has(topic)) {
            this.listeners.set(topic, new Set());
            this.sendSubscribe(topic);
        }
        this.listeners.get(topic)!.add(callback);
    }

    unsubscribe(topic: string, callback: Listener) {
        const topicListeners = this.listeners.get(topic);
        if (topicListeners) {
            topicListeners.delete(callback);
            if (topicListeners.size === 0) {
                this.listeners.delete(topic);
                this.sendUnsubscribe(topic);
            }
        }
    }

    addStatusListener(callback: StatusListener) {
        this.statusListeners.add(callback);
        callback(this.isConnected); // Notify current
    }

    removeStatusListener(callback: StatusListener) {
        this.statusListeners.delete(callback);
    }

    private notifyStatus(status: boolean) {
        this.statusListeners.forEach(cb => cb(status));
    }

    private sendSubscribe(topic: string) {
        if (this.socket && this.isConnected) {
            this.socket.send(JSON.stringify({ action: 'subscribe', payload: { topic } }));
        }
    }

    private sendUnsubscribe(topic: string) {
        if (this.socket && this.isConnected) {
            this.socket.send(JSON.stringify({ action: 'unsubscribe', payload: { topic } }));
        }
    }

    private notify(topic: string, data: any) {
        const topicListeners = this.listeners.get(topic);
        if (topicListeners) {
            topicListeners.forEach(callback => callback(data));
        }
    }
}

export const realSocketApi = new RealSocketService();
