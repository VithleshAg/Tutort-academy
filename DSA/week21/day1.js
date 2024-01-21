// https://leetcode.com/problems/coin-change/submissions/
var coinChange = function (coins, amount) {
    const dp = new Map();
    const num = getCoins(amount);
    return num == Math.min() ? -1 : num;

    function getCoins(amount){
        if(amount==0) return 0;
        if(amount<0) return Math.min();
        if(dp.has(amount)) return dp.get(amount);

        let min = Math.min();

        for(let i=0; i<coins.length; i++){
            min = Math.min(min, 1+getCoins(amount-coins[i]))
        }
        dp.set(amount, min);

        // dp.set(Math.min(...coins.map(coin => 1+getCoins(coins, amount-coin, dp))));
        return min;
    }
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
var maxProfit = function(prices) {
    // 1 Approach
    // let buy = Math.min();
    // let profit = 0;

    // for(let v of prices){
    //     if(v < buy) buy = v;
    //     else if(buy < v) {
    //         profit += v - buy;
    //         buy = v;
    //     }
    // }

    // return profit;

    // dp approach

    const dp = new Map();
    return getProfit(0, 0);

    function getProfit(i, buySell){
        let profit = 0;
        let key = `${i}-${buySell}`;

        if(i==prices.length) return 0;
        if(dp.has(key)) return dp.get(key);
        if(buySell == 0){
            let buy = getProfit(i+1, 1) - prices[i];
            let noBuy = getProfit(i+1, 0);
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