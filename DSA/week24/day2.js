// https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1

class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(V, adj) {
        // code here
        const res = [];
        const vis = new Set();
        this.dfs(0, adj, vis, res)
        
        return res;
    }
    
    dfs(v, adj, vis, res){
        if(!vis.has(v)){
            vis.add(v);
            res.push(v);
            
            for(let connVer of adj[v]) this.dfs(parseInt(connVer), adj, vis, res);
        }
    }
}

// https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1

// solution may be different as it is not tested 

class Solution {
    // shortestPath(vector<vector<int>>& edges, int N,int M, int src){
        shortestPath(edges, N, M, src){
        // code here
        const res = new Array(N).fill(Math.min());
        res[src] = 0;
        const vis = new Set();
        const q = [src];
        
        while(q.length!==0){
            let currentVer = q.shift();
            if(!vis.has(currentVer)){
                vis.add(currentVer);
                for(let connectedVer of adj[currentVer]) {
                    if(res[connectedVer] == Math.min()) res[connectedVer] = 1 + res[currentVer];
                    q.push(connectedVer);
                }
            }
        }       
        
        return res;
    }
  };