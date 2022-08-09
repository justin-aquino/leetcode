const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//so for the merge sort, the idea is to keep splitting the array in
//half until there's only one element left in the array.

function mergeSort(array) {
  if (array.length === 1) {
    //this returns the array if the array has already been split into half
    //until there's only one left in the array.
    return array;
  }

  const middle = Math.floor(array.length / 2); //this is the array split in half
  const left = array.slice(0, middle); //left side of the array
  const right = array.slice(middle); //this is the right half.

  return merge(
    //recursion
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  console.log(left.slice(leftIndex), right.slice(rightIndex));

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
