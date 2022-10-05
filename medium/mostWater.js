/*
    You are give an array of positive integers where each integer represents the height
    of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of wtaer.
    Return the area of water it would hold.


    let array = [ 1,8,6,2,,9,4] turn this into a bar chart.

    area is calculated with the formula Length x Width.

    So max area is 8 * 9 = 24.

    CONSTRAINTS:

    1. Does the thickness of the lines affect the area?
        - No

    2. Do the left and right sides of the graph count as walls?
        No, the sides cannot be used to form a container. We have to use the values of the arrays to form walls.
    
    3. Does a a higher line inside our container affect our area.
        -No, the lines inside a container don't affect the area.
        ex:

        [1,7,2,8,1,6]
*/


//TEST CASES

// 1.

let container = [ 7,1,2,3,9] // the container would be 7 and 9 because they're the 2 highest number that is fathest apart. L = 7, because the water would spill over 7
// width would be the distance between the two pillars.
/*
    we use the index calculation to figure out the width between the two walls. 7 would be in the 0th index, 9 would be 4th index.
    Subtract the indeces to figure out the distance. 4- 0 = 4. 4 is the distance/width.

    7 * 4 = 28.
*/

//2. [] = 0 because you can't make a container without pillars.

//3. [2] = 0 because we need two values to make a container.

/*
let container = [6,9,3,4,5,8]

In this case, it's not obvious which two is values can contain the max amount of water. It can be 6 and 8, or 9 and 8.
So let's calculate.

For 6 and 9, the width would be 6 *5 = 30
for 8 and 9, the width would be 8 * 4 = 32. So it would actually be 8 and 9. Not the one that's farther apart.
*/

//NOTE the problem wants to find the GREATEST. Meaning we would compare all elements to get the max value.


// area = l * w
//the length would be the lesser value of the two pillars.
// (a, b) a is the left value, and right is b.
// in this case, a is the lesser value, which would be our height. so the formula is as follows:

/*min(a,b) x (bi - ai) 
 length would be whichever is the minimum between a and b, multiplied by (the index of b minus(higher value) the index of a(lesser value))

*/


//BRUTE FORCE

/*
We're gonna do two pointers for brute force. a and b would be our pointers.

maxArea initializes at 0


let maxArea = 0;

first loop, we compare a and b which points at index 0 and 1.

min(7,1) * ( 1 - 0) = 1. So one is greater than our current maxArea which is 0. So we replace that with one. And so on and so forth. 
Once b reaches the end of the array, a moves 1 space forward, and the loop goes on until a reaches the end fo the array.
*/

const getMaxWaterContainer = (heights) => {

    let maxArea = 0;

    //double pointers technique

    for(let p1 = 0 ; p1 < heights.length; p1++){
        for(let p2 = p1 + 1; p2 < heights.length; p2++){
            const height = Math.min(heights[p1], heights[p2])// this looks for the lesser value between two pointers.
            const width = p2 - p1
            const area = height * width

            maxArea = Math.max(maxArea, area)
        }
    }

    return maxArea;

}