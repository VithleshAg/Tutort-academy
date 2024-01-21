// Q1 https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let j=0, n=nums.length;
    while(nums[j]!==0 && j<n) j++;

    for(let i=j+1; i<n; i++){
        if(nums[i]!==0){
            nums[j] = nums[i];
            nums[i] = 0;
            j++
        }
    }

    return nums;
};

// Q2 https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    // let set = new Set();

    // for(let v of nums) {
    //     if(set.has(v)) return true;
    //     else set.add(v);
    // }

    // return false;

    let set = new Set(nums);
    return set.size !== nums.length
};

// Q3 https://leetcode.com/problems/contains-duplicate-ii/
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};

    let i=0;
    for(let v of nums){
        if(obj[v]!=undefined && (i-obj[v] <= k)) return true;
        else obj[v] = i;
        i++;
    }

    return false;
};

// Q4 https://leetcode.com/problems/summary-ranges/

var summaryRanges = function(nums) {
    if(nums.length <1) return nums;
    
    let res = [], left = null;

    for(let i=0; i<nums.length; i++){
        if(left == null) left = nums[i];

        if(nums[i+1]-nums[i] === 1) continue;
        else {
            if(left == nums[i]) res.push(`${left}`);
            else res.push(`${left}->${nums[i]}`); 
            left = null;
        }      
    }

    return res;
};


// Q5 https://leetcode.com/problems/range-sum-query-immutable/

var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    for(let i=left; i<=right; i++) sum += this.nums[i];
    return sum;
};

// Q6 https://leetcode.com/problems/range-sum-query-2d-immutable

var NumMatrix = function(matrix) {
    this.matrix = matrix;
    let m = this.matrix.length;
    let n = this.matrix[0].length;
    
    for(let row=0; row<m; row++){
        let currentRow = this.matrix[row];
        for(let col=1; col<n; col++){
            currentRow[col] += currentRow[col-1];
        }
    }

    for(let col=0; col<n; col++){
        for(let row=1; row<m; row++){
            this.matrix[row][col] += this.matrix[row-1][col];
        }
    }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.matrix[row2][col2] - (this.matrix[row1-1]?.[col2] || 0) + (this.matrix[row1-1]?.[col1-1] || 0) - (this.matrix[row2][col1-1] ||  0);
};


// Q7 https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    let j=0;
    nums.forEach((v,i) => {
        if(v!==val) {
            nums[j] = v;
            j++;
        }
    });

    return j;
};

// Q8 https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let res = [];
    for (let val of set) {
        if(nums2.indexOf(val) !== -1) res.push(val)
    }

    return res;
};

// Q9 https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    //Approach1 TC=> O(n)
    var intersect = function(nums1, nums2) {
        let res = [];
        let obj = {};
    
        for(let v of nums2) obj[v] = obj[v]+1 || 1;
    
        for(let val of nums1) {
            if(obj[val]) {
                    res.push(val);
                    obj[val] -= 1;
            }
        }
    
        return res;
    };

    //Approach2  TC=> O(nlogn)
    let res = [];

    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    
    let j=0;

    for(let val of nums1) {
        for(; j<nums2.length; j++){
            if(val==nums2[j]) {
                res.push(val);
                j++;
                break;
            }
            else if(nums2[j]>val){
                break;
            }
        }
    }

    return res;
};


// Q10 https://leetcode.com/problems/next-greater-element-i/

var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    const map = new Map();
    let stack= [];

    for(let v of nums2){
        while(stack.length>0 && stack[stack.length-1] < v) map.set(stack.pop(), v)
        stack.push(v);
    }
    
    for(let c of nums1) res.push(map.has(c) ? map.get(c) : -1);

    return res;
};

// Q11 https://leetcode.com/problems/next-greater-element-ii/  => O(n) soln can be done by stack

var nextGreaterElements = function(nums) {
    let res = [];
    
    nums.forEach((c,ind) => {
        let temp = null;

        for(let i=ind+1; i<nums.length; i++){
            if(nums[i] > c){
                temp = nums[i];
                break;
            }
        }

        if(temp === null){
            for(let i=0; i<ind; i++){
                if(nums[i] > c){
                    temp = nums[i];
                    break;
                }
            }
        }

        if(temp === null) temp =-1;

        res.push(temp);
    })

    return res;
};


// Q12 https://leetcode.com/problems/next-greater-element-iii/

var nextGreaterElement = function (n) {
    if(n.length<=1) return -1;

    nArr = n.toString().split("");
    let l = nArr.length;

    let ind=null;

    for(let i=l-1; i>0; i--){
        if(nArr[i] > nArr[i-1]){
            ind = i-1;
            break;
        }
    }

    if(ind==null) return -1

    for(let i=l-1; i>ind; i--){
        if(nArr[i] > nArr[ind]){
            let temp = nArr[ind];
            nArr[ind] = nArr[i];
            nArr[i] = temp;
            break;
        }
    }

    let n2 = parseInt(nArr.slice(0, ind+1).join("") + nArr.slice(ind+1).sort((a,b) => a-b).join(""))        
    let max = Math.pow(2, 31)-1;
    if (n2 <= max) return n2;
    else return -1

};


// Q13 https://leetcode.com/problems/rank-teams-by-votes/

const customSort = (a,b, votesObj, i) => {    
    if(votesObj[b][i]>votesObj[a][i]) return 1;
    if(votesObj[b][i]<votesObj[a][i]) return -1;
    else {
        if(i+1==votesObj[a].length) return a>b ? 1 : -1;
        return customSort(a,b,votesObj, i+1);
    }
    
}

var rankTeams = function (votes) {
    if (votes.length === 1) return votes[0];

    let votesObj = {};

    votes[0].split("").map(v => {votesObj[v] = new Array(votes[0].length).fill(0)})

    for (let i = 0; i < votes.length; i++) {
        let k=0;
        for (let v of votes[i]) {
            votesObj[v][k]++;
            k++;
        }
    }

    return votes[0].split("").sort((a,b) => customSort(a,b,votesObj,0)).join("");
};



//Q14 https://leetcode.com/problems/reduce-array-size-to-the-half/

var minSetSize = function (arr) {
    let obj = arr.reduce((p, c) => {
        p[c] = p[c] ? p[c] + 1 : 1;
        return p;
    }, {});

    let sortedVal = Object.values(obj).sort((a,b) => b-a);

    let sum =0, min = 0;
    for(let val of sortedVal){
        if(sum < (arr.length/2)) {
            sum += val;
            min++;
        }
        else break;
    }
    return min;
};