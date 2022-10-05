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