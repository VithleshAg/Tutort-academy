// Tries=> Searching and pattern matching


// Problem 
// I/P  

// words=   { "apple", "ape", "mango", "news"} 

// Queries={ "apple", "banana", "new", "mango"}    

//             yes      No        No    yes 

 

// Brute Force  => O(m*n) 
// Dictionary Approach =>  SC=O(n)       TC= O(n) 
// Using Trie 
 

// What is Trie? 

// => Generic tree structure 
// => Efficient info retrieval 
// => Searches in O(key length) 
// => Use extra storage


// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/

class TrieNode {
    constructor(value) {
      this.value = value;
      this.children = {};
      this.isEnd = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(null);
    }
  
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
          let ch = word[i];
          if (!(ch in current.children)) {
            current.children[ch] = new TrieNode(ch);
          }
          current = current.children[ch];
        }
        current.isEnd = true;
      }
      search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
          let ch = word[i];
          if (!(ch in current.children)) {
            return false;
          }
          current = current.children[ch];
        }
        return current.isEnd;
      }
      startsWith(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
          let ch = prefix[i];
          if (!(ch in current.children)) {
            return false;
          }
          current = current.children[ch];
        }
        return true;
      }
    }





    // https://leetcode.com/problems/longest-common-prefix/submissions/

    class TrieNode {
        constructor(value) {
          this.value = value;
          this.children = {};
          this.isEnd = false;
          this.childKeys= []
        }
      }
    
      class Trie {
          constructor(){
              this.root = new TrieNode(null);
          }
          insert(word) {
            let current = this.root;
            for (let i = 0; i < word.length; i++) {
              let ch = word[i];
              if (!(ch in current.children)) {
                current.children[ch] = new TrieNode(ch);
                current.childKeys.push(ch);
              }
              current = current.children[ch];
            }
            current.isEnd = true;
          }
      }
    
    var longestCommonPrefix = function(strs) {
        let trie = new Trie(null);
        for(let str of strs) trie.insert(str);
    
        let current = trie.root;
        let res = "";
        while(current.childKeys.length==1 && current.isEnd!==true) {
          let char = current.childKeys[0];
          current = current.children[char];
          res += char;
        }
        return res;
    };