//return the sum of all prime numbers that are less than or equal to num.

//function to check whether a number is prime or not
function isPrime(a) {
  if (a == 2) {
    return true;
  }
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

//sum all the primes that we have found between 2 to num
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumPrimes(977));
