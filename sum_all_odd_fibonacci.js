/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. */

function sumFibs(num) {
  let sum = 1;
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 1) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumFibs(13));
// learning fibonacci series concepts
