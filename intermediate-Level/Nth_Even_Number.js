/**
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
 */
function nthEven(n){
    if(n!==0){
        let range=n*2
        let evenNums=[];
        for(let i=0 ; i<=range;i++){
            if(i%2===0){
                evenNums.push(i)
            }
        }
        return evenNums[n-1]
    }
    
  }
  
  console.log(nthEven(1298734));
// Solution Two
const nthEven=n=>n*2-2;




/*----------------------------------------------------------------------------------------------------------------------*/
// Sample Tests
//   const chai = require('chai');
//   const assert = chai.assert;
//   describe("Sample tests", () => {
//     it("Taken from the description", () => {
//       assert.strictEqual(nthEven(1), 0, "Wrong Value!");
//       assert.strictEqual(nthEven(2), 2, "Wrong Value!");
//       assert.strictEqual(nthEven(3), 4, "Wrong Value!");
  
//       assert.strictEqual(nthEven(100), 198, "Wrong Value!");
//       assert.strictEqual(nthEven(1298734), 2597466, "Wrong Value!");
//     });
//   });
   