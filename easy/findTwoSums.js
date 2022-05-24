//FIND TWO SUMS
// Given an array of integers, return the indeces of the two numbers that add up to a given target.

let nums = [1, 3, 7, 9, 2];

/*
StEP 1: Verify Constraints

1.Are the numbers negative or positive?
    Only positive integers.
2. Are there duplicates in the array?
    No
3. Will there always be a solution available?
   No. There may not always be a pair that sums up the target.
4. What do we return if there's no solution.
    Return null.
5. Will there be multiple pairs that can be added up to equal the target number.
    No there can always be one pair.
*/

/*
STEP 2: EDGE CASES

num = [1,3,7,9,2] target = 11 return [3,4]
num = [1,3,7,9,2] target = 225 return null
num = [] target = 5 return null
num = [1] target = 5 return null
num = [1,6] target = 7 return [0,1]
*/

/*
PSEUDO CODE

2 POINTERS TECHNIQUE

1. Initialize two pointers that points at some value.

p1 = num[0] the number we're testing
p2 = num[1] the other number we're adding p1 to.
numToFind = target - nums[p1]

In this case, target = 11 minus nums[p1] is 10. So the value of numToFind is 10.

If p2 is not equal to numToFind, we move the pointer to the next index.

If p2 is at the end of the array and still hasn't found the number equals to numToFind, we're going to move pointer 1 to the next index and repeat the process.

Once a pair that sums the target has been found, return both indeces.
*/

//BRUTE FORCE

// const findTwoSum = (arr, target) => {
//   for (let p1 = 0; p1 < arr.length; p1++) {
//     const numToFind = target - arr[p1];
//     for (let p2 = p1 + 1; p2 < arr.length; p2++) {
//       if (numToFind === arr[p2]) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null; //if there's no pair.
// };

/*
TIME COMPLEXITY
    -How many iteration your code has to run

    * The first for loop iterates through each element in the array. The time complexity for that is N.
    *The second for loop iterates through the majority of the elements in the array. Time complexity is also N.
    * Second for loop is also N because we identify the relationship relative to the size of the input.
        N x N = N^2
    
SPACE COMPLEXITY
    - amount of variables
*/

//OPTIMIZATION

/*
    UTILIZING A HASHMAP

    This hashmap stores the numToFind(value of the target minus p1) as the key, and then the value is the index.
*/

// let num = [1,3,7,9,2]
// let target = 11

// let hashMap = {
//     10:0, // 11-1 = 10, index of 1 is 0
//     8:1, //11-3 = 8, index of 3 is 1
//     4:2, //11-7 = 4, index of 7 is 4
//     2:3, //11-9 = 2, index of 9 is 3
//     //Now, when p1 moves to the last number in the array, which is 2, we do not need to generate a numToFind, because it already exists in our hashmap.
//     //Meaning, that the number with the corresponding index in the num array equal to the value of 2 in our hashmap PLUS the number p1 is pointing to at the moment, is the pair that sums up the target.
//     // In this case, we'd want to return [hashMap[p1], [p1]] which gives us [3,4]
// }

const findTwoSum = (nums, target) => {
  const hashMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = hashMap[nums[p]]; //this checks if the current element we're pointing at already exists in the hashmap, it will give us the value of the key,
    //which is essentially the index of the first number in our twoSums.
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - nums[p];
      hashMap[numToFind] = p; //this is if numToFind does not exist in our hashmap yet, then it will "push" it in the hashmap as a key, with p as it's value.
      //then it will keep looping until it finds a pair for the if statement.
      //if it reaches the end of the array without finding a pair, it will reach line 113 and return null.
    }
  }
  return null;
};

console.log(findTwoSum([1, 3, 7, 9, 2], 11)); //returns [3,4]

// let food = {
//   "banana": "plantains",
//   "apple": "circle",
//   "oranges": "citrus"
// }

// food["oranges"] = "limes" //changes the value of the orange key.

// console.log(food["oranges"]) //returns limes
adsfasdasdfas;
