// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

arr = [4,2,1,3,5]
function move_lowest(arr) {
    lowest_val=arr[0]
    new_arr = []
    for (var i=0; i<arr.length; i++)        
        if(arr[i]<lowest_val) 
            lowest_val=arr[i]
    console.log(lowest_val)      
    new_arr.push(lowest_val)
    for (var k=0; k<arr.length; k++)
        if(arr[k] != lowest_val)       
            new_arr.push(arr[k])
    console.log(new_arr)
    return new_arr
}

move_lowest(arr);