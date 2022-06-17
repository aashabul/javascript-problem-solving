function convertToRoman(num) {
  const givenTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let accumulator = "";

  for (const key in givenTable) {
    const number = givenTable[key];
    while (number <= num) {
      num -= number;
      accumulator += key;
    }
  }
  return accumulator;
}

convertToRoman(36);
