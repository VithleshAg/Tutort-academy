var addBinary = function (a, b) {
    let maxLength = a.length;

    if(maxLength > b.length) {
        b = "0".repeat(maxLength - b.length) + b;
    } else {
        maxLength = b.length;
        a = "0".repeat(maxLength - a.length) + a;
    }

    let carry=0, ans="";

    for(let i=maxLength-1; i>=0; i--){
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        if(sum<=1){
            carry=0;
            ans = sum + ans;
        } else if(sum==2){
            carry=1;
            ans = 0 + ans;
        } else {
            carry=1;
            ans = 1 + ans;
        }
    }

    if(carry) ans = 1 + ans;

    return ans;
};


var shuffle = function(nums, n) {
    let arr = [];

    for(let i=0; i<n; i++){
        arr[2*i] = nums[i];
        arr[2*i+1] = nums[i+n];
    }

    return arr;
};

var kidsWithCandies = function(candies, extraCandies) {
    let max = candies.reduce((p,c) => {
        if(p<c) p=c;
        return p;
    }, 0)

    return candies.map(candy => {
        if(candy+ extraCandies >= max) return true;
        return false
    })
};

var subsetXORSum = function(nums) {
    let subsets = [0];
    let ans = 0;

    for(let v of nums){
        let last = subsets.length-1;
        for(let i=0; i<=last; i++){
            let xor = subsets[i] ^ v;
            ans += xor;
            subsets.push(xor)
        }
    }

    return ans;
};

var countNegatives = function(grid) {
    let ans =0;

    let l = grid[0].length-1;

    for(let i=grid.length-1; i>=0; i--){
        for(let j=l; j>=0; j--){
            if(grid[i][j]<0) ans++;
            else break; 
        }   
    }

    return ans;
};

var threeConsecutiveOdds = function(arr) {
    let areThreeConsecutiveOdds = false;
    let count =0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 ===1) count++
        else count = 0;
        if(count===3) {
            areThreeConsecutiveOdds = true;
            break;
        }
    }
    return areThreeConsecutiveOdds
};

var decode = function(encoded, first) {
    ans = [first];

    encoded.forEach((v, i) => {
        ans.push(v^ans[i])
    })

    return ans;
};

var sortArrayByParityII = function(nums) {
    // let evenInd = 0;
    // let oddInd = 1;
    // let arr = [];

    // for(let v of nums){
    //     if(v%2==0){
    //         arr[evenInd] = v;
    //         evenInd+=2;
    //     } else{
    //         arr[oddInd] = v;
    //         oddInd+=2;
    //     }
    // }

    // return arr;

    // Approach 2 => SC=O(1)
    var j=1;

    for(let i=0; i<nums.length; i+=2){
        if(nums[i]%2 === 0) continue;

        for(; j<nums.length; j+=2){
            if(nums[j]%2 === 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                break;
            }
        }
    }

    return nums;
};



var duplicateZeros = function(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0){
            for(let j=arr.length-1; j>i; j--) arr[j] = arr[j-1];
            i++;
        }   
    }
};


var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let i=0, j=1;

    while(j<nums.length){
        let diff = Math.abs(nums[j] -nums[i])
        if(diff<=valueDiff) return true

        i++;
        if(i==j){
            if(j>=indexDiff) i=j-indexDiff+1;
            else i=0
            j++;
        }
    }

    return false
};

var findMaxConsecutiveOnes = function(nums) {
    let max=0;
    let temp = 0;
    for(let v of nums){
        if(v===1) temp++;
        else{
            temp = 0
        }
        if(temp > max) max = temp;
    }

    return max;
};

var longestOnes = function(nums, k) {
    let max=0;
    let countK=0;
    let i=0;
    
    for(let j=0; j<nums.length; j++){
        if(nums[j]===0) countK++;
        if(countK>k){
            if(nums[i]===0) countK-=1;
            i++;
        } else if((j-i+1) > max) max = j-i+1;
    }

    return max;
};


// 13. https://leetcode.com/problems/online-election/

var TopVotedCandidate = function(persons, times) {
    const timesMap = new Map();
    const personsMap = new Map();
    let max = null;

    for(let i=0; i<times.length; i++){
        let person = persons[i];
        personsMap.set(person, personsMap.get(person)+1 || 1);

        if(max!==person && (max==null || personsMap.get(max)<=personsMap.get(person))) max = person;

        timesMap.set(times[i], max);
    }

    this.times = times;
    this.timesMap = timesMap;
};

TopVotedCandidate.prototype.q = function(t) {

    if(this.timesMap.has(t)) return this.timesMap.get(t);
    else{
        let low = 0, high = this.times.length-1, ans=null;
        
        while(low<=high) {
            let mid = low + Math.floor((high-low)/2);
            if(this.times[mid]>t) high=mid-1;
            else {
                ans=mid;
                low=mid+1;
            }
        }

        return this.timesMap.get(this.times[ans]);
    }
};