/*
請使用正規表達式實作數字加上千分位 
input : -7855948.9527
output: -7,855,948.9527
*/


const addThousandsSeparators = (number) => {
  if (typeof number !== 'number') {
    return '';
  }
  const rule = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(rule, ',')
}

/*
\B：確保千分位符號不會被加在開頭
(?<!\.\d*)：排除小數點
(\d{3})：三個連續數字
+：可重複
(?!\d)：切割後面的數字
*/ 




