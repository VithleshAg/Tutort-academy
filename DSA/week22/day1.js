// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/submissions/
var maxProfit = function(k, prices) {
    const dp = new Map();
    return getProfit(0, 0, k);

    function getProfit(i, buySell, k){
        let profit = 0;
        let key = `${i}-${buySell}-${k}`;

        if(i==prices.length || k==0) return 0;
        if(dp.has(key)) return dp.get(key);
        if(buySell == 0){
            let buy = getProfit(i+1, 1, k) - prices[i];
            let noBuy = getProfit(i+1, 0, k);
            profit += Math.max(buy, noBuy);
        } else{
            let sell = getProfit(i+1, 0, k-1) + prices[i];
            let noSell = getProfit(i+1, 1, k);
            profit += Math.max(sell, noSell);
        }
        dp.set(key,profit);
        return profit;
    }
};

// https://leetcode.com/problems/decode-ways/submissions/
var numDecodings = function(s) {
    const dp = new Array(s.length).fill(-1);
    return getNumDecoding(0);
    
    function getNumDecoding(i){        
        if(i>=s.length) return 1;
        if(s[i]==0) return 0;
        if(dp[i] !== -1) return dp[i];
        let a = getNumDecoding(i+1);
        let ab = i+1==s.length || parseInt(s[i]+s[i+1]) > 26 ? 0 : getNumDecoding(i+2);
        return dp[i] = a+ab;
    }
};

// https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1

class Solution {
    
    matrixMultiplication(arr, n)
    {
        //your code here
        const dp = new Map();
        return getMCM(1, n-1);
        
        function getMCM(i, j){
            const key = `${i}-${j}`;
            
            if(i==j) return 0;
            if(dp.has(key)) return dp.get(key);
            
            let minMul = Math.min();
            for(let k=i; k<j; k++){
                let currMul = arr[i-1] * arr[k] * arr[j];
                let leftMul = getMCM(i, k);
                let rightMul = getMCM(k+1, j);
                minMul = Math.min(minMul, currMul+leftMul+rightMul);
            }
            dp.set(key, minMul);
            return minMul;
        }   
    }
}