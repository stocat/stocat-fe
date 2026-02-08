
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { realtimeApi } from './api/realtime';

interface RealTimeContextType {
    isConnected: boolean;
}

const RealTimeContext = createContext<RealTimeContextType>({ isConnected: false });

export const useRealTimeStatus = () => useContext(RealTimeContext);

export const RealTimeProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isReady, setIsReady] = useState(false); // To handle initial transition

    useEffect(() => {
        // Connect globally
        realtimeApi.connect();

        const handleStatus = (status: boolean) => {
            setIsConnected(status);
            if (status) {
                // Minimum loading time for UX (avoid flicker)
                setTimeout(() => setIsReady(true), 500);
            }
        };

        realtimeApi.addStatusListener(handleStatus);

        return () => {
            realtimeApi.removeStatusListener(handleStatus);
        };
    }, []);

    if (!isReady) {
        return (
            <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-500 animate-pulse flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Stocat</h1>
                <p className="text-sm text-gray-400 mt-2">실시간 마켓 연결중...</p>
            </div>
        );
    }

    return (
        <RealTimeContext.Provider value={{ isConnected }}>
            {children}
        </RealTimeContext.Provider>
    );
};
