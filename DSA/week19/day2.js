// Dynamic programming:

// => It's all about remembering your past Recursive code  
// => converting TC of O(2^n) or O(m^n) into O(n^2) or O(m^2) by using extra space
// => usage of extra memory : 1D, 2D Array or dictionary

// Memoization - Storing the calculated value in array/ DS  and reusing the same whenever required. 



// Optimization technique 
// For problems with overlapping solutions 
// Top Down Approach( Recursion + storage) 
// Bottom Up Approach(storage) 


// Where can use DP=>
// -- Count number of ways 
// -- maximum 
// --minimum  
// --total ways 
// -- options to select or choose from 


// Fibonacci series=>

//previous approach:

function fib(n){
    if(n==0 || n==1) return n;

    return fib(n-1)+fib(n-2);
}


// Approach 1 - Top down   TC: O(n), SC: O(n)
// Recursion + DP Array(storage)

const dp = [0,1];

function fib(n){
    if(!dp[n-1]) dp[n-1] = fib(n-1);

    if(!dp[n-2]) dp[n-2] = fib(n-2);

    dp[n] = (dp[n-1] + dp[n-2]);
    return dp[n];
}


// Approach 2 - Bottom Up       TC: O(n), SC: O(n)
// We fill initial values 
// Based upon initial values we calculate other values 
// DP Array(storage)

function fib(n){
    const dp = [0,1];
    for(let i=2; i<=n; i++) dp[i] = (dp[i-1]+dp[i-2]);
    return dp[n];
}



// Since We need only previous and previous to previous value only 
// TC: O(n), SC: O(1)

function fib(n){
    if(n==0 || n==1) return n;
    let a=0, b=1, c;
    for(let i=2; i<=n; i++){
        c = a+b;
        a=b;
        b=c;
    }
    return c;
}


// https://leetcode.com/problems/climbing-stairs

var climbStairs = function(n) {
    if(n==0 || n==1) return n;
    let a=1, b=1, c;
    for(let i=2; i<=n; i++){
        c = a+b;
        a=b;
        b=c;
    }
    return c;
};