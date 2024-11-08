import React from 'react';
import { Brain } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">醫療模型比較系統</h1>
          </div>
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('compare')}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === 'compare'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              模型比較
            </button>
            <button
              onClick={() => setActiveTab('playground')}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === 'playground'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              互動測試
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}