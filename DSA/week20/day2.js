// https://practice.geeksforgeeks.org/problems/distinct-coloring--170645/1
const dp = Array(N)
  .fill(null)
  .map(() => Array(3));

dp[0][0] = r[0];
dp[0][1] = g[0];
dp[0][2] = b[0];

for (let i = 1; i < N; i++) {
  dp[i][0] = r[i] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = g[i] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = b[i] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

return Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);

// https://leetcode.com/problems/house-robber/submissions/

var rob = function (nums) {
  (TC) => O(n), (SC) => O(1);
  // const N = nums.length;

  // if(N==1) return nums[0];
  // if(N==2) return Math.max(nums[0], nums[1]);

  // nums[1] = Math.max(nums[0], nums[1]);

  // for(let i=2; i<N; i++) nums[i] = Math.max(nums[i-1], nums[i] + nums[i-2]);

  // return nums[N-1];

  // TC => O(n), SC => O(1)
  const N = nums.length;

  if (N == 1) return nums[0];
  if (N == 2) return Math.max(nums[0], nums[1]);

  let prev = Math.max(nums[0], nums[1]),
    prevPrev = nums[0];

  for (let i = 2; i < N; i++) {
    let curr = Math.max(prev, nums[i] + prevPrev);
    prevPrev = prev;
    prev = curr;
  }

  return prev;
};


// https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1
class Solution {
    isSubsetSum(arr,n,sum){
        //code here
        let dp = new Array(n).fill(null).map(() => Array(sum+1).fill(-1))
        return this.findSubset(arr, n, 0, sum, dp) == 1 ? true : false; 
    }
    
    findSubset(arr, n, ind, sum, dp){
        if(ind==n) {
            if(sum==0) return 1;
            return 0;
        }
        if(dp[ind][sum] != -1) return dp[ind][sum];
        
        let include = 0, exclude = 0;
        if(sum >= arr[ind]) include = this.findSubset(arr, n, ind+1, sum-arr[ind], dp);
        
        exclude = this.findSubset(arr, n, ind+1, sum, dp); 
        
        dp[ind][sum] = include || exclude;
        return dp[ind][sum];
    }
}