//Q1

const reverseNum = (n) => {
  let reverseNum = 0;
  while (n !== 0) {
    reverseNum = reverseNum * 10 + (n % 10);
    n = n > 0 ? Math.floor(n / 10) : Math.ceil(n / 10);
  }
  console.log({ reverseNum });
};

function reverse(n){
  let res = 0;
  let isNeg = false;

  if(n<0){
    n=-n;
    isNeg = true;
  }

  while(n!=0){
    res = (res*10) + (n%10);
    n=Math.floor(n/10);
  }

  return isNeg ? -res : res;
}

reverseNum(153);
// reverseNum(120);
// reverseNum(-129);

// Q2
class Solution {
  nthRowOfPascalTriangle(n){
      //code here
      let res = [1];

      for(let i=1; i<n; i++){
          let temp = new Array(i+1).fill(1);
          for(let j=1; j<i; j++){
              temp[j] = (res[j] + res[j-1]) % (7+Math.pow(10,9));
          }
          res = temp;
      }
      return res;
  }
}

// Q3

var maximumWealth = function(accounts) {
  let richestWealth = 0;
  for(let i=0; i<accounts.length; i++){
      const  wealth = accounts[i].reduce((p,c) => p+c, 0)
      if(wealth > richestWealth) richestWealth = wealth;
  }
  return richestWealth;
};

maximumWealth([[1,2,3],[3,2,1]])

//Q4

const runningSum = function (nums) {
  const finArr = [];

  for(let i=0; i<nums.length; i++){
      if (i === 0) finArr.push(nums[i])
      else finArr.push(finArr[i-1] + nums[i])
  }

  console.log({finArr})
  // return finArr;
};

runningSum([3,1,2,10,1])

//Q5

const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for(let stone of stones){
      if(jewels.indexOf(stone) !==-1) count++
  }
  console.log({count})
  return count;
};

numJewelsInStones("aA", "aAAbbbb")

//Q6

const minimumAbsDifference = function(arr) {
  arr.sort((a,b) => a-b);

  // arr = arr.reduce((p,c,i) => {
  //     if(i===0) p[i] = c;
  //     else if(c > p[i-1]) p.push(c)
  //     else {
  //         p[i] = p[i-1]
  //         p[i-1] = c;

  //         for(let j=i-2; j>=0; j--){
  //             if(p[j] > c){
  //                 p[j+1] = p[j];
  //                 p[j] = c;
  //             } else break;
  //         }
  //     }

  //     return p;
  // }, [])

  let diff = arr[1] - arr[0];
  let finArr = [];

  for(let i=1; i<arr.length; i++){
      if((arr[i] - arr[i-1]) == diff) {
          finArr.push([arr[i-1], arr[i]])
      } else if((arr[i] - arr[i-1]) < diff) {
          diff = arr[i] - arr[i-1];
          finArr = [[arr[i-1], arr[i]]]
      }
  }
  console.log({finArr})
  return finArr;
};

minimumAbsDifference([1,3,6,10,15])

// Q7

const threeConsecutiveOdds = function(arr) {
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
  console.log({areThreeConsecutiveOdds})
  return areThreeConsecutiveOdds
};

threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])

//Q8

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

moveZeroes([0,1,0,3,12])