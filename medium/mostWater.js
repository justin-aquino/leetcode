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

