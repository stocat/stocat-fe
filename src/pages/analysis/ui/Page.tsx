
import { useState, useEffect } from "react";
import { api } from "@/shared/api/client";
import { AnalysisReport } from "@/shared/api/types";
import { useNavigate } from "react-router-dom";

export const AnalysisPage = () => {
    const navigate = useNavigate();
    const [report, setReport] = useState<AnalysisReport | null>(null);

    useEffect(() => {
        api.getAnalysisReport().then(setReport);
    }, []);

    if (!report) return <div>Loading...</div>;

    return (
        <div className="pb-8 bg-gray-50 min-h-screen">
            <div className="bg-white px-4 py-4 sticky top-0 z-10 border-b border-gray-100 flex items-center gap-3">
                <button onClick={() => navigate(-1)}>
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h1 className="text-lg font-bold text-gray-900">투자 분석</h1>
            </div>

            <div className="p-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">투자 성향</h2>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{report.style}</div>
                    <p className="text-sm text-gray-500">{report.styleDescription}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">주요 인사이트</h2>
                    <div className="space-y-4">
                        {report.insights.map((insight, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                                <span className="text-sm text-gray-600 font-medium">{insight.title}</span>
                                <div className="text-right">
                                    <span className="block text-sm font-bold text-gray-900">{insight.value}</span>
                                    <span className={`text-xs ${insight.trend === 'up' ? 'text-red-500' : 'text-blue-500'}`}>
                                        {insight.trend === 'up' ? '▲' : '▼'} Trend
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">조언 & 피드백</h2>
                    <div className="space-y-3">
                        {report.feedback.map((item, index) => (
                            <div key={index} className="flex gap-3">
                                <div className={`w-1 min-w-[4px] h-full rounded-full ${item.type === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                <p className="text-sm text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
