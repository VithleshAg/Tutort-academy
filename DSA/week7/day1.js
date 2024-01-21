// Topic => Bit Manipulation

// clear ith bit of number

function clearIthBit(n ,i){
    const ithBit = 1 << (i-1);
    const comp = ~ithBit;
    return n&ithBit; 
}

// count set bits

function countSetBits(n){
    let count = 0;

    while(n>0){
        if(n&1) count++;
        n >>= 1;
    }

    return count;
}

// https://leetcode.com/problems/missing-number

var missingNumber = function(nums) {
    // Bit manipulation

    // let ans = 0;
    // for(var i=0; i<nums.length; i++){
    //     ans = ans^i^nums[i];
    // }

    // ans = ans^i;

    // return ans;

    // Approach 2
    let n = nums.length;
    let expectedSum = n*(n+1)/2;
    let actualSum = 0;
    
    for(let v of nums) actualSum+=v;

    return expectedSum-actualSum
};


// https://leetcode.com/problems/single-number

var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        ans = ans^nums[i]; 
    }

    return ans;
};


// https://leetcode.com/problems/single-number-iii

var singleNumber = function (nums) {
    let exor = 0;
    const ans = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        exor = exor ^ nums[i];
    }

    // right most set bit
    // let rmsb = 1;
    // while(!(rmsb&exor)) rmsb = rmsb<<1;

    let rmsb = exor&(-exor);

    for (let i = 0; i < nums.length; i++) {
        if (rmsb & nums[i]) ans[0] = ans[0] ^ nums[i];
        else ans[1] = ans[1] ^ nums[i];
    }

    return ans;
};