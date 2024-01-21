//Q1
var postorderTraversal = function(root) {
    if(root==null) return [];
    const ans = [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
    return ans;
};

//Q2
var inorderTraversal = function(root) {
    if(root==null) return [];
    const ans = [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
    return ans;
};

//Q3
var minDepth = function(root) {
    if(root ==null) return 0;
    let q = [root];
    let minDepth = 0;

    while(q[0]){
        const size = q.length;
        minDepth++;
        for(let i=0; i<size; i++){
            const curr = q.shift();

            if(!curr.left && !curr.right)   return minDepth;
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
    }
};

// Q4
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

// Q5
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

// Q6
var zigzagLevelOrder = function(root) {
    if(root==null) return [];
    let ans = [];
    traversal(root, 0);

    function traversal(root, level){
        if(root==null) return;
        const isEven = (level%2 ==0); 

        if(!ans[level]) ans[level] = [];

        if(isEven){
            // ans[level] = [root.val, ...ans[level]]
            ans[level].splice(0,0,root.val)
        } else {
            ans[level].push(root.val);
        }

        traversal(root.right, level+1);
        traversal(root.left, level+1);        
    }

    return ans;
};

// Q7
var averageOfLevels = function(root) {
    let ans = [];
    let q = [root];

    while(q[0]){
        let qLen = q.length;
        let sum = 0;
        for(let i=0; i<qLen; i++){
            let curr = q.shift();
            sum+=curr.val;
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        ans.push(sum/qLen)
    }

    return ans;
};

// Q8

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    dfs(root);

    function dfs(root){
        if(!root) return 0;
        const leftDfs = dfs(root.left);
        const rightDfs = dfs(root.right);
        
        diameter = Math.max(diameter, leftDfs+rightDfs);

        return 1 + Math.max(leftDfs, rightDfs);
    }

    return diameter;
};

// Q9
var hasPathSum = function(root, targetSum) {
    return traversal(root, targetSum);

    function traversal(root, targetSum){
        if(root==null) return false;
        if(!root.left && !root.right && root.val ==targetSum) return true;

        if(traversal(root.right, targetSum-root.val)) return true;
        else if(traversal(root.left, targetSum-root.val)) return true;
        else return false;
    }
};

// Q10
var pathSum = function(root, targetSum) {
    if(root==null) return [];
    const ans = [];
    pathVal(root, targetSum, [])

    function pathVal(root, targetSum, arr){
        if(root==null) return;
        arr.push(root.val);
        const finTargetSum = targetSum-root.val;

        if(root.left==null && root.right==null && finTargetSum==0) ans.push(arr);

        pathVal(root.left, finTargetSum, [...arr]);
        pathVal(root.right, finTargetSum, [...arr]);
    }

    return ans;
};

// Q11
var pathSum = function(root, targetSum) {
    if(root==null) return 0;
    let count = 0;
    const obj = {0:1};
    let sum=0;
    getPathsumCount(root);

    function getPathsumCount(root){
            if(!root) return;

            sum += root.val;
            if(obj[sum-targetSum]) count += obj[sum-targetSum];

            if(obj[sum]) obj[sum] +=1;
            else obj[sum] = 1;

            getPathsumCount(root.left);
            getPathsumCount(root.right);
            
            obj[sum] -= 1;
            sum -= root.val;
    }
    
    return count;
};

// Q12
var distributeCoins = function(root) {
    let count = 0;
    getCount(root);

    function getCount(root){
        if(!root) return 0;
        const left = getCount(root.left);
        const right = getCount(root.right);
        const reqCoins = root.val + left + right- 1;
        count += (Math.abs(left) + Math.abs(right));
        return reqCoins;
    }

    return count;
};

//Q14
var sumNumbers = function(root, num=0) {
    if(root==null) return 0;

    num = num*10 + root.val;
    if(!root.left && !root.right) return num;

    return sumNumbers(root.left, num) + sumNumbers(root.right, num);
};

// Q16
var isSubtree = function(root, subRoot) {
    if(compareRoot(root, subRoot)) return true;
    else if(root.left && isSubtree(root.left, subRoot)) return true;
    else if(root.right && isSubtree(root.right, subRoot)) return true;
    else return false;

    function compareRoot(root, subRoot){
        if(!root && !subRoot) return true;
        else if(root && subRoot && root.val == subRoot.val && compareRoot(root.left, subRoot.left) &&             compareRoot(root.right, subRoot.right)) return true;
        else return false
    }

//     const areEqual = (node1, node2) => {
//     if (!node1 || !node2) return !node1 && !node2;
//     if (node1.val !== node2.val) return false;
//     return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
//   }
//   const dfs = (node) => {
//     if (!node) return false;
//     if (areEqual(node, subRoot)) return true;
//     return dfs(node.left) || dfs(node.right);
//   }
//   return dfs(root);
};

// Q17 & Q18
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