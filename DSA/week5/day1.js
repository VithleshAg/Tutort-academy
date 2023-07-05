// https://leetcode.com/problems/trapping-rain-water/submissions/983703993/

var trap = function(height) {
    // TC = O(n), SC=O(n)
    let n = height.length;
    let left = [];
    let right = [];
    let totalWater = 0;

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i=1; i<n; i++) left[i] = Math.max(left[i-1],height[i]);
    for(let i=n-2; i>=0; i--) right[i] = Math.max(right[i+1],height[i]);
    for(let i=0; i<=n-1; i++) totalWater += Math.min(left[i], right[i]) - height[i];

    return totalWater;



    // TC = O(n), SC=O(1)

    // let leftHeight=0, rightHeight=0;
    // let left=0, right=height.length-1;

    // let totalWater = 0;

    // while(left<right){
    //     // console.log({left, right, leftHeight, rightHeight, totalWater})
    //     if(leftHeight<height[left]) leftHeight = height[left];
    //     if(rightHeight<height[right]) rightHeight = height[right];

    //     if(leftHeight<=rightHeight){
    //         totalWater+= (leftHeight-height[left]);
    //         left++
    //     }
    //     if(leftHeight>rightHeight){
    //         totalWater+= (rightHeight-height[right]);
    //         right--
    //     }
    // }

    // return totalWater;

};