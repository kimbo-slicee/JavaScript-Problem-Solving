/**
 ---
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and
 unbreakable. Implement a function that will return minimum number of breaks needed. For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break,but for size 3 x 1 you must do two breaks. If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
 ---
* */
function breakChocolate(n, m) {
    // Check for invalid input
    if (n <= 0 || m <= 0) return 0;

    // Total number of breaks needed is (n * m) - 1
    return (n * m) - 1;
}

// Examples:
console.log(breakChocolate(2, 1)); // Output: 1
console.log(breakChocolate(3, 1)); // Output: 2
console.log(breakChocolate(0, 5)); // Output: 0 (invalid input)
console.log(breakChocolate(4, 4)); // Output: 15


//Sample Tests
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(breakChocolate(5, 5) , 24)
Test.assertEquals(breakChocolate(1, 1) , 0)
  });
});