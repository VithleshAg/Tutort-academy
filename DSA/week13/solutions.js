// Q1
var sortedArrayToBST = function(nums) {
    function arryToBst(start, end){
        if(start>end) return null;
        let mid = parseInt((start+end)/2);
        let root = new TreeNode(nums[mid]);
        root.left = arryToBst(start, mid-1);
        root.right = arryToBst(mid+1, end);
        return root;
    }
    return arryToBst(0, nums.length-1);
};

// Q2
var balanceBST = function(root) {
    function getSortedArray(root){
        if(!root) return [];
        if(!root.left && !root.right) return [root.val]; 
        return [...getSortedArray(root.left), root.val, ...getSortedArray(root.right)];
    }

    let  nums = getSortedArray(root);

    function arryToBst(start, end){
        if(start>end) return null;
        let mid = parseInt((start+end)/2);
        let root = new TreeNode(nums[mid]);
        root.left = arryToBst(start, mid-1);
        root.right = arryToBst(mid+1, end);
        return root;
    }

    return arryToBst(0, nums.length-1);
};

// Q3
var findMin = function(nums) {
    let left = 0, right= nums.length-1;

    while(left<right){
        let mid = parseInt((left+right)/2);
        if(nums[mid]>nums[right]) left = mid+1;
        else right = mid;
    }

    return nums[left];
};

//Q5
var sortedArrayToBST = function(nums) {
    function arryToBst(start, end){
        if(start>end) return null;
        let mid = parseInt((start+end)/2);
        let root = new TreeNode(nums[mid]);
        root.left = arryToBst(start, mid-1);
        root.right = arryToBst(mid+1, end);
        return root;
    }
    return arryToBst(0, nums.length-1);
};

// Q6
var isValidBST = function(root, min=Math.max(), max=Math.min()) {
    if(!root) return true;
    if(root.val>min && root.val<max){
        return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
    } else return false;

};

// Q8
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);
    addVal(root, val);

    function addVal(root, val){
        if(val > root.val) {
            if(root.right==null) root.right = new TreeNode(val);
            else addVal(root.right, val);
        } else{
            if(root.left==null) root.left = new TreeNode(val);
            else addVal(root.left, val);
        }
    }

    return root;
};

// Q9
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val == val) return root;
    if(val > root.val) return searchBST(root.right, val);
    return searchBST(root.left, val)
};

// Q10
var bstFromPreorder = function(arr) {
    let i=0;
    const root = new TreeNode(arr[i++]);
    getBstFromPreorder(root, Math.max(), Math.min());

    function getBstFromPreorder(root, lower, upper){
        if(arr[i]<root.val && arr[i] > lower) {
            root.left = new TreeNode(arr[i++]);
            getBstFromPreorder(root.left, lower, root.val);
        }

        if(arr[i]>root.val && arr[i]<upper) {
            root.right = new TreeNode(arr[i++]);
            getBstFromPreorder(root.right, root.val, upper);
        }
    }
    return root;
};

// Q11
var lowestCommonAncestor = function(root, p, q) {
    let small = Math.min(p.val,q.val);
    let big = Math.max(p.val,q.val);
    return getLowestCommonAncestor(root, small, big);

    function getLowestCommonAncestor(root, small, big) {
        if(root==null) return null;
        if(root.val==small || root.val==big) return root;
        if(root.val > small && root.val<big) return root;
        if(root.val > small && root.val>big) return getLowestCommonAncestor(root.left, small, big);
        else return getLowestCommonAncestor(root.right, small, big);
    }
};