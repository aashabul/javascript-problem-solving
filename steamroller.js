function steamrollArray(arr) {
  const flattenedArray = [];

  //loop through the arr
  for (let i = 0; i < arr.length; i++) {
    // Recursively flatten entries that are arrays
    //  and push into the flattenedArray
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      //copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
