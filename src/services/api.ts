import axios from 'axios';
import { generateMockResponse } from './mockResponses';

interface ApiResponse {
  response: string;
  error?: string;
  source?: 'api' | 'mock';
}

const API_BASE_URL = 'http://167.179.65.154:9487';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

async function makeRequest(endpoint: string, message: string): Promise<ApiResponse> {
  try {
    const response = await api.post(`/api/${endpoint}`, { msg: message });
    
    if (response.data && typeof response.data.response === 'string') {
      return { 
        response: response.data.response,
        source: 'api'
      };
    }

    return {
      response: generateMockResponse(endpoint, message),
      source: 'mock',
      error: 'API 響應格式不正確，顯示備用回應'
    };

  } catch (err) {
    // 避免直接傳遞錯誤對象，只傳遞必要的字符串信息
    const errorMessage = err instanceof Error ? err.message : '未知錯誤';
    
    return {
      response: generateMockResponse(endpoint, message),
      source: 'mock',
      error: `API 暫時無法使用，顯示備用回應 (${errorMessage})`
    };
  }
}

export async function queryBaseLlama(message: string): Promise<ApiResponse> {
  return makeRequest('non_rag_llama', message);
}

export async function queryRagLlama(message: string): Promise<ApiResponse> {
  return makeRequest('rag_llama', message);
}

export async function queryExpertSystem(message: string): Promise<ApiResponse> {
  return makeRequest('expert_system', message);
}