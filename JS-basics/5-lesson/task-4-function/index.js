/** 1й способ решения
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */

function min(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
}
console.log(min(0, -2));
console.log(min(5,3));
/** 2й способ решения
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
function min(firstNumber, secondNumber) {
  // put your code here
  let min;
  if (firstNumber < secondNumber) {
    min = firstNumber;
  } else {
    min = secondNumber;
  }
  return min;
}
console.log(min(100, 40));
console.log(min(30, 50));
