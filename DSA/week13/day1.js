// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
    // let depth=0;
    // traversal(root, 1);

    // function traversal(root, level){
    //     if(root==null) return;
    //     if(level>depth) depth++;
    //     traversal(root.left, level+1);
    //     traversal(root.right, level+1);
    // }

    // return depth;

    if(root==null) return 0;
    const depthLeft = maxDepth(root.left);
    const depthRight = maxDepth(root.right);
    
    return Math.max(depthLeft, depthRight) + 1;
};


// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/

var lowestCommonAncestor = function(root, p, q) {
    if(root==null) return null;
    if(root==p || root==q) return root;

    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);
    
    if(leftLCA && rightLCA) return root;
    return leftLCA!=null ? leftLCA : rightLCA
};

// https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1

class Solution {
    findDist(root,a,b){
        //code here
        const lca = lowestCommonAncestor(root, a, b);
        
        function getDistance(root, n, depth){
            if(root==null) return 0;
            if(root.data==n) return depth;
            return getDistance(root.left, n, depth+1) + getDistance(root.right, n, depth+1);
        };
        
        function lowestCommonAncestor(root, p, q) {
            if(root==null) return null;
            if(root.data==p || root.data==q) return root;
        
            const leftLCA = lowestCommonAncestor(root.left, p, q);
            const rightLCA = lowestCommonAncestor(root.right, p, q);
            
            if(leftLCA && rightLCA) return root;
            return leftLCA!=null ? leftLCA : rightLCA
        };
        return getDistance(lca, a, 0) + getDistance(lca, b, 0);
    }

}

// https://leetcode.com/problems/deepest-leaves-sum/submissions/

var deepestLeavesSum = function(root) {
    let sum = 0;
    const q = [root];

    while(q[0]){
        const qLen = q.length;
        sum=0;
        for(let i=0; i<qLen; i++){
            const curr = q.shift();
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
            sum+= curr.val;
        }
    }

    return sum;
};