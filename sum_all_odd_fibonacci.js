/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. */

function sumFibs(num) {
  if (num < 0) {
    return "insert positive value";
  } else if (num == 1) {
    return 1;
  } else {
    let arr = [0, 1];
    let sum = 0;
    for (let i = 0, a = 0, b = 1; i <= num; i++) {
      let c = a + b;
      if (c > num) {
        break;
      } else {
        a = b;
        b = c;
        arr.push(c);
      }
    }
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] % 2 == 1) {
        sum = sum + arr[i];
      }
    }
    console.log(sum);
  }
}
sumFibs(1000);
// learning fibonacci series concepts
