/**
 * - [1] Problem
 * You get an array of numbers,return the sum of all the positive Ones
 * Example [1,-4,7,12]=>1+7+12=20
 * - [2] Analysing problem
 * - First we will create a variable that hold the ony the positive numbers
 * - Second add the positive number the rest variable
 * */
// in this example I will work withe loops
function sum_Of_Positives(arr){
    let res=0;
    for(let i=0 ; i<arr.length ; i++ ){
        if(arr[i]>0){
            res+=arr[i]
        }
    }
    console.log(res);
}
sum_Of_Positives([1,-4,7,12,-13,-7]);

