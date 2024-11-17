/**
 * When provided with a String, capitalize all vowels
 * For example:
 * Input : "Hello World!"
 * Output : "HEllO WOrld!"
 * Note: Y is not a vowel in this kata.
 * Vowels are: a, e, i, o, u 
 * alphabet: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y and z .
 */

 const  swap=(string)=> {
    if(){

    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').map(ele=>{
        if( vowels.includes(ele.toLowerCase())){
            ele.toUpperCase();
        }
    }).join('');
    
  }
 swap("Hello World!");


/**
 * Sample Tests 
 * 
 */

 const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
	const actual = swap(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", () => {
	it("sample tests", () => {
		doTest("", "");
		doTest("   @@@", "   @@@");
		doTest("HelloWorld!", "HEllOWOrld!");
		doTest("Sunday", "SUndAy");
		doTest("Codewars", "COdEwArs");
		doTest("Monday", "MOndAy");
		doTest("Friday", "FrIdAy");
		doTest("abracadabra", "AbrAcAdAbrA");
		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
		doTest("ABRACADABRA", "ABRACADABRA");
		doTest("aBRaCaDaBRa", "ABRACADABRA");
	});
});