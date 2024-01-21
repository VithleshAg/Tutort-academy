// https://leetcode.com/problems/first-unique-character-in-a-string

var firstUniqChar = function(s) {
    // TC=> O(n) SC=> O(n)
    let obj = {};

    let i =0;
    for(let char of s){
        if(obj[char]) obj[char][1]+=1;
        else obj[char] = [i,1];
        i++;
    }

    for(let key in obj){
        if(obj[key][1]==1) return obj[key][0];
    }

    return -1;
};

// https://leetcode.com/problems/longest-palindrome

var longestPalindrome = function(s) {
    // TC=> O(n) SC=> O(1)

    if(s.length==1) return 1;

    let obj = {};

    for(let v of s){
        obj[v] = obj[v]+1 || 1;
    }

    let n =0;
    let isOddPresent = false

    for(let v in obj){
        if((obj[v]%2) ===0) n+=obj[v];
        else {
            isOddPresent = true;
            n += (obj[v]-1);
        }
    }

    if(isOddPresent) n += 1;
    return n;
};


// Sliding window problem
// => Array/string will be given 
// => Max or min to be calculated 
// k can be of fix type(like 3) or varibale type

// https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

function maximumSumSubarray(K, Arr, N) {
    //code here
    let j=0, i=0;
    let ms = Math.max();
    let sum = 0;
    
    while(j<N){
        sum += Arr[j];
        if(j-i+1 == K){
            ms = Math.max(ms, sum);
            sum -= Arr[i];
            i++;
        }
        j++;
    }
    
    return ms;
    
  }