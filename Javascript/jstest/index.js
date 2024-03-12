// let y=5;
// function plus1(x){
//     return x+1
// }

// plus1(y);


// const square=function(x){
// }
// console.log(square(plus1(y)))


// function abs(x){
//     if(x>=0){
//         return x;
//     }else{
//         return -x;
//     }
// }
// console.log(abs(-10)===abs(10))

let primes=[1,3,4,5,6]

function sum(array){
    let sum=0;
    for(let x of array){
        sum+=x
    }
    return sum;
}
console.log(sum(primes))
