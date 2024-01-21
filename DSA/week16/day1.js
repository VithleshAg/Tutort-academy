// find Previous Smaller in an array
function findPrevSMaller(arr){
    let s = [-1];
    
    return arr.reduce((p,c, i) => {
        while(s[s.length-1] >= c) s.pop();
        p.push(s[s.length-1]);
        s.push(c);
        return p;
    }, [])
}

// https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1

class Solution
{
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n)
    {
        // code here
        const s = [];
        let res = [];
        
        for(let i=arr.length-1; i>=0; i--){
            while(s.length>0 && s[s.length-1]<=arr[i]) s.pop();
            
            if(s.length > 0) res[i] = s[s.length-1];
            else res[i] = -1;
            s.push(arr[i])
        }
        
        return res;
    }
}

// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
var largestRectangleArea = function(heights) {
    let s = [], n = heights.length;
    let prevSmInd = [];
    let nextSmInd = [];
    let maxArea = 0;
        
    for(let i=0; i<n; i++){
        while(s.length>0 && heights[s[s.length-1]]>=heights[i]) s.pop();
        
        if(s.length > 0) prevSmInd[i] = s[s.length-1];
        else prevSmInd[i] = -1;
        s.push(i)
    }

    s = [];

    for(let i=n-1; i>=0; i--){
        while(s.length>0 && heights[s[s.length-1]]>=heights[i]) s.pop();
        
        if(s.length > 0) nextSmInd[i] = s[s.length-1];
        else nextSmInd[i] = n;
        s.push(i)
    }

    for(let i=0; i<heights.length; i++){
        let width = nextSmInd[i] - prevSmInd[i] -1;
        maxArea = Math.max(heights[i] * width, maxArea)
    }

    return maxArea;
};