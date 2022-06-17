function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    //shift returns the element that was removed
    arr.shift();
  }
  //returns the modified array
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
