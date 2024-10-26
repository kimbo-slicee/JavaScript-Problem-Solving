/**
 * [1] Problem
 * You get an array of numbers,return the sum of all the positive Ones
 * - Example [1,-4,7,12]=>1+7+12=20
 * [2] Analysing problem
 * - 
 * */
// in this example I will work withe loops
function sum_Of_Positives(arr){
    let res=0;
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i]>0 && arr[i+1]>0){
        res+=(arr[i]+arr[i+1])
    }else if(arr[i]<0 || arr[i+1]<0){
        i=i+1
        res+=(arr[i]+arr[i+1])
    }
  }
  console.log(res)
}
sum_Of_Positives([1,-4,7,12])
