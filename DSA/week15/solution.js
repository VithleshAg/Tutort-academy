// Q1
var search = function(nums, target) {
    let start=0, end=nums.length-1;

    while(start<=end){
        //let mid = parseInt(start + (end-start)/2);
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

// Q2
var search = function(nums, target) {
    let start=0, end=nums.length-1;

    while(start<=end){
        //let mid = parseInt(start + (end-start)/2);
        let mid = parseInt((start+end)/2);
        if(nums[mid]==target) return true;
        if(nums[mid]==nums[end]){
            end--;
            continue;
        }
        if(nums[mid]<nums[end]){
            if(target>nums[mid] && target<=nums[end]) start = mid+1;
            else end=mid-1;
        } else{
            if(target<nums[mid] && target>=nums[start]) end = mid-1;
            else start = mid+1;
        }
    }

    return false;
};

//Q3
var findMin = function(nums) {
    let left = 0, right= nums.length-1;

    while(left<right){
        let mid = parseInt((left+right)/2);
        if(nums[mid]>nums[right]) left = mid+1;
        else right = mid;
    }

    return nums[left];
};

// Q4
var findMin = function(nums) {
    let left = 0, right= nums.length-1;

    while(left<right){
        let mid = parseInt((left+right)/2);
        if(nums[mid]==nums[right]){
            right--;
            continue;
        }
        if(nums[mid]>nums[right]) left = mid+1;
        else right = mid;
    }

    return nums[left];
};

// Q5

var Solution = function (w) {
    this.sum = w.reduce((p, c, i) => {
        let tempSum = i - 1 >= 0 ? p[i-1] + c : c;
        p.push(tempSum);
        return p;
    }, []);

};

Solution.prototype.pickIndex = function () {
    let n = this.sum.length;
    let num = parseInt(Math.random() * this.sum[n - 1]);
    let left = 0, right = n - 1;

    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (this.sum[mid] <= num) left = mid + 1;
        else right = mid;
    }

    return left;
};


// Q6

var searchMatrix = function(matrix, target) {
    let m=matrix.length, n = matrix[0].length;

    let left = 0, right = m-1;

    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (matrix[mid][n-1] < target) left = mid + 1;
        else right = mid;
    }

    let row = left;
    left = 0, right = n-1;

    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (matrix[row][mid] < target) left = mid + 1;
        else right = mid;
    }

    if(matrix[row][left] === target) return true;

    return false;
};

// Q7
var searchMatrix = function(matrix, target) {
    return isTargetPresent(0, matrix.length-1, 0, matrix[0].length-1)

    function isTargetPresent(startRow, endRow, startCol, endCol){
        if(startRow > endRow || startCol > endCol) return false;
        let midRow = parseInt((startRow+endRow)/2);
        let midCol = parseInt((startCol+endCol)/2);
        
        if(matrix[midRow][midCol]===target) return true;

        if(matrix[midRow][midCol]>target) return (isTargetPresent(startRow, midRow-1, startCol, endCol) || isTargetPresent(midRow, endRow, startCol, midCol-1));
        else return (isTargetPresent(startRow, midRow, midCol+1, endCol) || isTargetPresent(midRow+1, endRow, startCol, endCol));
        
    }
};

// Q8
var findPeakElement = function(nums) {
    // O(n)
    // for(var i =0; i<nums.length-1; i++){
    //     if(nums[i]>nums[i+1]) return i;
    // }

    // return i;

    // O(log n);
    let left =0, right= nums.length-1;

    while(left<right){
        let mid = parseInt((left+right)/2);

        if(nums[mid]>nums[mid+1]) right=mid;
        else left = mid+1;
    }

    return left;
};

// Q9

var peakIndexInMountainArray = function(nums) {
    let left=0, right=nums.length-1;

    while(left<=right){
        //let mid = parseInt(start + (end-start)/2);
        let mid = parseInt((left+right)/2);
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid;
        if(nums[mid]>nums[mid+1]) right = mid;
        else left = mid+1;
    }

    return -1;
};

// Q 10
var findInMountainArray = function(target, mountainArr) {
    let n = mountainArr.length();
    let maxValInd = getMaxValInd(0, n-1);
    console.log(maxValInd, mountainArr.get(maxValInd));

    let targetIndLeft = getTargetIndLeft(0, maxValInd);

    if(targetIndLeft !== -1) return targetIndLeft;

    return getTargetIndRight(maxValInd+1, n-1);


    function getTargetIndRight(left, right){
        let ind = -1;
        
        if(mountainArr.get(right)==target)  ind = right;
        else {
            while(left<right){
                let mid = parseInt((left+right)/2);
                if(mountainArr.get(mid)==target){
                    ind = mid;
                    break;
                }
                if(mountainArr.get(mid)>target) left = mid+1;
                else right = mid;
            }
        }

        return ind;
    }

    function getTargetIndLeft(left, right){
        let ind = -1;

        if(mountainArr.get(right)==target)  ind = right;
        else {
            while(left<right){
                let mid = parseInt((left+right)/2);
                if(mountainArr.get(mid)==target){
                    ind = mid;
                    break;
                }
                if(mountainArr.get(mid)<target) left = mid+1;
                else right = mid;
            }
        }

        return ind;
    }

    function getMaxValInd(left, right){
        while(left<right){
            let mid = parseInt((left+right)/2);
            if(mountainArr.get(mid)<mountainArr.get(mid+1)) left = mid+1;
            else right = mid;
        }
        return left;
    }
};