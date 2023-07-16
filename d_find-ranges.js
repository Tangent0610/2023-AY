/*
請根據輸入的數字區間找出數字 1 到 20 間重疊與未包含的數字區間 
input : [[6, 11], [5, 8], [17, 20], [7], [14,17]]
output: { overlap: [[6, 8], [17]], notInclude: [[1, 4], [12, 13]] }
*/

const findRanges = (inputArr = []) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return { overlap: [], notInclude: []};

  const overlap = [];
  const notInclude = [];
  const allNumberCounts = {};

  // 初始化數字1-20的計數器
  for (let i = 1; i <= 20; i++) {
    allNumberCounts[i] = 0;
  }

  // 計算數量
  inputArr.forEach(subArr => {
    const start = subArr[0];
    if (!subArr[1]) {
      allNumberCounts[start] = allNumberCounts[start] + 1;
    } else {
      const end = subArr[1];
      for (let i = start; i <= end; i++) {
        allNumberCounts[i] = allNumberCounts[i] + 1;
      }
    }
  })

  // 取出重疊與未包含的數字
  Object.keys(allNumberCounts).forEach((key) => {
    if (allNumberCounts[key] === 0) notInclude.push(parseInt(key));
    else if (allNumberCounts[key] > 1) overlap.push(parseInt(key));
  })

  // 將數字合併成區間
  const mergeIntoRanges = (inputArr) => {
    const mergedArr = [];
  
    let start = inputArr[0];
    let end = inputArr[0];
  
    for (let i = 1; i < inputArr.length; i++) {
      if (inputArr[i] === end + 1) {
        end = inputArr[i];
      } else {
        mergedArr.push(start === end ? start : [start, end]);
        start = inputArr[i];
        end = inputArr[i];
      }
    }
    mergedArr.push(start === end ? start : [start, end]);
    return mergedArr;
  }

  // 組成結果
  return { overlap: mergeIntoRanges(overlap), notInclude: mergeIntoRanges(notInclude) }
}
