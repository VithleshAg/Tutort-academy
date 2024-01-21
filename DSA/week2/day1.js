//10 June 2023

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function(n) {
    const strArr = [];
    for(let i=1; i<=n; i++){
        let res = ((i%3) === 0 ? "Fizz" : "") + ((i%5) === 0 ? "Buzz" : "");
        strArr.push(res !== ""? res : `${i}`)
    }
    return strArr
};