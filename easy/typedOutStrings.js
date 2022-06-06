/*
Given two strings, S and T, return if they equal when both are typed out. 
Any "#" that appears in the string couts as a backspace.
Example: "cb#d", actually means "cd" because we deleted b.
Therefore,

let s = "ab#c"
let t = "az#c"

s === t returns true, because the output is both "ac"
*/

/**
STEP 1 : CONSTRAINTS
1. What happens when two #'s appear beside each other?
    -Delete the two values before the first #.
    example: "abcd##e" would return "ae"

2. What happens to # when there is no character to remove?
    -it deletes nothing.

3. Are two empty strings equal to each other ? -- Yes
    S: "x#y#z#" is the same as T: "a#" because they both return empty string.
4. It is case sensitive.
 */

/*
TEST CASES: 
S: "ab#z"   T: "az#z" //returns true
S: "abc#d"  T: "acc#c" //returns false
S: "x#y#z#" T: "a#" //returns true
S: "a###b" T: "b" //returns true
S: "Ab#z"   T: "ab#z" returns false case sensitive.

*/
//BRUTE FORCE
const builtArray = (string) => {
  let array = [];
  for (let x = 0; x < string.length; x++) {
    if (string[x] !== "#") {
      array.push(string[x]);
    } else {
      array.pop();
    }
  }
  return array;
};

const compareStrings = (s, t) => {
  const finalS = builtArray(s);
  const finalT = builtArray(t);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let x = 0; x < finalS.length; x++) {
      if (finalS[x] !== finalT[x]) {
        return false;
      }
    }
  }
  return true;
};
