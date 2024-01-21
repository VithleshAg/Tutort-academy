// Q1

var myPow = function(x, n) {
    if(n==0) return 1;

    if(n<0) {
        x = (1/x);
        n = -n;
    }

    if(n%2 ==0){
        return myPow(x*x, n/2)
    } else {
        return x * myPow(x*x, (n-1)/2)
    }
};

// Q2
var isPowerOfTwo = function(n) {
    if(n<1) return false;
    if(n==1) return true;

    if(n%2 == 0) return isPowerOfTwo(n/2)
    else return false;
};

// Q3

var countGoodNumbers = function (n) {
    let m=1000000007n; 
    let even=Math.ceil(n/2); 
    let odd=n-even; 

    function Pow(x, y){
        if(y===0) return 1n; 
        var res = 1n;
        res *= Pow(x,Math.floor(y/2));
        res *= res;
        if(y%2 === 1) res *= BigInt(x);
        res %= m;
        return res;
    }

// recursively calc x^(y/2) => cutting half in each recursion => squring the result => 
    var ans = Pow(5,even)*Pow(4,odd);
    ans%=m;

    return Number(ans);
};