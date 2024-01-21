// https://leetcode.com/problems/sum-of-left-leaves/submissions/
var sumOfLeftLeaves = function(root) {
    const sumOfLeft = (root, isLeft) => {
        if(root==null) return 0;
        if(root.left==null && root.right==null && isLeft) return root.val 

        return sumOfLeft(root.left, true) + sumOfLeft(root.right, false);
    }

    return sumOfLeft(root.left, true) + sumOfLeft(root.right, false);
};

//https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/

var levelOrder = function(root) {
    // let q = [root], ans = [];
    // while (q[0]) {
    //     let qlen = q.length, row = []
    //     for (let i = 0; i < qlen; i++) {
    //         let curr = q.shift()
    //         row.push(curr.val)
    //         if (curr.left) q.push(curr.left)
    //         if (curr.right) q.push(curr.right)
    //     }
    //     ans.push(row)            
    // }
    // return ans

    let ans = [];
    traversal(root, 0)

    function traversal(root, level){
            if(root==null) return;
    
            if(ans[level]) ans[level].push(root.val);
            else ans[level] = [root.val];
    
            traversal(root.left, level+1); 
            traversal(root.right, level+1);
    }
    
    return ans;
};