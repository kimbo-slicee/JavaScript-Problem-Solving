/**
 * When provided with a String, capitalize all vowels
 * For example:
 * Input : "Hello World!"
 * Output : "HEllO WOrld!"
 * Note: Y is not a vowel in this kata.
 * Vowels are: a, e, i, o, u 
 * alphabet: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y and z .
 */
//[1]
 let vowels = ['a', 'e', 'i', 'o', 'u'];
 const  swap=(string)=> {
   if(/@/.test(string) || /^$/.test(string)){
	return string
   }else if(/[aeiou]/i.test(string)){
	return  string.split('').map(ele=>vowels.includes(ele)?ele.toUpperCase():ele).join('');
   }
  }
console.log( swap("ABRACADABRA"));

/**
 * Sample Tests 
 * 
 */

//  const strictEqual = require('chai').assert.strictEqual;
//
// function doTest (input, expected) {
// 	const actual = swap(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }
//
// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest("", "");
// 		doTest("   @@@", "   @@@");
// 		doTest("HelloWorld!", "HEllOWOrld!");
// 		doTest("Sunday", "SUndAy");
// 		doTest("Codewars", "COdEwArs");
// 		doTest("Monday", "MOndAy");
// 		doTest("Friday", "FrIdAy");
// 		doTest("abracadabra", "AbrAcAdAbrA");
// 		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		doTest("ABRACADABRA", "ABRACADABRA");
// 		doTest("aBRaCaDaBRa", "ABRACADABRA");
// 	});
// });