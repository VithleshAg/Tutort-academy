// https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

class Solution {
    result = [];
    
    findPath(rat, n){
        //code here
        const vis = Array(n).fill(null).map(() => Array(n));
        this.getPath(rat, n, vis, 0, 0, "");
        return this.result;
    }
    
    getPath(rat, n, vis, i, j, path){
        if(i==n-1 && j==n-1) {
            this.result.push(path);
            return;
        }

        vis[i][j] = 1;
        
        if(this.isValid(rat,n,vis,i-1, j)) this.getPath(rat, n, vis, i-1, j, path+"U");
        if(this.isValid(rat,n,vis,i+1, j)) this.getPath(rat, n, vis, i+1, j, path+"D");
        if(this.isValid(rat,n,vis,i, j-1)) this.getPath(rat, n, vis, i, j-1, path+"L");
        if(this.isValid(rat,n,vis,i, j+1)) this.getPath(rat, n, vis, i, j+1, path+"R");
        
        vis[i][j] = 0;
    }
    
    isValid(rat,n,vis,i,j){
        if(i<n && i>=0 && j<n && j>=0 && vis[i][j]!==1 && rat[i][j]==1) {
            return true;
        }
        return false;
    }
}