// https://leetcode.com/problems/merge-intervals/description/

var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    let res = [intervals[0]];

    for(let i=1; i<intervals.length; i++){
        let lastInd = res.length-1;
        if(res[lastInd][1] >= intervals[i][0]){
            res[lastInd][1] = Math.max(res[lastInd][1], intervals[i][1])
        } else res.push(intervals[i])
    }

    return res;
};


// https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1

class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr)
    {
        
        for(let i=0; i<n-1; i=i+2){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        
        return arr
    }
}

// https://leetcode.com/problems/spiral-matrix-ii/description/

var generateMatrix = function (n) {
    let arr = Array.from(Array(n), () => new Array(n));
    let num = 1;
    let left=0, right=n-1, top=0, bottom=n-1;

    while(top<=bottom && left<=right){
        for (let i = left; i <= right; i++) {
            arr[top][i] = num++;
        }
        top++;

        for (let i=top; i <= bottom; i++) {
            arr[i][right] = num++;
        }
        right--;

        for (let i = right; i>=left; i--) {
            arr[bottom][i] = num++;
        }
        bottom--;

        for (let i=bottom; i >= top; i--) {
            arr[i][left] = num++;
        }
        left++;
    }

    return arr;
};

// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    let arr = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left=0, right=cols-1, top=0, bottom=rows-1;

    while(top<=bottom && left<=right){
        for (let i = left; i <= right; i++) {
            arr.push(matrix[top][i]);
        }
        top++;

        if(top>bottom) break;

        for (let i=top; i <= bottom; i++) {
            arr.push(matrix[i][right]);
        }
        right--;

        if(right<left) break;

        for (let i = right; i>=left; i--) {
            arr.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i=bottom; i >= top; i--) {
            arr.push(matrix[i][left]);
        }
        left++;
    }

    return arr;
};