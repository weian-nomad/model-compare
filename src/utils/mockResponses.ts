import { symptoms } from './symptoms';

function findSymptoms(query: string): string[] {
  return symptoms.filter(symptom => 
    query.toLowerCase().includes(symptom.toLowerCase())
  );
}

export function generateBaseLlamaResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "我理解您正在詢問醫療狀況。請提供更具體的症狀描述，以便我提供更準確的資訊。";
  }

  return `根據您描述的症狀（${foundSymptoms.join("、")}），我可以提供一般性的資訊。請注意，這不能取代專業醫療建議。`;
}

export function generateRagResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "為了從醫療知識庫提供準確資訊，請詳細描述您的症狀。";
  }

  return `根據最新醫學文獻分析：\n\n已識別症狀：${foundSymptoms.join("、")}\n\n相關醫療指南建議尋求醫療專業人員進行適當評估。根據最新研究，這些症狀可能與多種病況有關。`;
}

export function generateExpertSystemResponse(query: string): string {
  const foundSymptoms = findSymptoms(query);
  
  if (foundSymptoms.length === 0) {
    return "專家系統需要具體症狀才能進行分析。請提供詳細的症狀描述。";
  }

  return `規則型分析：\n\n輸入症狀：${foundSymptoms.join("、")}\n\n診斷協定啟動：\n- 需要評估嚴重程度\n- 需要檢查其他症狀\n- 如症狀持續，建議立即就醫諮詢`;
}