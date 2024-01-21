// https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1
class Solution {
    // Function to return the diameter of a Binary Tree.
    constructor(){
        this.md = 0;
    }
    diameter(root) {
        // your code here

        this.findDiameter(root);
        return this.md;
    }
    
    findDiameter(root) {
        if(root==null) return 0;
        let hlst = this.findDiameter(root.left);
        let hrst = this.findDiameter(root.right);
        // console.log({hlst, hrst, diameter})
        this.md = Math.max(this.md, 1+hlst+hrst);
        
        return 1+Math.max(hlst, hrst);
    }
}

// https://practice.geeksforgeeks.org/problems/check-for-bst/1
class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    isBST(root, leftCap=Math.max(), rightCap=Math.min())
    {
        //your code here
        if(root==null) return true;
        if(root.data<=leftCap || root.data>=rightCap) return false;
        
        return this.isBST(root.left, leftCap, root.data) && this.isBST(root.right, root.data, rightCap)
    }
}

// https://practice.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1
class Solution {
    // Function to insert a node in a BST.
    insert(node, k) {
        // your code here
        let root=node;
        
        while(root!==null){
            if(root.data==k) return node;
            else if(root.data<k) {
                if(!root.right) {
                    root.right = new Node(k);
                    return node;
                }
                else root = root.right;
            }
            else {
                if(!root.left) {
                    root.left = new Node(k);
                    return node;
                }
                else root = root.left;
            }
        }
        
        return node;
    }
}

// https://practice.geeksforgeeks.org/problems/delete-a-node-from-bst/1