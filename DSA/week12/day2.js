// https://leetcode.com/problems/binary-tree-right-side-view/submissions/

var rightSideView = function(root) {
    //Approach1

    // let q = [root];
    // let ans = [];

    // while(q[0]){
    //     let qLen = q.length;
    //     let curr;
    //     for(let i=0; i<qLen; i++){
    //         curr = q.shift();
    //         if(curr.left) q.push(curr.left);
    //         if(curr.right) q.push(curr.right);
    //     }
        
    //     ans.push(curr.val);
    // }

    // return ans;

    //Approach2
    
    let ans = [];

    traversal(root, 0)


    function traversal(root, level){
        if(root==null) return;

        if(ans.length == level) ans[level] = root.val;

        traversal(root.right, level+1);
        traversal(root.left, level+1);       
    }

    return ans;
};


// https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1

class Solution {
    leftView(root)
    {
        //your code here
        
        // Approach 1
        // let ans = []
        // let q = [root];
    
        // while(q[0]){
        //     let qLen = q.length;
        //     let curr;
        //     for(let i=0; i<qLen; i++){
        //         curr = q.shift();
        //         if(curr.right) q.push(curr.right);
        //         if(curr.left) q.push(curr.left);
        //     }
            
        //     ans.push(curr.data);
        // }
    
        // return ans;
        
        // Approach 2
        let ans = [];

        traversal(root, 0)
    
    
        function traversal(root, level){
            if(root==null) return;
    
            if(ans.length == level) ans[level] = root.data;
    
            traversal(root.left, level+1); 
            traversal(root.right, level+1);
        }
    
        return ans;
    }
}

//https://practice.geeksforgeeks.org/problems/k-distance-from-root/1

class Solution {
    
    Kdistance(root,k){
        //code here
        
        // let ans = [];
        
        // if(root ==null) return [];
    
  //   	if(k==0) ans.push(root.data);
  //   	else {
  //   	    let obj = new Solution();
  //   	    ans.push(...obj.Kdistance(root.left, k-1));
  //   	    ans.push(...obj.Kdistance(root.right, k-1));
  //   	}
        
        // return ans
        
        // Approach 2
      let ans = [];

      traversal(root, 0)
  
  
      function traversal(root, level){
          if(root==null) return;
  
          if(k == level) ans.push(root.data);
          else {
              traversal(root.left, level+1); 
              traversal(root.right, level+1);   
          }
      }
  
      return ans;
    }
}