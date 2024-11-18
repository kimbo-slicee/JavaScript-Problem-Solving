/**
 * Write a function Called repeat String repeats the given string
 * string exactly n time
 * Example
 * repeatStr(6,"I");"IIIIII"
 * repeatStr(5,"hello");"hellohellohellohellohello"
 */
const string_repeat=(t,s)=>s.repeat(t)
console.log(string_repeat(2,"hello"))
const string_repeat_by_Loop=(times,string)=>{
    let result="";
    if(typeof times==="number" && string !==null)
    for (let i=0;i<times ; i++){
     result+=string;
    }
    return result
}
console.log(string_repeat_by_Loop(4,"T"))
