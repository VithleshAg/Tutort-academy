// Heap is a complete Binary tree meeting one property (top value should be max or min)

// PriorityQueue- Implements Heap internally 
// Cases where we can use Priority Queue 
// =>When we need sorted values and after removing one value again it gets sorted 


// Operations in Heap =>
// Create - O(n) 
// Add  - O(log n) 
// Delete - O(log n) 
// Heapify 
// HeapSort 






// Min heap in JS
// for max-heap, put values with negative sign

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
            if (element >= parent) break;
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
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
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





// https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/0?page=2&difficulty%5B%5D=0&sortBy=submissions
class Solution {
    minCost(arr, n) {
        // code here
        let pq = new MinHeap(n);
        let cost = 0;
        
        for(let i=0; i<n; i++)  pq.insertKey(arr[i]);
        
        while(pq.heap_size>1){
            let min1 = pq.extractMin();
            let min2 = pq.extractMin();
            cost += (min1+min2);
            pq.insertKey(min1+min2);
        }
        
        return cost
    }
}

// https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/
var findKthLargest = function(nums, k) {
    let pq = new MinHeap();
    for(let i=0; i<k; i++) pq.push(nums[i]);
    for(let i=k; i<nums.length; i++) {
        if(pq.peek() < nums[i]){
            pq.push(nums[i]);
            pq.pop();
        }      
    }
    return pq.peek();
};