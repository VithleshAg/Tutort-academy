// Given an array containing N integers and an integer K., Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.

// 1<=N<=105
// 1<=A[i], K<=105

const lenOfLongSubarr = (arr, n, k) => {
  // code here
  let i = 0,
    j = 0,
    ans = 0;
  let sum = 0;

  while (j < n) {
    sum += arr[j];

    if (sum > k) {
      while (sum > k) {
        sum -= arr[i];
        i++;
      }
    }
    if (sum == k) ans = Math.max(j - i + 1, ans);

    j++;
  }

  return ans;
};

// https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1

const longestKSubstr = (s, k) => {
  //code here
  let map = new Map();
  let n = -1;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    map.set(char, map.get(char) + 1 || 1);

    if (map.size > k) {
      while (map.size > k) {
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) === 0) map.delete(s[i]);
        i++;
      }
    }

    if (map.size === k) {
      n = Math.max(n, j - i + 1);
    }
  }

  return n;
};
