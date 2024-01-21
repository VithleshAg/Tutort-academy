// Sorting => Arrangement or arranging elements in array in increasing or decreasing order 

// 1. In Place Sorting - Sorting technique where input array elements are re arranged itself , no extra array or memory is used. 
// SC  - O(1) 
// e.g. 
//  Bubble Sort, Insertion Sort, Selection Sort 

// 2. Non In Place Sorting- Extra space is used for sorting . 
// SC- O(n)  
// e.g. 
//   Merge Sort 

// 1. Bubble Sort
// => we select an element and shift all elements towards right side which are greter than it and continue.
// TC = O(n2), SC = O(1)

const bubbleSort = (arr) => {
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// 2. Selection sort
// => We select min element and compare with all other elements with it towards right side. min element of them is shifted towards left side of array and then further we continue in similar way 
// TC = O(n2), SC = O(1)

const selectionSort = (arr) => {
    const n = arr.length;

    for(let i=0; i<n; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[min]) min = j;
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

// 3. Insertion sort

// => Sort subset of array  
// => Expand sorted subsets 
// ex= [7,2,4,1,3] => Shift all numbers greater than 2 (in left part of it) by 1 position towards right.

// TC = O(n2), SC = O(1)

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let hole = i;
        let value = arr[i];

        for(let j=i-1; j>=0; j--){
            if(arr[j]<=value) break;
            arr[j+1] = arr[j];
            hole = j;
        }

        if(hole!==i) arr[hole] = value;
    }
}

// 4. Merge sort
// => Divide and Conquer 
// => No in place sorting  
// => Merge(called internally by Merge Sort) 
// => SC- O(n) 
// => TC - O(nlogn) 

function mergeSort(arr){
    const n = arr.length;
    if(n<2) return;
    
    let mid = parseInt(n/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
}

function merge(left, right, arr){
    const l = left.length, r = right.length;
    let i=0,j=0,k=0;

    while(i<l && j<r){
        if(left[i]<=right[j]) arr[k++] = left[i++];
        else arr[k++] = right[j++];       
    }

    while(i<l) arr[k++] = left[i++];
    while(j<r) arr[k++] = right[j++];
}

// 5. Quick sort
// We select pivot element, arrange numbers less than pivot on the left and greater number on right. 
// We continue further for subarrays 
// QuickSort 
//  Partition - Arranging numbers 

// TC= O(n2) SC=O(1)

function QuickSort(arr, start, end){
    if(start>=end) return;
    const pIndex = Partition(arr, start, end);
    QuickSort(arr, start, pIndex-1);
    QuickSort(arr, pIndex+1, end);
}

function Partition(arr, start, end){
    const pivot = arr[end];
    let pIndex = start;

    for(let i=start; i<end; i++){
        if(arr[i]<=pivot){
            [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
            pIndex++;
        }
    }
    [arr[end], arr[pIndex]] = [arr[pIndex], arr[end]];
    return pIndex;
}