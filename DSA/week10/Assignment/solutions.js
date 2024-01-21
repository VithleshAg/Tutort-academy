// Q2

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let temp = head;

    while(list1!=null || list2!=null){
        if(list1!==null && list2!==null){
            if(list1.val<=list2.val){
                temp.next = list1;
                temp=temp.next;
                list1 = list1.next;
            }
            else {
                temp.next = list2;
                temp=temp.next;
                list2 = list2.next;
            }
        } else if(list1!==null) {
            temp.next = list1;
            list1 = null;
        }
        else {
            temp.next = list2;
            list2 = null
        }   
    }

    return head.next;
};

//Q3
var hasCycle = function(head) {
    if(head ==null || head.next==null) return false;
    
    //Approach1
    // let slow = head;
    // let fast = head;

    // while(fast!==null && fast?.next!==null && fast?.next?.next!==null){
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(slow==fast)  return true; 
    // }

    // return false;

    //Approach2
    let val = Math.max();
    while(head.next!==null){
        if(head.val===val) return true;
        head.val = val;
        head = head.next;
    }
    return false;
};

//Q4
var detectCycle = function(head) {

    // Approach 1
    // let set = new Set();

    // while(head!==null){
    //   if(set.has(head)) return head;
    //   set.add(head);
    //   head = head.next;
    // }

    // return null;

    // Approach 2
    // const minVal = Math.max();

    // while(head){
    //   if(head.val === minVal) return head;
    //   head.val = minVal;
    //   head = head.next;
    // }

    // return null;

    // Approach 3
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            slow = head;
            while(slow!==fast){
                slow = slow.next; fast = fast.next;
            }
            return slow;
        }
    }

    return null;
};

// Q5

var nextLargerNodes = function(head) {
    let ans = [];
    while(head !==null){
        let temp = head.next;
        let num=0;
        while(temp!==null){
            if(temp.val > head.val){
                num = temp.val;
                break;
            }
            temp = temp.next;
        }
        ans.push(num);
        head=head.next;
    }
    return ans;
};

//Q6

var swapPairs = function(head) {
    if(head==null || head.next==null) return head;
    
    let newHead = head.next;

    let nextSwap = swapPairs(head.next.next);
    head.next.next = head;
    head.next = nextSwap;

    return newHead;
};

// Q7

var rotateRight = function(head, k) {
    if(head==null || head.next==null) return head;

    let n=1;
    let curr = head;
    let prev = head;

    while(curr.next!==null){
        curr = curr.next;
        n++
    }

    k = k%n;

    if(k==0) return head;
    else{
        let prev = head;
        for(let i=0; i<n-k-1; i++){
            prev = prev.next;
        }
        curr.next = head;
        head = prev.next;
        prev.next = null;
    }

    return head;
};

// Q8

var deleteDuplicates = function(head) {
    // Approach1
    // if(head==null || head.next==null) return head;

    // if(head.val === head.next.val){
    //     let val = head.val;
    //     while(head!==null && head.val == val){
    //         head = head.next;
    //     }
    // }

    // if(head==null || head.next==null) return head;

    // if(head.val ==head.next.val) head = deleteDuplicates(head);
    // else head.next = deleteDuplicates(head.next);

    // return head;

    // Approach2

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy, curr = head;

    while(curr){
        while(curr.next && curr.val == curr.next.val) curr = curr.next;

        if(prev.next == curr) prev = prev.next;
        else prev.next = curr.next;

        curr = curr.next;
    }
    
    // return dummy.next;
};

// Q10

var oddEvenList = function(head) {
    if(!head || !head.next || !head.next.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(even && even.next){
        odd.next = even.next;
        odd = even.next;

        even.next = odd.next;
        even = odd.next;
    }

    odd.next = evenStart;

    return head;
};

//Q13

var reverseLL = function(ll){
    let curr = ll;
    let prev = null;

    while(curr!==null){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

var addTwoNumbers = function(l1, l2) {  
    let sumLN = new ListNode();
    let temp = sumLN;

    l1 = reverseLL(l1);
    l2 = reverseLL(l2);

    let carry = 0;
    while(l1 !=null || l2!=null){
        let sum = carry + (l1?.val || 0 )+ (l2?.val ||0);
        let sumNode = new ListNode(sum%10);
        temp.next = sumNode;
        temp=temp.next

        if(sum>=10) carry=1;
        else carry = 0;
        
        l1 = l1?.next;
        l2 = l2?.next;
    }

    if(carry){
        let sumNode = new ListNode(carry);
        temp.next = sumNode;
        temp=temp.next
    }

    return reverseLL(sumLN.next);
};


// Q14

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

// Q15

let gMap = new Map;

var copyRandomList = function(head) {
    // Approach 1 recursion

    // if(!head) return null;
    // if(gMap.has(head)) return gMap.get(head);

    // let node = new ListNode(head.val);
    // gMap.set(head, node)

    // node.next = copyRandomList(head.next)
    // node.random = copyRandomList(head.random)

    // return node;

    // Approach 2
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


// Q16

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