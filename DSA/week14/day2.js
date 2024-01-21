// https://practice.geeksforgeeks.org/problems/delete-a-node-from-bst/1
class Solution {
    // Function to delete a node from BST.
    deleteNode(root, x) {
        // your code here
        if(!root) return null;
        
        if(x>root.data) root.right = this.deleteNode(root.right, x);
        else if(x<root.data) root.left = this.deleteNode(root.left, x);
        else{
            let lst = root.left;
            let rst = root.right;
            
            if(!lst && !rst) return null;
            if(!lst) return rst;
            if(!rst) return lst;
            if(lst && rst){
                let curr = lst;
                while(curr.right!==null)    curr=curr.right;  
                root.data = curr.data;
                root.left = this.deleteNode(lst, curr.data);
                return root;
            }
        }
        
        return root;
    }
}

// https://practice.geeksforgeeks.org/problems/construct-tree-1/1
class Solution {
    constructor(){
        this.ind = 0;
    }
    
  	buildTree(inorder,preorder,n){
  		//code here
  		if(!inorder.length) return null;
  		
  		let val = preorder[this.ind++];
  		let inOrderInd = inorder.indexOf(val);
  		
  		const root = new Node(val);
  		root.left = this.buildTree(inorder.slice(0, inOrderInd),preorder,n);
  		root.right = this.buildTree(inorder.slice(inOrderInd+1),preorder,n);
  		return root;
  	}
}

// https://leetcode.com/problems/binary-search/submissions/
var search = function(nums, target) {
    let low=0, high = nums.length-1;

    while(low<=high){
        let mid = Number.parseInt((low+high)/2);
        if(target==nums[mid]) return mid;
        else if(target<nums[mid]) high = mid-1;
        else if(target>nums[mid]) low = mid+1;
    }

    return -1;
};

//https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x2041/1