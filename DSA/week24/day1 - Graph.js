// Graph
// -Non-linear DS 
// -Nodes connected with edges 
// -No rules 
// -Tree is special kind of graph 

// Node or vertex; edge (connecting roots or edges)

// => There are 2 kinds of graphs: 
// 1. Directed Graph - can go any direction, no direction is there
// 2. Undirected Graph - will go in particular direction, direction is specified

// We can track connection of edges with other edges by:
// 1. Adjacency Matrix
// 2. Adjacency List


// https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1

class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        // code here
        const res = [];
        const vis = new Set();
        const q = [0];
        
        while(q.length!==0){
            let currentVer = q.shift();
            if(!vis.has(currentVer)){
                vis.add(currentVer);
                res.push(currentVer);
                for(let connectedVer of adj[currentVer]) q.push(parseInt(connectedVer));
            }
        }       
        
        return res;
    }
}