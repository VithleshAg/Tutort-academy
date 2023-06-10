//Q1
const sumOfIntegers = (n, arr) => {
   const sum = arr.reduce((p, c) => p+c, 0);
   console.log({sum})
}

sumOfIntegers(6, [5, 8, 3, 10, 22, 45])

//Q2
const getArrayIndVal = (n, i, arr) => {
    console.log(`val at ${i}: `, arr[i])
}

getArrayIndVal(7, 4, [10,20,30,40,50,60,70])

//Q3
const getLessThanX = (n, arr, x) => {
    const total = arr.reduce((p,c) => c<=x ? p+1 : p, 0);
    console.log(`less than ${x} : `, total)
}

getLessThanX(7, [1, 2, 2, 2, 5, 7, 9], 2)

//Q4
const getAlternateValInArr = (n, arr) => {
    let altArr = []
    for(let i=0; i<(n+1)/2; i++){
        altArr.push(arr[2*i])
    }
    console.log({altArr})
}

getAlternateValInArr(5, [1,2,3,4,5])

//Q5
const getElementsAsSameAsIndex = (n, arr) => {
    // consider 1 as based indexing
    const result = arr.reduce((p, c, i) => c === i+1 ? [...p, c]: p, []);
    console.log("same as index: ", result)
}

getElementsAsSameAsIndex(5, [15, 2, 45, 12, 7]);
// getElementsAsSameAsIndex(1, [1]);

//Q6
const isArrayPerfect = (arr) => {
    const n = arr.length%2 === 0 ? arr.length : arr.length -1;
    let isPerfect = true;

    for(let i=0; i<n/2; i++){
        if(arr[i] !== arr[arr.length -1 -i]) {
            isPerfect = false;
            break;
        }
    }

    console.log("isArrayPerfect: ", isPerfect ? "PERFECT" : "NOT PERFECT")
}

isArrayPerfect([1,2,3,2,1])
// isArrayPerfect([1,2,3,4,5])

//Q7
const getMaxVal = (arr) => {
    let max = null;
    const finalArr = arr.reduce((p,c) => {
        if(!max) max = c;
        else if(c>max){
            p = [...p, max];
            max = c;
        } else{
            p = [...p, c]
        }
        return p
    }, []);
    return finalArr
}
const getMinVal = (arr) => {
    let min = null;
    const finalArr = arr.reduce((p,c) => {
        if(!min) min = c;
        else if(c<min){
            p = [...p, min]
            min = c;
        } else{
            p = [...p, c]
        }
        return p
    }, []);
    return finalArr
}

const getVal = (n, arr) => {
    let needMax = true;

    for(let i=0; i<n -1; i++){
        if(needMax){
           arr = getMaxVal(arr)
        } else{
            arr = getMinVal(arr)
        }
        needMax = !needMax;
    }
    console.log("value: ", arr[0])
}

getVal(7, [7, 8, 3, 4, 2, 9, 5]);
// getVal(8, [8, 1, 2, 9, 4, 3, 7, 5])


//Q8

const getSortedArrayWithCondition = (arr) => {
    if(arr.length<=2) console.log("finArr: ", [])
    else {
        let n1=null;
        let n2=null;

        const finArr = arr.reduce((p,n) => {
            if(n>n1 || !n1){
                if(n2) p.push(n2);
                n2=n1;
                n1=n;
            } else if(n > n2 || !n2){
                if(n2) p.push(n2)
                n2=n;                
            } else{
                p.push(n)
            }
            return p
        }, [])

        finArr.sort()
        console.log({finArr})
    }
}

getSortedArrayWithCondition([2, 8, 7, 1, 5])
// getSortedArrayWithCondition([7, -2, 3, 4, 9, -1])


//Q9
const sumOfNSeries = (n) => {
    let sum = null;
    for(let i=1; i<=n; i++){
        sum+=i
    }
    console.log({sum})
}

sumOfNSeries(5)



//Q10

const isFascinating = (n) => {
    n = (n + "" + 2*n + "" + 3*n);
    if(n.length!==9) console.log("not fascinating");
    else {
        n = n.split("");
        let isFasc = true;

        for(let i=1; i<n.length; i++){
            if(isFasc){
                for(let j=0; j<i; j++){
                    if(n[i]===n[j]) {
                        isFasc = false;
                        break;
                    }
                }
            } else{
                console.log("not fascinating");
                break
            }
        }

        if(isFasc) console.log("fascinating");
    }
}

isFascinating(192)
// isFascinating(853)

//bonus ques

const balanceArrayVal = (n, arr) => {
    if(n<2) console.log("balancing val: ", 0)
    else{
        let n1 = 0;
        let n2 = 0;
        for(let i=0; i<arr.length/2; i++){
            n1 += arr[i];
            n2 += arr[arr.length -1 -i];
        }
        if(n1-n2 >= 0) console.log("balancing val: ", n1-n2)
        else console.log("balancing val: ", n2-n1)
    }
}

balanceArrayVal(6, [1, 2, 1, 2, 1, 3])