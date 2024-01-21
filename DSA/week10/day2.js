//https://leetcode.com/problems/copy-list-with-random-pointer/submissions/

let gMap = new Map;

var copyRandomList = function(head) {
    // Approach 1 recursion + dictionary

    // if(!head) return null;
    // if(gMap.has(head)) return gMap.get(head);

    // let node = new ListNode(head.val);
    // gMap.set(head, node)

    // node.next = copyRandomList(head.next)
    // node.random = copyRandomList(head.random)

    // return node;

    // Approach 2 => without using dictionary
    if(!head) return null;

    let temp = head;
    while(temp!== null){
        let node = new ListNode(temp.val);
        node.next = temp.next;
        temp.next = node;
        temp = node.next;
    }

    temp = head;

    while(temp!==null){
        temp.next.random = temp.random?.next || null;
        temp = temp.next.next;
    }

    temp = head;
    let newHead = head.next;

    while(temp!==null){
        let nextNode = temp.next;
        temp.next = nextNode.next;
        temp = temp.next;
        if(temp!==null){
            nextNode.next = temp.next;
        }
    }

    return newHead;
};


// https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/

var reverseKGroup = function(head, k) {
    if(head.next==null || k==1) return head;

    let prev = null;
    let curr = head;

    for(let i=0; i<k; i++){
        let nextNode = curr.next;
        curr.next = prev;

        prev = curr;
        curr = nextNode;
    }

    let count=0;
    let temp = curr;
    while(count<k && temp!==null){
        temp = temp.next;
        count++;
    }

    if(count==k) head.next = reverseKGroup(curr, k);
    else head.next = curr;

    return prev;
};