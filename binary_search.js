number_list = [
  1, 3, 5, 7, 9, 15, 20, 80, 110, 120, 150, 300, 316, 360, 370, 400, 420, 450,
  480, 490, 530,
];

const binary_search = (list, item) => {
  let low = 0;
  console.log("low = ", low);

  let high = list.length - 1;
  console.log("high = ", high);

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    console.log(`mid = Math.ceil(${(low + high) / 2}) = `, mid);

    let guess = list[mid];
    console.log(`#guess = list[${mid}] = `, list[mid]);

    if (guess == item) {
      return `============ result item index ${mid} ===========`;
    }
    if (guess > item) {
      console.log("!!guess > item!!");

      high = mid - 1;
      console.log("high = mid - 1 =", high);
    } else {
      console.log("!!guess < item!!");

      low = mid + 1;
      console.log("low = mid + 1 =", low);
    }
  }
  return "============ not found ============";
};

console.log(binary_search(number_list, 540));
console.log(binary_search(number_list, 530));
console.log(binary_search(number_list, 1));
console.log(binary_search(number_list, 9));
