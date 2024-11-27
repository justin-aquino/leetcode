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
// const builtArray = (string) => {
//   let array = [];
//   for (let x = 0; x < string.length; x++) {
//     if (string[x] !== "#") {
//       array.push(string[x]);
//     } else {
//       array.pop();
//     }
//   }
//   return array;
// };

// const compareStrings = (s, t) => {
//   const finalS = builtArray(s);
//   const finalT = builtArray(t);

//   if (finalS.length !== finalT.length) {
//     return false;
//   } else {
//     for (let x = 0; x < finalS.length; x++) {
//       if (finalS[x] !== finalT[x]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

//Optimized Solution

let s = "abc#d";
let t = "abzz##d";

//Utilize two pointer technique that points at the end of each string.

const backSpaceCompare = function (s, t) {
 let p1 = s.length - 1; //points at the last character of the s string
 let p2 = t.length - 1; //points at the last character of the t string

 while (p1 >= 0 || p2 >= 0) {
  if (s[p1] === "#" || t[p2] === "#") {
   // first hash encountered for either inputs

   if (s[p1] === "#") {
    //checks first hash encountered for s input
    //checks if the character at the left of the 1st # is also a #
    let backCount = 2; //If current s is equal to a #, it will move 2 spaces to the left
    //2 spaces because we know that the first char in the first space will get deleted, so we need to check the other one too.
    while (backCount > 0) {
     // the backcount counts how many # there are.
     p1--; //now this pointer moves 1 space to the left and checks again if it's #. If it is, then it will run backCount -- AND THEN, run block code line 87-90 to decrement the backCount by 2 again.
     // as long as the backCount is not 0, it will continue moving to the left and check for #
     backCount--; // decrement the backCount per movement to the left.
     if (s[p1] === "#") {
      backCount = backCount + 2; //this block of code checks if there's another # after accounting for consecutive ##
      //if there's another # in the string, backCount will increment and will trigger the while loop again.
     }
    }
   }

   //do the same for t
   if (t[p2] === "#") {
    let backCount = 2;
    while (backCount > 0) {
     p2--;
     backCount--;
     if (t[p2] === "#") {
      backCount = backCount + 2;
     }
    }
   }
  } else {
   // this is if the pointers of both strings are already at the last character in the string.
   if (s[p1] !== t[p2]) {
    return false; //this is if the final strings arent equal
   } else {
    p1--;
    p2--; //pointers keep moving to the left until they reach the last character of the string
   }
  }
 }
 return true; //returns true if they are equal.
};
