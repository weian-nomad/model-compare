import React from 'react';
import { MessageSquare, Database, ArrowRight, Sparkles, Search, BookOpen, Stethoscope, ClipboardList } from 'lucide-react';

export function ComparisonView() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Base LLaMA */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">基礎 LLaMA</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              使用預訓練知識處理一般醫療查詢的傳統 LLaMA 模型。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-blue-100 rounded">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">一般醫療知識</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-blue-100 rounded">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">訓練資料時間限制</span>
              </li>
            </ul>
          </div>
        </div>

        {/* LLaMA + RAG */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-indigo-200">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">LLaMA + RAG</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              整合醫療知識庫並具備即時更新能力的增強型 LLaMA。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-indigo-100 rounded">
                  <Search className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-gray-700">最新醫學研究資料</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-indigo-100 rounded">
                  <Stethoscope className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-gray-700">臨床指南整合</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Expert System */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-200">
          <div className="flex items-center space-x-3 mb-6">
            <ClipboardList className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-semibold">醫療專家系統</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              具備明確醫療決策樹和協定的傳統規則型系統。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-emerald-100 rounded">
                  <ClipboardList className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">嚴格診斷協定</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="mt-1 p-1 bg-emerald-100 rounded">
                  <Stethoscope className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700">實證醫學規則</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Diagram */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">處理流程比較</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">基礎 LLaMA 流程</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  醫療查詢
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  一般處理
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
                  醫療回應
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">LLaMA + RAG 流程</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  醫療查詢
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  知識檢索
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-indigo-50 rounded-lg text-center">
                  增強診斷
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">專家系統流程</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  症狀輸入
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  規則評估
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="w-full p-3 bg-emerald-50 rounded-lg text-center">
                  臨床決策
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">關鍵特性比較</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">特性</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">基礎 LLaMA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LLaMA + RAG</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">專家系統</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">知識來源</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">預訓練資料</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">動態醫療資料庫</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">專家定義規則</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">推理方法</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">模式識別</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">混合分析</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">邏輯樹</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">適應性</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">有限</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">高</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">手動更新</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">不確定性處理</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">機率性</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">實證醫學</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">確定性</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}