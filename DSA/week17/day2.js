// https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1

class Solution {
    allBoard = [];
    
    isValid(board, row, col){
        //checking vertically (upper)
        for(let i=0; i<row; i++) if(board[i][col]==='Q') return false;
        
        //checking upper left
        for(let i=row, j=col; i>=0 && j>=0; i--, j--) if(board[i][j]==='Q') return false;
        
        //checking upper right
        for(let i=row, j=col; i>=0 && j<=board.length-1; i--, j++) if(board[i][j]==='Q') return false;
        
        return true;
    }
    
    solveBoard(board){
        const plain = [];
        for(let j=0; j<board.length; j++){
            for(let i=0; i<board.length; i++){
                if(board[i][j] === 'Q'){
                    plain.push(i+1);
                    break;
                }
            }   
        }
        
        this.allBoard.push(plain);
    }
    
    solveQueens(board, n, row){
        if(row==n){
            this.solveBoard(board);
            return;
        }
        
        for(let col=0; col<n; col++){
            // console.log("before isValid: ", {row, col})
            if(this.isValid(board, row, col)){
                board[row][col] = 'Q';
                this.solveQueens(board, n, row+1);
                board[row][col] = '.';
            }
        }
    }
    
    nQueen(n){
        //code here
        const board = Array(n).fill(null).map(() => Array(n));
        this.solveQueens(board, n, 0);
        return this.allBoard;
    }
}
