// https://practice.geeksforgeeks.org/problems/number-of-occurrence2259/1

class Solution {
    
    count(arr,n,x){
        //code here
        let f = getFirst(0, n-1, arr, x);
        if(f==-1) return 0;
        let l = getLast(0, n-1, arr, x)
        
        function getFirst(start, end, arr, x){
            if(start>end) return -1;
            let mid = parseInt((start+end)/2);
            if(arr[mid]==x && (mid==0 || arr[mid-1]<x)) return mid;
            if(x > arr[mid]) return getFirst(mid+1, end, arr, x);
            return getFirst(start, mid-1, arr, x);
        }
        
        function getLast(start, end, arr, x){
            if(start>end) return -1;
            let mid = parseInt((start+end)/2);
            if(arr[mid]==x && (mid==n-1 || arr[mid+1]>x)) return mid;
            if(x < arr[mid]) return getLast(start, mid-1, arr, x);
            return getLast(mid+1, end, arr, x);
        }
        
        return l-f+1;
    }
}

// https://leetcode.com/problems/search-in-rotated-sorted-array

var search = function(nums, target) {
    let start=0, end=nums.length-1;

    while(start<=end){
        let mid = parseInt((start+end)/2);
        if(nums[mid]==target) return mid;
        if(nums[mid]<nums[end]){
            if(target>nums[mid] && target<=nums[end]) start = mid+1;
            else end=mid-1;
        } else{
            if(target<nums[mid] && target>=nums[start]) end = mid-1;
            else start = mid+1;
        }
    }

    return -1;
};