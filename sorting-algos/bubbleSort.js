//bubble sort basically compares two elements next to each other if one is greater than the other.
//It continues to loop until it all elements are properly sorted.
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  const length = array.length;

  for (let x = 0; x < length; x++) {
    //first for loop runs the entire algo from index 0 to compare again after 2nd for loop reached end of array
    for (let y = 0; y < length; y++) {
      //2nd for loop is to compare 2 elements that are next to each other, and moves one space to the right per loop
      if (array[y] > array[y + 1]) {
        let temp = array[y];
        array[y] = array[y + 1];
        array[y + 1] = temp;
      }
    }
  }
};
