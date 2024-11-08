import axios from 'axios';

const API_BASE_URL = 'http://167.179.65.154:9487';

interface ApiTestResult {
  success: boolean;
  data?: any;
  error?: string;
  details?: string;
}

export async function testApiEndpoint(endpoint: string): Promise<ApiTestResult> {
  const testMessage = "測試訊息";
  const url = `${API_BASE_URL}/api/${endpoint}`;
  
  try {
    console.log(`Testing ${endpoint}...`);
    
    const response = await axios.post(url, 
      { msg: testMessage },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 5000
      }
    );
    
    return {
      success: true,
      data: response.data,
      details: `Successfully connected to ${endpoint}`
    };
  } catch (error: any) {
    if (error.code === 'ECONNREFUSED') {
      return {
        success: false,
        error: 'Connection refused',
        details: '無法連接到伺服器，請確認伺服器是否運行中'
      };
    }
    
    if (error.code === 'CORS_ERROR') {
      return {
        success: false,
        error: 'CORS Error',
        details: '跨域請求被拒絕，請確認伺服器是否允許跨域請求'
      };
    }
    
    return {
      success: false,
      error: error.message,
      details: `Error details: ${JSON.stringify(error.response?.data || error.message)}`
    };
  }
}

export async function runApiDiagnostics() {
  const endpoints = ['non_rag_llama', 'rag_llama', 'expert_system'];
  const results: Record<string, ApiTestResult> = {};
  
  for (const endpoint of endpoints) {
    results[endpoint] = await testApiEndpoint(endpoint);
  }
  
  return results;
}