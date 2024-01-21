// Q1
var numIslands = function(grid) {
    let numOfIslands = 0;
    let m = grid.length;
    let n = grid[0].length;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]==0) continue;
            numOfIslands++; 
            markNearbyLand(i, j)       
        }
    }

    return numOfIslands;

    function markNearbyLand(i, j) {
        if(i>=0 && i<m && j>=0 && j<n && grid[i][j]==1){
            grid[i][j] = 0; 
            markNearbyLand(i, j+1);
            markNearbyLand(i, j-1);
            markNearbyLand(i+1, j);
            markNearbyLand(i-1, j);  
        } 
        return;
    }
};

// Q3

    const data = [
    [INF,-1,0,INF],
    [INF,INF,INF,0],
    [INF,-1,INF,-1],
    [0,-1,INF,INF]
    ]
    
  function fill(matrix) {
    const m = matrix.length;
      const n = matrix[0].length;
      const INF = 2342567867;
  
      for (let i = 0; i < m; i++) { 
          for (let j = 0; j < n; j++) { 
              if(matrix[i][j] == INF) matrix[i][j] = getPath(i, j, 0)
          }
      }
  
      return matrix;
  
      function getPath(i, j, dist) { 
          if (i >= 0 && i < m && j >= 0 && j < n && matrix[i][j] !== -1) {
              if (matrix[i][j] >= 0 && matrix[i][j]<INF) return dist+matrix[i][j];
              matrix[i][j] = -1;
              let path1 = getPath(i + 1, j, dist + 1);
              let path2 = getPath(i - 1, j, dist + 1);
              let path3 = getPath(i, j+1, dist + 1);
              let path4 = getPath(i, j - 1, dist + 1);
              matrix[i][j] = INF;
              return Math.min(path1, path2, path3, path4);
          } else return INF;
      }
  }
  
  console.log(fill(data))

// Q6
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let m = grid.length;
    let n = grid[0].length;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]==0) continue;
            let area = markNearbyLand(i, j, 0);
            maxArea = Math.max(area, maxArea);
        }
    }

    return maxArea;

    function markNearbyLand(i, j, area) {
        if(i>=0 && i<m && j>=0 && j<n && grid[i][j]==1){
            area+=1;
            grid[i][j] = 0; 
            area = markNearbyLand(i, j+1, area);
            area = markNearbyLand(i, j-1, area);
            area = markNearbyLand(i+1, j, area);
            area = markNearbyLand(i-1, j, area);  
        } 
        return area;
    }
};

// Q7
var islandPerimeter = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let peri = 0;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]==0) continue;
            peri += 4;
            if(grid[i][j+1]) peri--;
            if(grid[i][j-1]) peri--;
            if(grid[i+1] && grid[i+1][j]) peri--;
            if(grid[i-1] && grid[i-1][j]) peri--;
        }
    }

    return peri;
};