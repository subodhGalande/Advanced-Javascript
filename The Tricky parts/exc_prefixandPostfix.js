decrementArrayElements = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - 1;
  }
  console.log(arr);
  return arr;
};

decrementArrayElements([1, 2, 3, 45, 56, 67]);
