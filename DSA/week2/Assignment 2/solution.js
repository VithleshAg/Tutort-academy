//Q1

const reverseNum = (n) => {
  let reverseNum = 0;
  while (n !== 0) {
    reverseNum = reverseNum * 10 + (n % 10);
    n = n > 0 ? Math.floor(n / 10) : Math.ceil(n / 10);
  }
  console.log({ reverseNum });
};

reverseNum(153);
// reverseNum(120);
// reverseNum(-129);

// Q2
//getting issue for large input like 73 

class Solution {
  nthRowOfPascalTriangle(N){
      //code here
      
      const pascalArr = [[1]]
      
      for(let i=1; i<N; i++){
          let arr = [];
          let k1=0;
          let max = Math.floor(i/2);
          for(let j=0; j<=max; j++){
              let k2 = pascalArr[i-1][j] ? pascalArr[i-1][j] : pascalArr[i-1][j-1];
              arr[j] = (k1 + k2);
              k1 = pascalArr[i-1][j];
          }
          pascalArr.push(arr)
      }
      
      let result = pascalArr[N-1];
      
      if(N%2 === 0 ) result = [...result, ...result.reverse((a,b) => a-b)];
      else {
          let pop = result.pop();
          result = [...result, pop, ...result.reverse((a,b) => a-b)];
      }
      
      return result;
  }
}

// Q3

const maximumWealth = function (accounts) {
  var richestWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    if (wealth > richestWealth) richestWealth = wealth;
  }
  console.log({richestWealth})
  // return richestWealth;
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

  for(let i=1, j=0; i<nums.length; i++){
      if(nums[j]===0 && nums[i]!==0){
          nums[j] = nums[i];
          nums[i] = 0;
          j++
      } else if(nums[j]!==0) j++
  }
  console.log({nums})
  return nums;
};

moveZeroes([0,1,0,3,12])