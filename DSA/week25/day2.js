// https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    // code here
    const vis = new Set();
    for (let i = 0; i < V; i++) {
      if (!vis.has(i)) {
        const tempVis = new Set();
        if (isCyclePresent(i, tempVis)) return true;
      }
    }

    function isCyclePresent(i, tempVis) {
      vis.add(i);
      tempVis.add(i);
      for (let node of adj[i]) {
        if (!vis.has(node)) {
          if (isCyclePresent(node, tempVis)) return true;
        } else if (tempVis.has(node)) return true;
      }
      tempVis.delete(i);
      return false;
    }

    return false;
  }
}

// https://leetcode.com/problems/course-schedule/submissions/

var canFinish = function (numCourses, prerequisites) {
  const V = numCourses;
  const adj = new Array(V).fill(null).map(() => []);
  const vis = new Set();

  for (let pr of prerequisites) adj[pr[0]].push(pr[1]);

  for (let i = 0; i < V; i++) {
    if (!vis.has(i)) {
      const tempVis = new Set();
      if (isCyclePresent(i, tempVis)) return false;
    }
  }

  function isCyclePresent(i, tempVis) {
    vis.add(i);
    tempVis.add(i);

    for (let node of adj[i]) {
      if (!vis.has(node)) {
        if (isCyclePresent(node, tempVis)) return true;
      } else if (tempVis.has(node)) return true;
    }
    tempVis.delete(i);
    return false;
  }

  return true;
};




// Topological sort - DFS

// DAG (Directed Acyclic Graph) 
// Way to arrange edge  u->v in such a way that if u comes before v then it will be same in the arrangement  
// We can have multiple topological sort/ordering available in graph 

// Usage :
// It determines dependency of task 
// Gives order to finish tasks in OS 

// 1. Start with any node and proceed with DFS 
// 2. Mark All  nodes as visited. 
// 3. It uses Stack to maintain order 

class GraphClass{
  V;
  adj;
  // Constructor
  Graph(v){
    this.V = v;
    this.adj = new Array(v).fill().map(() => []);
  }

  AddEdge(i, j) { this.adj[i].push(j);}

  DFS(i, vis, stack){
    vis.add(i);

    for(let v of this.adj[i]){
      if(!vis.has(v)) this.DFS(v, vis, stack);
    }

    stack.push(i);
  }

  TopologicalSort(){
    const stack = [];     //LIFO
    const vis = new Set();

    for(let i=0; i<this.V; i++){
      if(!vis.has(i)) this.DFS(i, vis, stack);
    }

    while(stack.length>0) console.log(stack.pop()+" ");
  }

  constructor(vertex, edges){
    this.Graph(vertex);

    for(let edge of edges) this.AddEdge(...edge);

    this.TopologicalSort();
  }

}

new GraphClass(6, [[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]])