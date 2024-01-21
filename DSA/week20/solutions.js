// Q6
var maxProduct = function(nums) {
    // prefix sum approach (dp)

    // let currPrefix = 1;
    // let max = Math.max();
    // let firstNeg = 1;

    // for(let i=0; i<nums.length; i++) {
    //     currPrefix *= nums[i];
    //     let mul = currPrefix;
    //     if(mul==0) {
    //         firstNeg=1;
    //         currPrefix=1;
    //     } else if(mul<0){
    //         if(firstNeg==1) firstNeg=mul;
    //         else mul /= firstNeg;
    //     }
    //     max = Math.max(max, mul);
    // }

    // return max;

    // DP

    let minDp = nums[0];
    let maxDp = nums[0];
    let res = nums[0];
    
    for(let i=1; i<nums.length; i++){
        let tempMinDp = Math.min(minDp*nums[i], maxDp*nums[i], nums[i]);
        let tempMaxDp = Math.max(minDp*nums[i], maxDp*nums[i], nums[i]);
        minDp = tempMinDp;
        maxDp = tempMaxDp;
        res = Math.max(res, maxDp);
    }
    return res;
};


// Q7
var maxTurbulenceSize = function(arr) {
    let tempArr = new Array(arr.length).fill(null).map((val, i) => [i%2==0 ? -1 : 1, i%2==0 ? 1 : -1]);
    tempArr[0] = [1, 1];
    let max = 1;

    for(let i=1; i<arr.length; i++){
        if(arr[i] == arr[i-1]) {
            tempArr[i][0] = 1;
            tempArr[i][1] = 1;
        }
        else if(arr[i]>arr[i-1]){
            if(tempArr[i][0]==1) tempArr[i][0] = tempArr[i-1][0] + 1;
            else tempArr[i][0] = 1;

            if(tempArr[i][1]==1) tempArr[i][1] = tempArr[i-1][1] + 1;
            else tempArr[i][1] = 1;
        } else{
            if(tempArr[i][0]==-1) tempArr[i][0] = tempArr[i-1][0] + 1;
            else tempArr[i][0] = 1;

            if(tempArr[i][1]==-1) tempArr[i][1] = tempArr[i-1][1] + 1;
            else tempArr[i][1] = 1;
        }

        max = Math.max(max, tempArr[i][0], tempArr[i][1]);
    }

    return max;
};

// Q10
var maxProfit = function(prices) {
    const dp = new Map();
    return getProfit(0, -1);

    function getProfit(i, buySell){
        let profit = 0;
        let key = `${i}-${buySell}`;
        // -1=> buy, 0=> cooldown, 1=> sell 

        if(i==prices.length) return 0;
        if(dp.has(key)) return dp.get(key);
        if(buySell == 0){
           profit += getProfit(i+1, -1);
        } else if(buySell == -1){
            let buy = getProfit(i+1, 1) - prices[i];
            let noBuy = getProfit(i+1, -1);
            profit += Math.max(buy, noBuy);
        } else{
            let sell = getProfit(i+1, 0) + prices[i];
            let noSell = getProfit(i+1, 1);
            profit += Math.max(sell, noSell);
        }
        dp.set(key,profit);
        return profit;
    }
};

// Q12
var maximalSquare = function(matrix) {
    let maxWidth = 0;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j]==1){
                if(matrix[i-1]!=undefined && matrix[i-1][j-1]!=undefined) {
                    matrix[i][j] = 1+Math.min(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1]);
                }
                maxWidth = Math.max(maxWidth, matrix[i][j]);
            }
        }   
    }

    return maxWidth*maxWidth;
};


// 19
var longestArithSeqLength = function(nums) {
    let n = nums.length;
    let res = 2;
    const dp = new Array(n).fill(null).map(()=> new Map());

    if(n==2) return 2;

    for(let i=1; i<n; i++){
        for(let j=0; j<i; j++){
            const diff = nums[i]-nums[j];
            dp[i].set(diff, (dp[j].get(diff)+1) ||2);

            res = Math.max(res, dp[i].get(diff));
        }
    }

    return res;
    
};

// 21

var increasingTriplet = function (nums) {
    let first = Math.min();
    let second = Math.min();
    
    for(let num of nums){
        if(num<=first) first=num;
        else if(num<=second) second=num;
        else return true;
    }
    return false;
};

// 22

var findLongestChain = function(pairs) {
    pairs.sort((a,b) => a[1] - b[1]);
    let res = 1;
    let lastPair = pairs[0];

    for(let i=1; i<pairs.length; i++){
        let currentPair = pairs[i];

        if(lastPair[1]<currentPair[0]) {
            res++;
            lastPair = currentPair;
        }
    }

    return res;
};