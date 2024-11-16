/**
 * - Task:
 * Sum all numbers of a given array expect the highest and the lowest element (by value not by index)
 * The highest or Lowest respectively a single element at each edge even if there are more than one withe same value
 * Mind the input validation
 * - Example:
 * {6,2,1,8,10}=16
 * {1,1,11,2,3}=6
 * */

/**
 * Solution
 *
 */
function sum_Without_The_Highest_And_The_Lowest_Number(array){
    let highest=0;
    let lowest=0
    // let index =0;
    for(let i=0; i<array.length ; i++ ){
      if(array[i]>array[i+1]){
          highest=array[i];
      }else if(array[i]<array[i+1]){
          highest=array[i+1];

      }
    }
    console.log(highest)
}
sum_Without_The_Highest_And_The_Lowest_Number( [6,2,1,8,10,23,15,100,1,2,3]);
/**
 * second Solution Using ESC 6
 *
 * */
