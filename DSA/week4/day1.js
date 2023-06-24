//24 June 2023 - Array, dictionary and set

//Q https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

var twoSum = function(n, target) {
    // Approach1 => Dictionary => TC = O(n), SC=O(n)
    // Approach2 => 2 pointer => TC = O(n), SC=O(1)
    let left = 0;
    let right = n.length -1;

    while(left<right){
        let sum = n[left] + n[right];
        
        if(sum === target) break;
        else if(sum>target) right--;
        else left++
    }

    return [left+1, right+1]
};

//Q https://leetcode.com/problems/majority-element/description/

var majorityElement = function(nums) {

    // Approach1 => sorting (take its middle value as answer) => TC = O(nlogn)

    // Approach2 => Dictionary => TC = O(n), SC=O(n)

    // let n = Math.floor(nums.length/2);
    // let obj = {}

    // let max
    // for(let i=0; i<nums.length; i++){
    //     let k = nums[i];
    //     obj[k] = obj[k] ? obj[k] +1 : 1;
    //     if(obj[k] > n) {
    //         max = k;
    //         break
    //     }
    // }

    // return max;

    //Approach 3 => Moore's voting => TC = O(n), SC = O(1)

    let res = nums[0], max = 0;
    
    for(let n of nums){
        if(n===res) max++;
        else max--;

        if(max ===0) {
            res = n;
            max++
        }
    }

    return res;
};

//Q https://leetcode.com/problems/intersection-of-two-arrays/description/

var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let res = [];
    for (let val of set) {
        if(nums2.indexOf(val) !== -1) res.push(val)
    }

    return res;
};