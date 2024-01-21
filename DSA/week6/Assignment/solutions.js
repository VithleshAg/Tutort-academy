// Q1 https://leetcode.com/problems/find-common-characters/

var commonChars = function (words) {
  // let obj = {};
  // let arr = [];

  // for(let c of words[0]){
  //     obj[c] = obj[c]+1 || 1;
  // }

  // for(let i=1; i<words.length; i++){
  //     let tempObj = {};
  //     for(let c of words[i]){
  //         if(obj[c])
  //         tempObj[c] = Math.min(obj[c], tempObj[c]+1 || 1);
  //     }
  //     obj = tempObj;
  // }

  // for(let key in obj){
  //     for(let i=0; i<obj[key]; i++) arr.push(key);
  // }

  // return arr;

  let res = [...words[0]];
  for (let i = 1; i < words.length; i++) {
    res = res.filter((c) => {
      const l = words[i].length;
      words[i] = words[i].replace(c, "");
      return l > words[i].length;
    });
  }
  return res;
};

// Q2 https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
    // TC => O(n) SC=> O(1)
    // let n1 = Number.MIN_SAFE_INTEGER
    // let n2 = Number.MIN_SAFE_INTEGER
    // let n3 = Number.MIN_SAFE_INTEGER

    // for(let i=0; i<nums.length; i++){
    //     let n = nums[i];

    //     if (n >= n1) {
    //         if(n1===n) continue;
    //         n3 = n2;
    //         n2 = n1;
    //         n1 = n;
    //     } else if (n >= n2) {
    //         if(n2===n) continue;
    //         n3 = n2;
    //         n2 = n;
    //     } else if (n > n3) {
    //         n3 = n;
    //     }
    // }

    // if(n3!== Number.MIN_SAFE_INTEGER) return n3;
    // return n1

    // TC => O(nlogn) SC=> O(n)
    const arr = [...new Set(nums)];

    arr.sort((a, b) => a - b);

    if (arr.length >= 3) {
        return arr[arr.length - 3];
    } else {
        return arr[arr.length - 1];
    }
};

// Q3 https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let arr = [];

    for(let i=1; i<=nums.length;i++){
        if(!set.has(i)) arr.push(i);
    }

    return arr;
};

// Q4 https://leetcode.com/problems/minimum-moves-to-equal-array-elements

var minMoves = function(nums) {
  let ans = 0;
  const min = Math.min(...nums);

  for(v of nums) ans += v - min;

  return ans;
};

// Q5 https://leetcode.com/problems/assign-cookies/
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let ans = 0;
  let j = 0;
  for (let i = 0; i < g.length; i++) {
    if (j >= s.length) break;

    if (g[i] <= s[j]) {
      ans++;
      j++;
    }
  }

  return ans;
};

// Q6 https://leetcode.com/problems/degree-of-an-array/

var findShortestSubArray = function(nums) {
  let obj = {};
  let degree = 0;
  let count = null;

  nums.forEach((v, i) => {
      obj[v] = obj[v] ? {...obj[v], freq: obj[v].freq+1, end: i}: {freq: 1, start: i, end: i};
      if(obj[v].freq>degree) degree = obj[v].freq;
  });

  for(let k in obj){
      if(obj[k].freq == degree && (count > (obj[k].end-obj[k].start+1) || count ==null)) count = obj[k].end-obj[k].start+1;
  }

  return count;
};

// Q7 https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(arr, n) {
  let plots=0;
  for(let i=0; i<arr.length; i++){
      if(arr[i]==0 && (arr[i-1]==0 || arr[i-1]==undefined) && (arr[i+1]==0 || arr[i+1]==undefined)){
          arr[i] = 1;
          plots++;
      }
      if(plots>=n) return true;
  }

  return false
};

// Q8 https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
  let l = digits.length;
  if(digits[l-1]==9){
      let flag = true;
      for(let i=l-1; i>=0; i--){
          if(digits[i] ==9) digits[i] =0;
          else {
              digits[i] +=1;
              flag = false;
              break;
          }
      }

      if(flag) digits = [1, ...digits];
  } else digits[l-1] += 1;

  return digits;
};

// Q9 https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
  let ans = 0;
  for(let i=0; i<nums.length; i++){
      ans = ans^nums[i]; 
  }

  return ans;
};

// Q11 https://leetcode.com/problems/single-number-iii/

var singleNumber = function (nums) {
  let exor = 0;
  const ans = [0, 0];

  for (let i = 0; i < nums.length; i++) {
      exor = exor ^ nums[i];
  }
  // most right set bit
  let mrsb = 1;
  while(!(mrsb&exor)) mrsb = mrsb<<1;

  for (let i = 0; i < nums.length; i++) {
      if (mrsb & nums[i]) ans[0] = ans[0] ^ nums[i];
      else ans[1] = ans[1] ^ nums[i];
  }

  return ans;
};

// Q12 https://leetcode.com/problems/multiply-strings/
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return "0"

  let l1 = num1.length;
  let l2 = num2.length;
  let ans = new Array(l1+l2).fill(0);

  for (let i = l1 - 1; i >= 0; i--) {       
      for (let j = l2 - 1; j >= 0; j--) {
          let calc = ans[i+j+1] +  num2[j]*num1[i];
          ans[i+j+1] = calc % 10;
          ans[i+j] += Math.floor(calc / 10);
      }
  }

  return ans.join("").replace(/^0+/,"")
};


// Q13 https://leetcode.com/problems/valid-tic-tac-toe-state/

var validTicTacToe = function(board) {
  let numOfX = 0;
  let numOfO = 0;

  let pos1 = "XXX";
  let pos2 = "OOO";

  let xWins = 0;
  let oWins = 0;
  
  let diagonal1 = "";
  let diagonal2 = "";
  

  for(let i=0; i<board.length; i++){
      let vertical = "";

      for(let j=0; j<board.length; j++){
          vertical += board[j][i];

          if(board[i][j] === "X") numOfX += 1;
          else if(board[i][j] === "O") numOfO += 1;
      }

      if(board[i] ===pos1) xWins += 1;
      else if(board[i] ===pos2) oWins += 1;

      if(vertical ===pos1) xWins += 1;
      else if(vertical ===pos2) oWins += 1;
      
      diagonal1 += board[i][i];
      diagonal2 += board[i][board.length-1-i];
  }

  if((numOfX - numOfO)<0 || (numOfX - numOfO)>1) return false;

  if(diagonal1 ===pos1 || diagonal2 ===pos1) xWins += 1;
  else if(diagonal1 ===pos2 || diagonal2 ===pos2) oWins += 1;

  if(( xWins && (numOfX - numOfO)!==1) || (oWins && (numOfX - numOfO)!==0)) return false;

  if(xWins>=1 && oWins>=1) return false;

  return true
};