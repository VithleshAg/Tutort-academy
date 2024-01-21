// 1

var networkDelayTime = function(times, n, k) {
    const travels = new Array(n+1).fill().map(() => [])
    const weight = new Array(n+1).fill(Math.min());
    weight[0] = 0; weight[k] = 0;

    for(let t of times) travels[t[0]].push([t[1], t[2]]);

    const q = [k];

    while(q.length>0){
        const node = q.shift();
        for(let ConnNode of travels[node]){
            if(weight[node] + ConnNode[1] < weight[ConnNode[0]]){
                weight[ConnNode[0]] = weight[node] + ConnNode[1];
                q.push(ConnNode[0]);
                // q.sort((a,b) => weight[a] - weight[b]);
            }
        }
    }

    const maxWeight = Math.max(...weight);

    if(maxWeight==Math.min()) return -1;
    else return maxWeight;

};

// 2
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

  // 3

  var findRedundantConnection = function(edges) {
    const V = edges.length;
    const adj = new Array(V+1).fill(null).map(() => []);

    for (let edge of edges) {
      const [v1, v2] = edge;
      if(isCyclePresent(v2, v1, v1)) return [v1, v2];
      adj[v1].push(v2);
      adj[v2].push(v1);
    }

    function isCyclePresent(curr, target, prev) {
      for (let node of adj[curr]) {
        if(node === target) return true;
        else if (node!=prev && isCyclePresent(node, target, curr)) return true;
      }
      return false;
    }
};

// 4

var cloneGraph = function(node, copy=new Map()) {

  if(!node) return null;
  
  if(!copy.has(node.val)){
      copy.set(node.val, new Node(node.val));
      copy.get(node.val).neighbors = node.neighbors.map((neighborNode) => cloneGraph(neighborNode, copy))
  }
  
  return copy.get(node.val);
};