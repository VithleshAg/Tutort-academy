// print below pattern

// *****
// ****
// ***
// **
// *

const getAstricPattern = (n) => {
    let str = "";
    for(let i=0; i<n; i++){
        for(let j=n; j>i; j--){
            str += "*";
        }
        str += "\n";
    }
    console.log("paterrn: ")
    console.log(str)
}
getAstricPattern(5)