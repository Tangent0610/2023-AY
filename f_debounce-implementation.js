/*
擇一實作 Debounce 或 Throttle
debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。 
throttle 在觸發後的 timeout 時間內只會執行一次。
建立函式 debounce 或 throttle 帶入參數如下範例:
const debounceFunc = debounce(func, delay)
const throttleFunc = throttle(func, timeout)
*/

/*
使用 Event Loop 結合實際操作範例擇一敘述 Debounce 或 Throttle 的運作方式 
如文字輸入、scroll 操作與 button 連續點擊，
或是其他可結合 Debounce 或 Throttle 的行為都可以拿來當作操作範例。
*/


// debounce: 短時間高頻次觸發 => 合併短時間多個連續呼叫成一次
  const debounce = (func, delay) => {
    let timeoutId;
  
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = undefined;
      }, delay);
    };
  };


 // 測試範例: 500ms內如果又觸發則取消上一次設定，500ms沒有重複觸發才會真正執行
 const handleScroll = () => console.log('Scroll');
 const debounceFunc = debounce(handleScroll, 500);
 window.addEventListener('scroll', debounceFunc);

 // event loop敘述:

 /*
當scroll第一次被觸發，
因為沒有timeoutId，debounce會直接呼叫setTimeout去設定計時器，
因為setTimeout是非同步的Web API，
會被交由瀏覽器處理倒數後，加入到event queue裡等待call stack清空再執行。

但在計時器倒數的時間內，如果有新的scroll事件被觸發，
新的debounce會檢查到timeoutId，因而呼叫clearTimeout取消前一次的setTimeout，
接著重新呼叫setTimeout設定新的計時器，等待時間因此被重置，重新開始等待。

直到不再有重複的觸發，計時器結束後setTimeout內部的回調函式才會被執行，
timeoutId也會被重新設定為undefined，允許進入下一次循環。
這個流程可以確保只有在延遲時間內沒有重複觸發時，才會真正執行相應的邏輯，優化效能。
 */