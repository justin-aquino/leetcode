/*
MINIMUM COST OF CLIMBING STAIRS

Recursion- a function that calls itself.



*/

function climbStairs(n) {
  if (n <= 3) return n; //if there's only 3 steps on the stairs.

  let ways = [0, 1, 2, 3]; // think of this index as the number of ways it takes to get to the last step. It takes 0 steps to get to 0
  //1 step to get to the first step, etc.

  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]); //fibonacci sequence. the 4th index would have the value of 5.
  }

  return ways[n]; //returns the element in the array with the index of n.
}
