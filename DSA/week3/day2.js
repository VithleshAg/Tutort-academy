//18 June 2023 - Array, dictionary and set

// https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
    let map = new Map([])

    for(let i=0; i<nums.length; i++){
        let remTar = target - nums[i];
        if(map.has(remTar)) return [map.get(remTar), i];
        else map.set(nums[i], i)
    }
};
