// Q1 https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    let map = new Map([])

    for(let i=0; i<nums.length; i++){
        let remTar = target - nums[i];
        if(map.has(remTar)) return [map.get(remTar), i];
        else map.set(nums[i], i)
    }
};

// Q2 https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(n, target) {
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

//Q4 https://leetcode.com/problems/pascals-triangle/ 

var generate = function(numRows) {
    let res= [[1]];
    for(let i=1; i<numRows; i++){
        let ar=[1];
        for(let j=1; j<i; j++){
            ar.push(res[i-1][j-1] + res[i-1][j])
        }
        ar.push(1);
        res.push(ar);
    }

    return res;
};


//Q5 https://leetcode.com/problems/pascals-triangle-ii/

// var getRow = function (rowIndex) {
//     O(n^2)
//     let res = [];
//     let k = 0;

//     while(k<=rowIndex)  {
//         let factVal = nCr(rowIndex, k)
//         res.push(factVal);
//         k++;
//     };

//     return res;
// };

// const nCr = (n, r) => fact(n)/(fact(r)*fact(n-r));

// const fact = n => {
//         if(n==0 || n==1) return 1;

//         let res = 1;

//         for(let i=2; i<=n; i++) res*=i;

//         return res;
//     }

var getRow = function(r) {
    //O(n)
    let res = [1];
    for(let i=1; i<=r; i++){
        res.push((res[i-1]* (r-i+1)) / i);
    }
    return res;
};

//Q6 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let max = 0;
    let buy = Math.min();   //+Infinity

    for(let v of prices){
        if(buy > v) buy = v;
        else if((v - buy) > max) max = v - buy;
    }

    return max;
};

//Q7 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let buy = Math.min();
    let profit = 0;

    for(let v of prices){
        if(v < buy) buy = v;
        else if(buy < v) {
            profit += v - buy;
            buy = v;
        }
    }

    return profit;
};


// Q8 https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {

    //Approach 1 => dictionary => TC=O(n) SC=O(n)

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

    //Approach 2 => Moore's voting => TC=O(n) SC=O(1)

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


// Q9 https://leetcode.com/problems/majority-element-ii/

var majorityElement = function(nums) {
    //Approach 1 => dictionary => TC=O(n) SC=O(n)

    let n = Math.floor(nums.length/3);
    let obj = {}

    let max = [];

    for(let i=0; i<nums.length; i++){
        let k = nums[i];
        obj[k] = obj[k] ? obj[k] +1 : 1;
    }

    for(let k in obj){
        if(obj[k] > n) {
            max.push(k);
        }
    }

    return max;

    //Approach 2 => Moore => TC=O(n) SC=O(1)

    // let n = Math.floor(nums.length/3);
    // let contestant1=0, contestant2 = 1;
    // let count1=0, count2 = 0;
    
    // let res = [];

    // for(let v of nums){
    //     if(v ==contestant1) count1++;
    //     else if(v ==contestant2) count2++;
    //     else if(count1 ==0) {
    //         contestant1 = v;
    //         count1++
    //     }
    //     else if(count2 ==0) {
    //         contestant2 = v;
    //         count2++
    //     }
    //     else {
    //         count1--;
    //         count2--;
    //     }
    // }

    // let x = [0, 0];

    //     for(let c of nums){
    //         if(c===contestant1) x[0] += 1;
    //         else if(c===contestant2) x[1] += 1;
    //     }

    //     console.log({contestant1, contestant2, count1, count2, x})

    //     if(x[0] > n) res.push(contestant1)
    //     if(x[1] > n) res.push(contestant2)
        
    //     return res;
};

// Q10 https://practice.geeksforgeeks.org/problems/missing-ranges-of-numbers1019/1 => want to test more

var findMissing = function(arr, n) {
    let res = "";
    arr.sort((a,b) => a-b);

    if(arr[0]===1) res+= `0`;
    else if(arr[0]>1) res+= `0-${arr[0]-1}`;

    for(let i=1; i<n; i++){
        if((arr[i]-arr[i-1]) >= 3) res+= ` ${arr[i-1]+1}-${arr[i]-1}`;
        else if((arr[i]-arr[i-1]) === 2) res+= ` ${arr[i]-1}`;
    }

    if(res[0] == " ") res = res.substring(1);
    else if(res =="") res = "-1";

    return res;
};


// Q11 https://leetcode.com/problems/3sum/ 

var threeSum = function (nums) {

    let res = [];

    nums.sort((a,b) => a-b);

    for(let i=0; i<nums.length-2; i++){
        let j=i+1, k=nums.length-1;

        console.log(nums[i])

        while(j<k){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum===0){
                    res.push([nums[i],nums[j],nums[k]]);
                    while(nums[j]===nums[j+1]) j++;
                    while(nums[k]===nums[k-1]) k--;
                    j++, k--;
                } else if(sum > 0) k--;
                else j++;
        }

        while(nums[i] === nums[i+1]) i++;
    }

    return res;
};

//Q12 https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1

countTriplets(nums,n,X){
    //code here
    
  let res = 0;

    nums.sort((a,b) => a-b);

    for(let i=0; i<nums.length-2; i++){
        let j=i+1, k=nums.length-1;

        while(j<k){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum>=X){
                    k--;
                } else{
                    res += k-j;
                    j++;
                }
        }
    }

    return res;

}



// Q13 https://leetcode.com/problems/3sum-closest/ 

var threeSumClosest = function(nums, target) {
    let n = nums.length;
    nums.sort((a,b) => a-b);

    let sum = Math.max();

    for(let i=0; i<n-2; i++){
        let j=i+1, k=n-1;
        while(j<k){

            let currentSum = nums[i] + nums[j] + nums[k];
            if(Math.abs(currentSum-target) < Math.abs(sum-target))  sum = currentSum;
            if(currentSum === target) return currentSum;
            else if(currentSum > target){
                if(j<k-1) k--;
                else break;
            }
            else if(currentSum < target){
                if(j+1<k) j++;
                else break;
            }
        }
    }
    

    return sum;
};

// Q14 https://leetcode.com/problems/4sum/

var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    let res = [];

    for(let i=0; i<n-3; i++){
        let f=nums[i];
        for(let j=i+1; j<n-2; j++){
            let k=j+1, l=n-1;
            let s=nums[j];

            while(k<l){
                let sum = f + s + nums[k] + nums[l];
                if(sum === target){
                    res.push([f, s, nums[k], nums[l]]);
                    while(nums[k] === nums[k+1]) k++;
                    k++;
                    while(nums[l] === nums[l-1]) l--;
                    l--
                }
                else if(sum>target) l--
                else k++;
            }
            while(s === nums[j+1]) j++;
        }
        while(f === nums[i+1]) i++;
    }
    return res;
};


// Q15 https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    //TC = O(n^2)   SC = O(n^2) 
    // let n = matrix[0].length;
    // let newMat = [];

    // for(let row=0; row<n; row++){
    //     newMat.push([...matrix[row]])
    //     for(let col=0; col<n; col++){
    //         if((n-1-col) < newMat.length) matrix[row][col] = newMat[n-1-col][row];
    //         else matrix[row][col] = matrix[n-1-col][row]
    //     }   
    // }

     //TC = O(n^2)   SC = O(1) 
    let n = matrix[0].length;

    for(let row=0; row<n; row++){
        for(let col=row; col<n; col++){
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }   
    }

    for(let row=0; row<n; row++){
        for(let col=0; col<(n/2); col++){
            let temp = matrix[row][col];
            matrix[row][col] = matrix[row][n-1-col];
            matrix[row][n-1-col] = temp;
        }   
    }
};