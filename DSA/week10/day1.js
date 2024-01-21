//5 Aug

//https://leetcode.com/problems/reverse-linked-list/description/
var reverseList = function(head) {
    // iteratively

    // let prev = null;
    // let curr = head;

    // while(curr!==null){
    //     let temp = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = temp;
    // };
    // return prev;

    //recursively
    if(head==null || head.next==null) return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next  = null;

    return newHead;
};


// https://leetcode.com/problems/add-two-numbers

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode();
    let temp = head;

    while(l1!==null || l2!==null){
        let sum = (l1!==null ? l1.val : 0) + (l2!==null ? l2.val : 0) + carry;

        temp.next = new ListNode(sum%10);
        temp = temp.next;
        carry = sum>9 ? 1 : 0;

        if(l1!==null)   l1 = l1.next;
        if(l2!==null)   l2 = l2.next;
    }

    if(carry) temp.next = new ListNode(carry);

    return head.next;
};

// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    //Approach1
    // let slow = head;
    // let fast = head;

    // while(fast!==null && fast.next!==null){
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(slow==fast)  return true; 
    // }

    // return false;

    //Approach2
    let val = Math.max();
    while(head!==null && head.next!==null){
        if(head.val===val) return true;
        head.val = val;
        head = head.next;
    }
    return false;
};