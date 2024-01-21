// Q1
var RandomizedSet = function() {
    this.map = new Map;
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.map.has(val)) {
        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)) {
        let ind = this.map.get(val);
        this.map.delete(val);
        swap(ind, this.arr.length-1, this.arr);
        this.arr.pop();
        this.map.set(this.arr[ind], ind)
        return true;
    }
    return false;

    function swap(a, b, arr){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let n = parseInt(Math.random()*this.arr.length);
    return this.arr[n];
};

// Q3
var MinStack = function() {
    this.arr = [];
    this.minArr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    if(this.minArr.length==0 || this.minArr[this.minArr.length-1]>=val) this.minArr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.arr.pop();
    if(this.minArr[this.minArr.length-1] == val) this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[this.minArr.length-1];
};

// Q5

var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack2.length==0){
      while(this.stack1.length!==0){
          this.stack2.push(this.stack1.pop())
      }  
    }
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack2.length !==0 ? this.stack2[this.stack2.length-1] : this.stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0 ? true : false;
};

// Q6
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(let a of asteroids){
        if(a < 0){
            while(stack.at(-1) > 0 && stack.at(-1) < -a) stack.pop();
            if(stack.at(-1) == -a) {
                stack.pop();
                continue;
            }
            if(stack.at(-1) > -a) continue;
            stack.push(a);
        } else stack.push(a);
    }

    return stack;
};

// Q8
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let q = [];

    for(let i=0; i<nums.length; i++){
        if(q[0]===i-k) q.shift();
        while(nums[q[q.length-1]]<nums[i]) q.pop();
        if(q.length==0 || nums[q[q.length-1]]>=nums[i]) q.push(i);
        if(i>=k-1) res.push(nums[q[0]])
    }

    return res;
};

// Q9

var ProductOfNumbers = function() {
    this.nums = [1];
};

ProductOfNumbers.prototype.add = function(num) {
    if(num==0) this.nums = [1];
    else {
        let prod = num * this.nums[this.nums.length-1];
        this.nums.push(prod);
    }
};

ProductOfNumbers.prototype.getProduct = function(k) {
    let n = this.nums.length;
    if(k>=n) return 0;
    return this.nums[n-1]/this.nums[n-1-k];
};