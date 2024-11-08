import { runDiagnostics } from './apiDiagnostic';

async function main() {
  try {
    const results = await runDiagnostics();
    console.log('\nAPI 診斷結果:');
    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('診斷過程發生錯誤:', error);
  }
}

main();