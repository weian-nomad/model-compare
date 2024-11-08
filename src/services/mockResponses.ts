export const generateMockResponse = (endpoint: string, message: string): string => {
  const symptoms = message.split(/[,，]/).map(s => s.trim()).filter(Boolean);
  const symptomList = symptoms.length ? symptoms.join('、') : '您提供的症狀';

  switch (endpoint) {
    case 'non_rag_llama':
      return `基礎 LLaMA 模型分析結果：\n\n根據您描述的症狀「${symptomList}」，初步建議：\n\n1. 建議您保持充足休息，避免過度勞累\n2. 持續觀察症狀變化，記錄症狀發生的時間和頻率\n3. 如症狀持續或加重，請及時就醫診治\n\n請注意：此建議僅供參考，不能替代專業醫療診斷。`;
    
    case 'rag_llama':
      return `LLaMA + RAG 模型分析結果：\n\n基於最新醫學文獻，針對「${symptomList}」的分析：\n\n1. 可能相關的症候群：\n   - 需要進一步評估具體症狀\n   - 建議進行相關檢查\n\n2. 建議措施：\n   - 記錄症狀發展過程\n   - 注意是否有其他伴隨症狀\n   - 必要時尋求專業醫療協助\n\n3. 預防建議：\n   - 保持良好的生活作息\n   - 均衡飲食，適度運動\n   - 避免可能的誘發因素`;
    
    case 'expert_system':
      return `醫療專家系統分析結果：\n\n針對症狀「${symptomList}」的系統性評估：\n\n1. 初步診斷建議：\n   - 需要進行完整病史詢問\n   - 建議進行相關身體檢查\n\n2. 警訊提醒：\n   - 如出現以下情況請立即就醫：\n     * 症狀突然加重\n     * 出現新的不適症狀\n     * 影響日常生活作息\n\n3. 後續追蹤建議：\n   - 定期評估症狀變化\n   - 保持良好的生活習慣\n   - 建立健康管理計畫`;
    
    default:
      return '系統正在處理您的請求，請稍後再試。';
  }
};