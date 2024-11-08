import axios from 'axios';

const API_BASE_URL = 'http://167.179.65.154:9487';

interface DiagnosticResult {
  status: 'success' | 'error';
  message: string;
  details?: any;
}

async function testEndpoint(endpoint: string): Promise<DiagnosticResult> {
  const url = `${API_BASE_URL}/api/${endpoint}`;
  const testMessage = "診斷測試";
  
  try {
    console.log(`Testing ${endpoint}...`);
    const startTime = Date.now();
    
    const response = await axios.post(url, 
      { msg: testMessage },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000,
        validateStatus: (status) => true // 允許所有狀態碼以便診斷
      }
    );
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    return {
      status: response.status === 200 ? 'success' : 'error',
      message: `Status: ${response.status}, Response time: ${responseTime}ms`,
      details: {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data: response.data,
        responseTime
      }
    };
  } catch (error: any) {
    if (error.code === 'ECONNREFUSED') {
      return {
        status: 'error',
        message: '連接被拒絕 - 服務器可能未運行或無法訪問',
        details: error
      };
    }
    
    if (error.code === 'ETIMEDOUT') {
      return {
        status: 'error',
        message: '連接超時 - 服務器響應時間過長',
        details: error
      };
    }

    return {
      status: 'error',
      message: `錯誤: ${error.message}`,
      details: error
    };
  }
}

export async function runDiagnostics() {
  const endpoints = ['non_rag_llama', 'rag_llama', 'expert_system'];
  const results: Record<string, DiagnosticResult> = {};
  
  console.log('開始 API 診斷...');
  console.log(`目標服務器: ${API_BASE_URL}`);
  
  for (const endpoint of endpoints) {
    results[endpoint] = await testEndpoint(endpoint);
  }
  
  return results;
}