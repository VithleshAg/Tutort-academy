// LRU Cache=>
// Cache memory 
//  - fast memory this is used to store objects which requires frequent access 
// Costly  
// Server Cache memory ( CDNs like Akmai, Azure CDN) 

// https://leetcode.com/problems/lru-cache/submissions/

var DLinkedList = function(){
    this.key, this.value,this.prev, this.next;
}

var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new DLinkedList();
    this.tail = new DLinkedList();
    
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.removeNode = function (node){
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;

        this.size--;
    }

    this.addNode = function (node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

        this.size++;
    }
};

LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.removeNode(node);
    this.addNode(node);
    return node.value;
};

LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        const node = this.cache.get(key);
        node.value = value;
        this.removeNode(node);
        this.addNode(node);
    } else {
        const node = new DLinkedList();
        node.key = key, node.value = value;
        this.addNode(node);
        this.cache.set(node.key, node);
        if(this.size > this.capacity) {
            let delNode = this.tail.prev;
            this.removeNode(delNode);
            this.cache.delete(delNode.key);
        }
    }
};