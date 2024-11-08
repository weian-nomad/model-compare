import React, { useState } from 'react';
import { AlertCircle, Loader2, InfoIcon } from 'lucide-react';

interface PlaygroundProps {
  onSubmitQuery: (query: string) => void;
  baseLlamaResponse: string;
  ragLlamaResponse: string;
  expertSystemResponse: string;
  isLoading: boolean;
}

export function Playground({
  onSubmitQuery,
  baseLlamaResponse,
  ragLlamaResponse,
  expertSystemResponse,
  isLoading
}: PlaygroundProps) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSubmitQuery(userInput.trim());
    }
  };

  const renderResponse = (response: string) => {
    if (!response) return "請輸入症狀以查看分析結果";
    
    if (response.includes('備用回應')) {
      return (
        <div className="space-y-2">
          <div className="flex items-start space-x-2 text-blue-700 bg-blue-50 p-2 rounded">
            <InfoIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>使用備用模型進行分析</span>
          </div>
          <div className="mt-2">{response.split('(')[0].trim()}</div>
        </div>
      );
    }
    
    return response;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">醫療診斷互動測試</h2>
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="請描述症狀或輸入醫療問題..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{isLoading ? '分析中...' : '開始分析'}</span>
            </button>
          </div>
        </form>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">基礎 LLaMA 分析</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>處理查詢中...</span>
                </div>
              ) : renderResponse(baseLlamaResponse)}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">LLaMA + RAG 分析</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>處理查詢中...</span>
                </div>
              ) : renderResponse(ragLlamaResponse)}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">專家系統分析</h3>
            <div className="min-h-32 bg-white p-3 rounded border border-gray-200">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>處理查詢中...</span>
                </div>
              ) : renderResponse(expertSystemResponse)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}