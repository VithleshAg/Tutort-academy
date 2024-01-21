// Q1
var lastStoneWeight = function(stones) {
    let pq = new MinHeap(stones.length);
    
    for(let stone of stones) pq.push(-stone);

    while(pq.heap.length>1){
        let stone1 = pq.pop();
        let stone2 = pq.pop();
        if(stone1==stone2) continue;
        pq.push(stone1 - stone2);
    }

    let res = -pq.pop();
    return res ? res : 0;
};

// Q2 => done in class

// Q3

var KthLargest = function(k, nums) {
    this.k = k;
    this.pq = new MinHeap();

    if(nums.length<k){
        for(let val of nums) this.pq.push(val);   
    } else{
        for(let i=0; i<nums.length; i++) {
            if(i<k) this.pq.push(nums[i]);
            else if(this.pq.peek() < nums[i]){
                this.pq.push(nums[i]);
                this.pq.pop();
            }  
        }
    }
};

KthLargest.prototype.add = function(val) {
    if(this.pq.heap.length < this.k)  {
        this.pq.push(val);
    }
    else if(this.pq.peek() < val){
        this.pq.push(val);
        this.pq.pop();
    } 
    return this.pq.peek();
};


// Q4
var kClosest = function (points, k) {
    let pq = new MinHeap();
    const res = [];

    for (let i = 0; i < k; i++) {
        let x = points[i][0], y = points[i][1];
        pq.push({ val: -(x*x+y*y), x, y});
    }

    for (let i = k; i < points.length; i++) {
        let x = points[i][0], y = points[i][1];
        if(-pq.peek().val > (x*x+y*y))  {
            pq.push({ val: -(x*x+y*y), x, y});
            pq.pop();
        }
    }

    for(let point of pq.heap) res.push([point.x, point.y]);

    return res;
};

// Q5
var frequencySort = function (s) {
    // // Approach 1 => heap
    // let obj = {};
    // let res = "";
    // let pq = new MinHeap();

    // for(let char of s){
    //     if(obj[char]) obj[char] += 1;
    //     else obj[char] = 1;
    // }

    // for(let key of Object.keys(obj))    pq.push({val: -obj[key], key});

    // while(pq.heap.length>0) {
    //     let popObj = pq.pop();
    //     res+= (popObj.key).repeat(-popObj.val);
    // }

    // return res;

    // Approach 2 => sort
    let obj = {};
    let res = "";

    for(let char of s){
        if(obj[char]) obj[char] += 1;
        else obj[char] = 1;
    }

    const sortedKeys = Object.keys(obj).sort((k1,k2) => obj[k2] - obj[k1]);

    for(let key of sortedKeys) res+= key.repeat(obj[key]);

    return res;
};

// Q6
var topKFrequent = function(nums, k) {
    // using heap and object

    // let obj = {};
    // let pq = new MinHeap();
    // const res = [];

    // for(let num of nums) obj[num] ? obj[num]+=1 : obj[num] = 1;

    // const keys = Object.keys(obj);

    // for(let i=0; i<k; i++)  pq.push({val: obj[keys[i]], key: keys[i]});

    // for(let i=k; i<keys.length; i++)  {
    //     if(pq.peek().val < obj[keys[i]]) {
    //         pq.push({val: obj[keys[i]], key: keys[i]});
    //         pq.pop();
    //     }
    // }

    // while(pq.heap.length>0) res.push(pq.pop().key);

    // return res;

    // using heap and Map

    // let map = new Map();
    // let pq = new MinHeap();
    // const res = [];

    // for(let num of nums) map.set(num, (map.get(num)||0)+1);

    // const keys = [...map.keys()];

    // for(let i=0; i<k; i++)  pq.push({val: map.get(keys[i]), key: keys[i]});

    // for(let i=k; i<keys.length; i++)  {
    //     if(pq.peek().val < map.get(keys[i])) {
    //         pq.push({val: map.get(keys[i]), key: keys[i]});
    //         pq.pop();
    //     }
    // }

    // while(pq.heap.length>0) res.push(pq.pop().key);

    // return res;

    // using Map only

    const map = new Map(), res = []
    nums.forEach(e => map.set(e, (map.get(e) || 0) + 1))
    const store = [...map.entries()].sort((a,b) => b[1] - a[1])

    for( let i = 0 ; i < k && i < store.length ; i++ )
        res.push(store[i][0])

    return res
};

// Q7 => done in class

