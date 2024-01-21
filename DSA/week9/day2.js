// 30 July

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
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

// https://leetcode.com/problems/delete-node-in-a-linked-list/submissions/

var deleteNode = function(node) {
    // let tempNode = node.next;
    // node.val = tempNode.val;
    // node.next = tempNode.next;
    // tempNode = null;

    node.val = node.next.val;
    node.next = node.next.next;
};

//Reversing a LL

    let prev = null;
    let curr = head;

    while(curr!==null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    };

    return prev;