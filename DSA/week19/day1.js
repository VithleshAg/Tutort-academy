// https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1

class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    peek() {
        return this.heap[0];
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element.val >= parent.val) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.val < element.val) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.val < element.val) || 
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}

class Solution {
    mergeKArrays(arr,K){
        //code here
        const pq = new MinHeap();
        const res = [];
        
        for(let i=0; i<arr.length; i++) pq.push({val: arr[i][0], row: i, col: 0});
        
        while(pq.heap.length>0){
            let {val, row, col} = pq.pop();
            
            res.push(val);
            
            if(col+1 < K) {
                pq.push({val: arr[row][col+1], row, col: col+1})
            }
        }
        
        return res;
    }
}