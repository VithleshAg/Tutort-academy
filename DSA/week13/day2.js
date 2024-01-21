// https://leetcode.com/problems/populating-next-right-pointers-in-each-node

var connect = function(root) {
    if(!root) return root;

    const q = [root];

    while(q[0]){
        const qLen = q.length;
        for(let i=0; i<qLen; i++){
            let curr = q.shift();
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
            
            if(i<qLen-1) curr.next = q[0];
            else curr.next = null;
        }
    }

    return root;
};