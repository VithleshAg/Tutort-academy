// Q1
var distributeCandies = function(candyType) {
    return Math.min(new Set(candyType).size, candyType.length/2)
};

// Q2
var numUniqueEmails = function(emails) {
    const set = new Set();

    for(let email of emails){
        let local = email.split("@")[0].split("+")[0].split(".").join("");
        let domain = email.split("@")[1];
        set.add(local+'@'+domain);
    }

    return set.size
};

//Q3
var arrayRankTransform = function(arr) {
    const obj = {};
    let i=1;
    [...arr].sort((a,b) => a-b).map(v => obj[v] = obj[v] || i++);
    return arr.map(v => obj[v])
};

//Q4

var checkStraightLine = function(coordinates) {

    function getAngle(cord1, cord2){
        if(cord2[0] == cord1[0]) return Math.min();         
        return (cord2[1]-cord1[1])/(cord2[0]-cord1[0])
    }

    const angle = getAngle(coordinates[0], coordinates[1]);

    for(let i=2; i<coordinates.length; i++){
        if(angle !== getAngle(coordinates[i-1], coordinates[i])) return false
    }

    return true;
};

// Q5

var diagonalSum = function(mat) {
    let sum = 0;
    let n = mat[0].length;

    for(let i=0; i<mat.length; i++) sum += mat[i][i] + mat[i][n-1-i];

    if(n%2!==0){
        let ind = Math.floor(n/2);
        sum -= mat[ind][ind];
    }

    return sum;
};

// Q6

var heightChecker = function(heights) {
    return [...heights].sort((a,b) => a-b).reduce((p,c,i) => {
        c !== heights[i] ? p++: p;
        return p;
    }, 0)
};

// Q7

var calPoints = function(op) {
    const records = [];

    for(let i=0; i<op.length; i++){
        if(op[i] == 'D') records.push(records[records.length-1]*2);
        else if(op[i] == '+') records.push(records[records.length-1]+(records[records.length-2] || 0));
        else if(op[i] == 'C') records.pop();
        else records.push(parseInt(op[i]));
    }

    return records.reduce((p,c) => p+c, 0)
};

// Q8

var minOperations = function(logs) {
    let ans = 0

    for(let i=0; i<logs.length; i++){
        if(logs[i] == '../')    ans > 0 ? ans-- : ans;
        else if(logs[i] == './') continue;
        else ans++;
    }

    return ans;
};