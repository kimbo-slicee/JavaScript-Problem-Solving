/**
 * - create Function that takes an integer as  an argument and returns "Even"
 * for even numbers or "Odd" for add numbers
 * -----------------------------------------
 * - before starting coding we should hove a vision about the algorithm
 * [1] what is Odd and even number
 * - Odd numbers: Any natural number that can be expressed in the form of (2n + 1) is called an odd number, where n
 * is any natural number, i.e. positive integer.
 * - Even numbers: Any natural number that can be expressed in the form of 2n is called an even number, where n is any natural number, i.e. positive integer.
 * -Simply, we can say that those number which are divisible by 2 are called even numbers, whereas those numbers
 * which are not divisible by 2 are called odd numbers.
 * [2] But the 1M$ dollar question is : How can i use this info to resolve the problem ?
 * - so simple the result of division of n by 0 = 0 so n it's Even if not n it's Odd
 * - but how can i know the rest of division it's so simple just use % operator
 * */
function evenOrOddNumber(number){
// let's start by using conditions
    if(number!==0){
        if(number % 2===0){
            console.log(`${number} is Even`)
        }else {
            console.log(`${number} is Odd`)

        }
    }else {
        console.log("Please Make sure That's Number is more then 0")
    }
}
evenOrOddNumber(10)
evenOrOddNumber(1)
evenOrOddNumber(5)
evenOrOddNumber(6)
evenOrOddNumber(7)
//we Can Simplify this function by using ES6
const odd_or_even=(number)=> number!==0 && number % 2 ===0  ?"Even":"Odd";
odd_or_even(9)
odd_or_even(2050)
odd_or_even(1337)


