const API_BASE_URL = 'http://167.179.65.154:9487';

async function testApi(endpoint: string, message: string) {
  const url = `${API_BASE_URL}/api/${endpoint}`;
  const data = { msg: message };
  
  try {
    console.log(`Testing ${endpoint} with message: ${message}`);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log(`Response from ${endpoint}:`, result);
    return result;
  } catch (error) {
    console.error(`Error testing ${endpoint}:`, error);
    return {
      error: `無法連接到 ${endpoint} 服務。請確認網路連接並重試。`
    };
  }
}

export async function runApiTests() {
  const testCases = [
    { endpoint: 'rag_llama', message: 'Test message for RAG LLaMA' },
    { endpoint: 'non_rag_llama', message: 'Test message for Non-RAG LLaMA' },
    { endpoint: 'expert_system', message: 'Test message for Expert System' }
  ];

  console.log('Starting API tests...');
  
  const results = await Promise.all(
    testCases.map(test => testApi(test.endpoint, test.message))
  );
  
  return results;
}