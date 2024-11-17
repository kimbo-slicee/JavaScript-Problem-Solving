/*
 * - Task:
 * Sum all numbers of a given array expect the highest and the lowest element (by value not by index)
 * The highest or Lowest respectively a single element at each edge even if there are more than one withe same value
 * Mind the input validation
 * - Example:
 * {6,2,1,8,10}=16
 * {1,1,11,2,3}=6
 * 
 * /

/**
 * Solution 1;
 * check if empty Value returen 0
 * fnid the heighest and lowest Number 
 * fillter the array 
 * summall numbers in the array 
 */
function Highest_And_The_Lowest_Number(array){
    if(array!==null){
        let max=Math.max(...array);
        let min=Math.min(...array);
        indexofMaxNumber=array.indexOf(max);
        indexofMinNumber=array.indexOf(min);
        return array.filter((ele,index)=>index!==indexofMaxNumber && index!==indexofMinNumber).reduce((prev,curr)=>prev+curr);

        }
}
console.log(Highest_And_The_Lowest_Number([1,1,11,2,3]));

/**
 * Solution 2;
 * sort the array and sum the numbers from the third to the second last element
 */
const solve_by_sorting=(array)=>array.sort((a,b)=>a-b).slice(1, array.length - 1).reduce((prev, curr) => prev + curr)
    
console.log(solve_by_sorting([1,1,11,2,3]))