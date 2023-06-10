//Q1 Find max and min element in an array 
// constraint is given like from -10000 to 10000

// Approach 1 => using sorting => Object(nlogn)
// Approach 2 => using comparison => Object(n)
// Approach 3 => using max and min permitted values

const getMaxMin1 = (arr) => {
  let max = arr[0];
  let min = arr[0];

  arr.forEach(val => {
    if(val>max) max = val;
    else if(val < min) min = val;
  })
  console.log({max, min})
}

getMaxMin1([3,6,-3,10])

const getMaxMin2 = (arr) => {
  let max = -10000;
  let min = 10000;

  // let max = Math.max();
  // let min = Math.min();

  arr.forEach(val => {
    if(val>max) max = val;
    else if(val < min) min = val;
  })
  console.log({max, min})
}

getMaxMin2([3,6,-3,10])


//Q2 Find first 2 max elements (distinct) in array
//1. Assume all elements are distinct
//2. Array have atleast 2 elements
//3. Elements lie in range of -10000 < nums[i] < 10000

const getFirst2MaxElements1 = (nums) => {
  let n1 = null;
  let n2 = null;

  // let n1 = -10000;
  // let n2 = -10000;

  // let n1 = arr[0];
  // let n2 = arr[1]; => loop from 2 to arr.length-1

  nums.forEach(n => {
    if (n > n1 || !n1) {
      n2 = n1;
      n1 = n;
    }else if(n > n2 || !n2){
      n2 = n;
    }
  });

  console.log({ n1, n2 });
};

getFirst2MaxElements1([1,5,3,8,0,7])


//Q Find first 2 max elements (distinct) in array
//1. Assume all elements are not distinct
//2. Array have atleast 2 elements
//3. Elements lie in range of -10000 < nums[i] < 10000

const getFirst2MaxElements2 = (nums) => {
  let n1 = null;
  let n2 = null;

  nums.forEach(n => {
    if (n > n1 || !n1) {
      n2 = n1;
      n1 = n;
    // } else if (n < n1) {
    }else if((n > n2 || !n2) && n!==n1){
      n2 = n;
    }
  });

  console.log({ n1, n2 });
};

getFirst2MaxElements2([1,5,3,8,0,8,7])

