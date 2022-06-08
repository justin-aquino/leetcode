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

/*
//The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
In our solution:

X is the number that is currently the "min"
Y is the number that is scanning ahead, looking for the number lower than the current min. 
When y points at a number lower than x, y becomes the new "min", and then the loop continues until it reaches the end of the array
If y reaches the end of the array without changing the min, it means that the element that x is pointing at is the smallest number in the array. In this case, number[x] will be moved to the first position.

*/
