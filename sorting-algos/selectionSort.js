const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  let length = array.length;

  for (let x = 0; x < length; x++) {
    let min = x; //current smallest number in the array
    let temp = array[x];
    for (let y = x + 1; y < length; y++) {
      if (array[y] < array[min]) {
        min = y; //the minimum number becomes the number that the y is pointing to.
      }
    }
    array[x] = array[min]; //this is where the swap happens if a lower number has been found
    array[min] = temp; //the older min (the bigger number) is now placed to the old index of the lower number
  }
  return array;
};
