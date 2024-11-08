import React, { useState } from 'react';
import { Header } from './components/Header';
import { ComparisonView } from './components/ComparisonView';
import { Playground } from './components/Playground';
import { queryBaseLlama, queryRagLlama, queryExpertSystem } from './services/api';
import { InfoIcon } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('compare');
  const [isLoading, setIsLoading] = useState(false);
  const [baseLlamaResponse, setBaseLlamaResponse] = useState('');
  const [ragLlamaResponse, setRagLlamaResponse] = useState('');
  const [expertSystemResponse, setExpertSystemResponse] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleQuerySubmit = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const [baseResponse, ragResponse, expertResponse] = await Promise.all([
        queryBaseLlama(query),
        queryRagLlama(query),
        queryExpertSystem(query)
      ]);

      setBaseLlamaResponse(baseResponse.response);
      setRagLlamaResponse(ragResponse.response);
      setExpertSystemResponse(expertResponse.response);

      if (baseResponse.source === 'mock' || ragResponse.source === 'mock' || expertResponse.source === 'mock') {
        setError('部分服務暫時無法使用，已顯示備用分析結果');
      }
    } catch (error) {
      setError('系統處理請求時發生錯誤，請稍後再試');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-4 p-4 bg-blue-50 text-blue-700 rounded-lg flex items-center space-x-2">
            <InfoIcon className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {activeTab === 'compare' ? (
          <ComparisonView />
        ) : (
          <Playground
            onSubmitQuery={handleQuerySubmit}
            baseLlamaResponse={baseLlamaResponse}
            ragLlamaResponse={ragLlamaResponse}
            expertSystemResponse={expertSystemResponse}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
}

export default App;