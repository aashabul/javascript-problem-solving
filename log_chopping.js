const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let testCase = 0;
let numberLogs = 0;
let lengthLogs = 0;
rl.question(function (number, lognumber, lengthLogs) {
  testCase = number;
  numberLogs = lognumber;
  numberLogs = lengthLogs;
  rl.close();
});

console.log(testCase, numberLogs, lengthLogs);
