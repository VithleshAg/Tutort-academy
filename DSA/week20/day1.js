// https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    dp = new Map();
    knapSack(W, wt, val, n)
    { 
       // code here
       let key = W+"-"+n;
       if(W==0 || n==0) return 0;
       if(this.dp.has(key)) return this.dp.get(key);
       
       let selected=0, rejected=0;
       if(W-wt[n-1] >=0) selected = val[n-1]+this.knapSack(W-wt[n-1], wt, val, n-1);
       
       rejected = this.knapSack(W, wt, val, n-1);
        this.dp.set(key, Math.max(selected, rejected));
        return this.dp.get(key);
    }
}

// https://leetcode.com/problems/longest-common-subsequence

var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length, n = text2.length;
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
    return getLcs(0, 0);

    function getLcs(i, j) {
        if (i == m || j == n) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        if (text1[i] == text2[j]) dp[i][j] = 1 + getLcs(i + 1, j + 1);
        else {
            let selectText1 = getLcs(i, j + 1);
            let selectText2 = getLcs(i + 1, j);
            dp[i][j] = Math.max(selectText1, selectText2);
        }

        return dp[i][j];
    }
};

// https://leetcode.com/problems/longest-increasing-subsequence
var lengthOfLIS = function(nums) {
    let dp = [];
    let max = 1;
    for(let i=0; i<nums.length; i++){
        dp[i] = 1;
        for(let j=i-1; j>=0; j--){
            if(nums[i] > nums[j] && dp[i] < 1+dp[j]) {
                dp[i] = 1+dp[j];
                max = Math.max(max, dp[i]);
            }
        }
    }

    return max;
};