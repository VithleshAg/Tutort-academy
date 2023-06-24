//Q1 https://leetcode.com/problems/happy-number/
var isHappy = function (num) {

    // getting issue as 1 is converting to 2
    let k = 0;
    let n = num;
    console.log("1st: ",{num, n, k})
    if(n==0) return false;
    else if(n==1) return true;

    while (n > 0) {
        console.log("2nd: ",{num, n, k})
            k += (n % 10)**2;
            n = Math.floor(n/10);
    }
    console.log("3rd: ",{num, n, k})
    return isHappy(k);
};



//Q2 https://leetcode.com/problems/power-of-two/
var isPowerOfTwo = function(n) {
    let res = true;

    if(n<=0) return false;

    while(n>1){
        if(n%2 !== 0) {
            res = false;
            break;
        } else n = n/2;
    }

    return res;
};

//Q3

var isAnagram = function(s, t) {
    //Approach 1
    sObj = {};
    tObj = {};

    if(s.length !== t.length) return false;

    for(let v of s){
        sObj[v] = sObj[v] ? sObj[v] +1 : 1;
    }

    for(let v of t){
        tObj[v] = tObj[v] ? tObj[v] +1 : 1;
    }

    for(let v in sObj){
        if(tObj[v] !== sObj[v]) return false;
    }

    return true;

    // Approach 2
    // sObj = {};

    // if (s.length !== t.length) return false;

    // for (let v of s) {
    //     sObj[v] = sObj[v] ? sObj[v] + 1 : 1;
    // }

    // for (let v of t) {
    //     if (sObj[v]) {
    //         sObj[v] -= 1;
    //         if (sObj[v] === 0) delete sObj[v];
    //     } else return false;
    // }

    // return Object.keys(sObj).length == 0
};

//Q4 https://leetcode.com/problems/ugly-number/

var isUgly = function(n) {
    const primeFact = [2,3,5]
  
      if(n<=0) return false;
  
      for(let val of primeFact){
        if(n===1) break;
          while(n%val ===0){
              n = n/val
          }
      }
  
      if(n===1) return true
  
    return false;
  };


//Q5 https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    //Approach1

    for(let i=1, j=0; i<nums.length; i++){
        if(nums[j]===0 && nums[i]!==0){
            nums[j] = nums[i];
            nums[i] = 0;
            j++
        } else if(nums[j]!==0) j++
    }
    return nums;

    //Approach2

    // let j=0;

    //     for(let i=0; i<nums.length;i++){
    //         if(nums[i]!==0 && i===j) j++;
    //         else if(nums[i]!==0){
    //             nums[j] = nums[i];
    //             nums[i] = 0;
    //             j++;
    //         }
    //     }

    //     return nums;
};

//Q6

var reverseVowels = function(s) {

    // Approach 1
    let vow = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split("");

    let i=0, j=s.length-1;

    while(i<j){
        if(vow.indexOf(s[i]) !== -1 && vow.indexOf(s[j]) !== -1) {
            let temp = s[i]; 
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        } else if(vow.indexOf(s[i]) === -1){
            i++
        } else if(vow.indexOf(s[j]) === -1){
            j--
        }
    }

    s = s.join("")

    return s;

    // Approach 2 => takes more time and space
    // let vow = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
    // let vowInStr = [];
    // for(let i=0; i<s.length; i++){
    //     if(vow.indexOf(s[i]) !== -1) vowInStr.push([i, s[i]])
    // }

    // for(let i=0, j=vowInStr.length-1; i<j; i++, j--){
    //     let ar = vowInStr[i];
    //     let lastAr = vowInStr[j];

    //     if(ar) s = s.slice(0, ar[0]) + lastAr[1] + s.slice(ar[0]+1, lastAr[0]) + ar[1] + s.slice(lastAr[0] +1);
    // }

    // return s;
};

//Q7 https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
    //Approach 1

    let n1 = Number.MIN_SAFE_INTEGER
    let n2 = Number.MIN_SAFE_INTEGER
    let n3 = Number.MIN_SAFE_INTEGER

    for(let i=0; i<nums.length; i++){
        let n = nums[i];

        if (n >= n1) {
            if(n1===n) continue;
            n3 = n2;
            n2 = n1;
            n1 = n;
        } else if (n >= n2) {
            if(n2===n) continue;
            n3 = n2;
            n2 = n;
        } else if (n >= n3) {
            n3 = n;
        }
    }

    if(n3!== Number.MIN_SAFE_INTEGER) return n3;
    return n1


    //Approach 2
    // let n1 = null;
    // let n2 = null;
    // let n3 = null;

    // nums.forEach(n => {
    //     if (n > n1 || n1==null) {
    //         n3 = n2;
    //         n2 = n1;
    //         n1 = n;
    //     } else if (n < n1 && (n2 < n || n2==null)) {
    //         n3 = n2;
    //         n2 = n;
    //     } else if (n < n2 && (n3 < n || n3==null)) {
    //         n3 = n;
    //     }
    // })

    // if(n3!= null) return n3;
    // return n1
};

//Q8

var findTheDifference = function (s, t) {
    //Approach 1
    const sObj = {};
    const tObj = {};


    for (let c of s) {
        sObj[c] = sObj[c] ? sObj[c] + 1 : 1;
    }

    for (let c of t) {
        tObj[c] = tObj[c] ? tObj[c] + 1 : 1;
    }

    let char = null;

    for(let c in tObj){
        if(sObj[c] !== tObj[c]) char = c;
    }

    return char;

    //Approach 2
    // const sObj = new Map([]);
    // const tObj = new Map([]);


    // for (let c of s) {
    //     sObj.set(c, sObj.has(c) ? sObj.get(c) + 1 : 1);
    // }

    // for (let c of t) {
    //     tObj.set(c, tObj.has(c) ? tObj.get(c) + 1 : 1);
    // }

    // let char = null;

    // for(let c of tObj.keys()){
    //     if(sObj.get(c) !== tObj.get(c)){
    //         char = c;
    //         break;
    //     }
    // }

    // return char
};

//Q9 https://leetcode.com/problems/add-digits/
var addDigits = function(n) {
    let res = n;
    if(n>=10){
        n = String(n);
        while(n.length > 1){
            let sqNo = 0;
            for(let val of n){
                sqNo += Number(val);
            }
            n = String(sqNo);
        }
        res = n;
    }
    return res;
};

//Q10 https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

var getLucky = function(s, k) {
    let n = "";
        for(let v of s){
            n += v.charCodeAt(0) -96;
        }

    while(k>0){
        let newN = 0;
        for(let v of n){
            newN += Number(v);
        }
        n = newN + "";
        k--;
    }

    return Number(n)
};
