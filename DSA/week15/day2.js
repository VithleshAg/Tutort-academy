// https://leetcode.com/problems/valid-parentheses

var isValid = function(s) {
    let obj = {'}': '{', ']':'[', ')':'('};

    let stack = [];

    for(let val of s){
        if(obj[val]){
            if(obj[val] != stack.pop()) return false
        } else stack.push(val);
    }
    
    if(stack.length!==0) return false;

    return true;
};

// https://leetcode.com/problems/evaluate-reverse-polish-notation

var evalRPN = function(tokens) {
    let stack = [];

    for(let val of tokens){
        if('+-*/'.includes(val)){
            let p1 = stack.pop();
            let p2 = stack.pop();
            if(val=='+')  stack.push(p2+p1);
            else if(val=='-')  stack.push(p2-p1);
            else if(val=='*')  stack.push(p2*p1);
            else stack.push(parseInt(p2/p1));
        }else stack.push(parseInt(val));
    }

    return stack.pop();
};

// https://leetcode.com/problems/min-stack


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