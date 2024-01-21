// https://leetcode.com/problems/powx-n/submissions/

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

// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
    // Approach 1
    // TC = O(log2(n))
    // let res = true;

    // if(n<=0) return false;

    // while(n>1){
    //     if(n%2 !== 0) {
    //         res = false;
    //         break;
    //     } else n = n/2;
    // }

    // return res;

    // Approach 2
    // TC O(logn)
    
    // if(n<=0) return false;
    // if(n==1) return true;

    // if(n%2 == 0) return isPowerOfTwo(n/2)
    // else return false;

    // Approach 3
    // TC O(logn)
    return n>0 && (n&n-1)===0;
};