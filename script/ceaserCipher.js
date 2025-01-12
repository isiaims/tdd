const letters = "qwertyuiopasdfghjklzxcvbnm";
const lowerCase = [...letters.split("").sort()];
const upperCase = [...letters.toUpperCase().split("").sort()];

export function ceaserCipher(string = "", shift) {
  let arr = string.split("");
  let shiftIndex = 0;
  let index = 0;
  let resultArr = [];
  arr.forEach((char) => {
    if (lowerCase.includes(char)) {
      shiftIndex = lowerCase.findIndex((i) => i === char) + shift;
      while (shiftIndex >= lowerCase.length) {
        index = shiftIndex;
        shiftIndex -= lowerCase.length;
      }
      resultArr.push(lowerCase[shiftIndex]);
    } else if (upperCase.includes(char)) {
      shiftIndex = upperCase.findIndex((i) => i === char) + shift;
      while (shiftIndex >= upperCase.length) {
        index = shiftIndex;
        shiftIndex -= upperCase.length;
      }
      resultArr.push(upperCase[shiftIndex]);
    } else {
      resultArr.push(char);
    }
  });
  return resultArr.join("");
}
