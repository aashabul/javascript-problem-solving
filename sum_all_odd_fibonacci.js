/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. */

function sumFibs(num) {
  if (num < 0) {
    return "insert positive value";
  } else if (num == 1) {
    return 1;
  } else {
    //because a fibonacci series starts from 0,1,1,2,3,........
    //so i initialized the array with 0,1 so that i can iterate from 1 to num and generate the fibonacci series

    //initializing the array
    let arr = [0, 1];
    //initializing the sum variable to 0 so that i can add the fibonacci numbers from the array and store it into sum.
    let sum = 0;
    //to generate the fibonacci series to the value num
    for (let i = 0, a = 0, b = 1; i <= num; i++) {
      let c = a + b;
      //if the last fibonacci number exceeds the num value then loop breaks
      if (c > num) {
        break;
      } else {
        a = b;
        b = c;
        arr.push(c);
      }
    }
    //to sum all the numbers stored in array
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] % 2 == 1) {
        sum = sum + arr[i];
      }
    }
    console.log(sum);
  }
}
//calling the function
sumFibs(1000);
