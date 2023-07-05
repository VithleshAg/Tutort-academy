//Q https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function(prices) {
    let max = 0;
    let buy = Math.min();   //+Infinity

    for(let v of prices){
        if(buy > v) buy = v;
        else if((v - buy) > max) max = v - buy;
    }

    return max;
};

//Q https://leetcode.com/problems/rotate-array/description/

const reverseArr = (arr, start, end) => {
    end--;
    while(start<end){
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
 
      start++; end--;
    }
   return arr;
  };
 
 var rotate = function (nums, k) {
    //Approach 1 => TC = O(n), SC=O(n)

    // let l = nums.length;
     // let copyNums = [...nums];
 
     // for(let i=0; i<l; i++){
     //   let m = (i + k)%l;
     //   nums[m] = copyNums[i];
     // }
    

     //Approach 2 => TC = O(n), SC=O(1)

     let l = nums.length;
     k = k%l;
 
     if(l>1 && k>0){
       reverseArr(nums, 0, l-k);
       reverseArr(nums, l-k, l);
       reverseArr(nums, 0, l);
     }
 
 };