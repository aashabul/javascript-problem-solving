function palindrome(str) {
  //lowercase the input
  //strip out non-alphanumeric characters
  //return string === reverseString
  const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);

  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

palindrome("eye");
