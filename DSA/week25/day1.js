// https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1

class Solution
{
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    dijkstra(V,Adj,S)
    {
        //code here
        const distance = new Array(V).fill(Math.min());
        distance[S] = 0;
        const q = [S];
    
        while(q.length>0){
            const node = q.shift();
            for(let ConnNode of Adj[node]){
                if(distance[node] + ConnNode[1] < distance[ConnNode[0]]){
                    distance[ConnNode[0]] = distance[node] + ConnNode[1];
                    q.push(ConnNode[0]);
                    // q.sort((a,b) => distance[a] - distance[b]);
                }
            }
        }
    
        return distance;
    }
    
}

// https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1

class Solution {
    spanningTree(arr, v, e) {
        // code here
        const travels = new Array(v).fill().map(() => []);
    
        for(let t of arr) {
            travels[t[0]].push([parseInt(t[1]), parseInt(t[2])]);
            travels[t[1]].push([parseInt(t[0]), parseInt(t[2])]);
        }
    
        const q = [[0, 0]];
        let res=0;
        let vis = new Set();
        
    
        while(q.length>0){
            const node = q.shift();
            
            if(vis.has(node[0])) continue;
            
            vis.add(node[0]);
            res+=node[1];
            
            for(let ConnNode of travels[node[0]]){
                if(!vis.has(ConnNode[0])) q.push(ConnNode);
            }
            
            q.sort((a,b) => a[1] - b[1]);
        }

        return res;
    }
}