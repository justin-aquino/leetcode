const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (array) => {
  const length = array.length;
  for (let x = 0; x < length; x++) {
    if (array[x] < array[0]) {
      //if the current i is less than the first el, switch their position
      array.unshift(array.splice(x, 1)[0]);
    } else {
      for (let y = 1; y < length; y++) {
        //this is where we figure out where to put the number we unshifted on first for loop
        if (array[x] > array[y - 1] && array[x] < array[y]) {
          //move number to the correct spot
          array.splice(y, 0, array.splice(x, 1)[0]);
        }
      }
    }
  }
};
