function selectionSort(arr) {
  //making a copy of the array
  const result_arr = arr.slice();
  for (let i = 0; i < result_arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < result_arr.length; j++) {
      if (result_arr[j] < result_arr[minIndex]) {
        minIndex = j;
      }
    }
    // const temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;
    [result_arr[i], result_arr[minIndex]] = [
      result_arr[minIndex],
      result_arr[i],
    ];
  }
  return result_arr;
}
const arr = [10, 0, 1, 9, -1, 100, -3, 2, 3];
console.log(selectionSort(arr));
console.log(arr);
