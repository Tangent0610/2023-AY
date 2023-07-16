/*
 將 Object key 攤平成 String
input : {a: { b: 5, c: {d: 3} }, e: { f: ‘foo’ } } 
output: { ‘a.b’: 5 , ‘a.c.d’: 3, ‘e.f’: ‘foo’ }
*/

  const flattenObject = (inputObj) => {
    if (inputObj && typeof inputObj !== 'object') {
      return {};
    }

    const result = {};
  
    const recursiveFunction = (obj, parentKey = '') => {
      Object.keys(obj).forEach((key) => {
          const value = obj[key];
          const currentKey = parentKey ? `${parentKey}.${key}` : key;
  
          if (typeof value === 'object' && value !== null) {
            recursiveFunction(value, currentKey);
          } else {
            result[currentKey] = value;
          }
        })
    }
  
    recursiveFunction(inputObj);
    return result;
  }
