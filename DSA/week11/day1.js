// Tree

// https://leetcode.com/problems/count-complete-tree-nodes/description/
var countNodes = function(root) {
    if(root ==null) return 0;
    return 1+ countNodes(root.left) + countNodes(root.right)
};

// https://practice.geeksforgeeks.org/problems/count-leaves-in-binary-tree/1
class Solution {
    countLeaves(root){
        //code here
        if(root==null) return 0;
        if(!root.left && !root.right) return 1;        
        return this.countLeaves(root.left) + this.countLeaves(root.right)
    }
}
