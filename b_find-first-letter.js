/*
請根據字母順序 A, B, C ..., Z 找出 Array 中最順序前面的字母 
input : [G, H, E, Z, Y]
output: E
*/

// Q: 小寫是否計入

const findFirstLetter = (inputArr) => {
    if (!Array.isArray(inputArr)) return 'not an array';
    if (inputArr.length === 0) return 'empty array';
  
    // 檢查array內是否全為字串且為單一字母: 篩除不合者
    const filteredArr = inputArr.filter(i => typeof i === 'string' && i.length === 1);
    // 檢查array內是否全為大寫並排序 (這裡選擇把小寫納入比較範圍)
    const sortedArr = filteredArr.map(i => i.toUppercase()).sort();
  
    return sortedArr[0] ? sortedArr[0] : 'n/a';
  }