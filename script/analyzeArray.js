export function analyzeArray(array = []) {
  const sumArr = [...array];
  const obj = {
    average: sum(sumArr) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => a - b)[array.length - 1],
    length: array.length,
  };
  return obj;
}
function sum(arr = [], res = 0) {
  let num = arr.shift();
  return num ? sum(arr, res + num) : res;
}
