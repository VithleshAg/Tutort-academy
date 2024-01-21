// https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1
class Solution {
    find_permutation(S){
         //code here
        
         // Approach 2
        let set = new Set;
        S = S.split("").sort().join("");
        getPermutation(S, Array(S.length).fill(false), "");
        return Array.from(set);
        
        function getPermutation(str, arr, currStr){
            if(currStr.length === str.length){
                if(!set.has(currStr)) set.add(currStr);
                return;
            }
            for(let i=0; i<str.length; i++){
                if(!arr[i]){
                    arr[i] = true;
                    currStr += str[i];
                    getPermutation(str, arr, currStr);
                    arr[i] = false;
                    currStr = currStr.slice(0, -1);
                }
            }
        }
        
        
        // Approach 1 (answer is not coming in lexicographical order)
        // let arr = [];
        // S = S.split("").sort().join("");
        // getPermutation(S, 0);
        // return arr;
        
        // function getPermutation(str, left){
        //     if(left===str.length){
        //         arr.push(str);
        //         return;
        //     }
        //     for(let i=left; i<str.length; i++){
        //         if(left==i || (left!=i && str[left]!=str[i])){
        //             str = swap(str, left, i);
        //             getPermutation(str, left+1);
        //             str = swap(str, left, i);
        //         }
        //     }
        // }
        
        // function swap(str, i1, i2){
        //     str = str.split("");
        //     let char = str[i1];
        //     str[i1] = str[i2];
        //     str[i2] = char;
        //     return str.join("");
        // }
    }
}

// https://leetcode.com/problems/sudoku-solver/submissions/

var solveSudoku = function(board) {
    SolverFunc(0, 0);
    return board;

    function isValid(row, col, val){
        //row check
        for(let i=0; i<9; i++){
            if(board[i][col]== val) return false
        }

        //col check
        for(let j=0; j<9; j++){
            if(board[row][j]== val) return false
        }

        //squarely check
        for(let k=0; k<9; k++){
            let currRow = (parseInt(row/3)*3)+parseInt(k/3);
            let currCol = (parseInt(col/3)*3)+k%3;
            if(board[currRow][currCol]== val) return false
        }

        return true;
    }

    function SolverFunc(row, col){
        if(row==8 && col==9){
            return true;
        }
        if(col==9) row++, col=0;
        if(board[row][col]!=='.') return SolverFunc(row, col+1);
        
        for(let i=1; i<10; i++){
            if(isValid(row, col, i)){
                board[row][col] = `${i}`;
                if(SolverFunc(row, col+1)) return true;
                board[row][col] = '.';
            }
        }
        return false;
    }
};