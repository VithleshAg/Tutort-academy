// Q1
var removeNthFromEnd = function(head, n) {
    if(head.next == null) return null;
    let start = {next: head, val: null};
    let first = start;
    let second = start;

    for(let i=1; i<=n; i++)  first = first.next;

    while(first.next !== null){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    let temp = start.next;
    start = null
    
    return temp;
};

//Q2

linkdelete(head,M,N){
    //code here
    let start = {next: head, val: null};
    let first = start;
    let countM=0;
    let countN=0;
    
    while(first.next!==null){
        first = first.next;
        countM++;
        
            if(countM===M){
                while(first.next!==null && countN!==N){
                    first.next = first.next.next; 
                    countN++;
                }
                
                countN=0;
                countM=0;
            }
    }
    
    return start.next;
    
  }

// Q4
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

//Q5
var deleteNode = function(node) {
    // let tempNode = node.next;
    // node.val = tempNode.val;
    // node.next = tempNode.next;
    // tempNode = null;

    node.val = node.next.val;
    node.next = node.next.next;
};

// Q6
var removeElements = function(head, val) {
    let temp = {next: head, val: null};
    let first = temp;

    while(first.next!==null){
        if(first.next.val == val) first.next = first.next.next;
        else first = first.next;
    }

    return temp.next;
};