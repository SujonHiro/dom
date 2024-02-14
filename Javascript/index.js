/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
 */
/* That is: removes all dashes, each word after dash becomes uppercased. */

//// splits 'my-long-word' into array ['my', 'long', 'word']
// capitalizes first letters of all array items except the first one
// converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
// joins ['my', 'Long', 'Word'] into 'myLongWord'

/* function camelize(str){
    return str
    .split('-')
    .map(
        (word,index)=> index==0? word:word[0].toUpperCase()+word.slice(1)
    )
    .join('')
}

const result=camelize("background-color");
console.log(result) */

//2.Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.
// removed the numbers except from 1 to 4

/* function filterRange(arr,a,b){
    return arr.filter(item=>(a<=item && item<=b))
}

const arr=[5, 3, 8, 1]

let filtered=filterRange(arr,1,4);
console.log(arr)
console.log(filtered) */

//3.Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//The function should only modify the array. It should not return anything.

/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

a = 1;
b = 4;

const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */

//4.Sort in decreasing order

/* let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=>b-a)

console.log(arr) */

//5.We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

/* function copySorted(arr){
    return arr.slice().sort()
}

let arr=[ 'Html', 'JavaScript', 'Css' ]
let storedCOpy=copySorted(arr)

console.log(storedCOpy)
console.log(arr) */

/*6. Create an extendable calculator
a.Create a constructor function Calculator that creates “extendable” calculator objects.
b.First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
c.second, Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
d.For instance, let’s add the multiplication *, division / and power ** */

/* function Calculator(){
    this.methods={
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
    }

    this.calculate=function(str){
        let split=str.split(" "),
        a=+split[0],
        op=split[1],
        b=+split[2]

        if(!this.methods[op]||isNaN(a)||isNaN(b)){
            return NaN
        }

        return this.methods[op](a,b)
    }
    this.addMethod=function(name,func){
        this.methods[name]=func
    }
}

let calc=new Calculator();

calc.addMethod('/',(a,b)=>a/b)

console.log(calc.calculate("10 / 5")); */

/* The issue "This constructor function may be converted to a class declaration" in JavaScript suggests that 
the constructor function Calculator can be rewritten as a class. 
This is a suggestion made by some code linters or IDEs when they detect that a
 constructor function can be more cleanly expressed using the class syntax.

In this case, the Calculator constructor function could be refactored into a class declaration, 
which might improve readability and maintainability of the code. Here's how you can refactor it:
 */

/*  class Calculator {
    constructor(){
      this.methods = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b
        };
    }
  calculate(str) {
      let split = str.split(" "),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    };
    addMethods = function (name, func) {
      this.methods[name] = func;
    };
  }
  
  let calc = new Calculator();
  
  console.log(calc.calculate("5 + 5"));
  console.log(calc.calculate("5 - 5"));
  console.log(calc.calculate("5 * 5")); */

//8.You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names=users.map(item=>(item.age))

console.log(names) */

//9. You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user)=>({
    fullName:`${user.name} ${user.surname}`,
    id: user.id
}))

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[0].id ) 
console.log( usersMapped[0].fullName ) */

//10. Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

/* function sortByAge(arr){
    return arr.sort((a,b)=> a.age-b.age)
}

let pete = { name: "Pete", age: 30 };
let john = { name: "John", age: 25 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

console.log(arr)
// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete */

//11. Shuffle an array
//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//Multiple runs of shuffle may lead to different orders of elements.

//The provided code simulates shuffling the array [1, 2, 3] using the
//Fisher-Yates shuffle algorithm and counts the occurrences of different permutations of this array after shuffling it a large number of times.
/* function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()* (i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr
}
let count={
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
}
for(let i=0;i<1000000;i++){
   
    count[arr.join('')]++
}
let arr = [1, 2, 3];
shuffle(arr);

for (let key in count) {
    console.log(`${key}: ${count[key]}`)
} */

/* function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()* (i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr) */

//12. Get average age
//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

//The formula for the average is (age1 + age2 + ... + ageN) / N.

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 29 };

//let arr = [ john, pete, mary ];

//alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/* function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age , 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
console.log(getAverageAge(arr));
 */

//13. Filter unique array members
//Let arr be an array.
//Create a function unique(arr) that should return an array with unique items of arr.

/* function unique(arr){
    let newArray=[];

    for(let str of arr ){
        if(!newArray.includes(str)){
            newArray.push(str)
        }
    }
    return newArray;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); */

//14. Create keyed object from array
//Let’s say we received an array of users in the form {id:..., name:..., age:... }.
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

/* function groupById(array){
    return array.reduce((obj,value)=>{
        obj[value.id]=value
        return obj;
    },{})
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById); */

/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */

//15. Sum all numbers till the given one
/*sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 5 + 4 + 3 + 2+1 = 15 */

/*function sumTo(n){
  if(n==1){
    return n;
  }else{
    return n+sumTo(n-1)
  }
 }
 console.log(sumTo(5))
 */
//calculate factorial

/* function fact(n){
  if(n==1){
    return n
  }else{
    return  n*fact(n-1)
  }
}
console.log(fact(5)) */

// fibonacci series
/* function fibo(n) {//5=4+3+2
  if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

function sumFibo(n){
  let sum = 0;
  for(let i=0;i<=n;i++){
    sum+=fibo(i)
  }
  return sum
}

console.log(sumFibo(10)); */

//Power Calculation: Write a function to calculate the power of a number raised to an exponent using recursion.

/* function pow(n,exp) {
  if (exp === 0) {
    return 1;
  } else {
    return n*pow(n,exp-1)
  }
}
console.log(pow(2,7)); */

//Reverse String: Write a function to reverse a string using recursion.

/* function reversed(str) {
  if (str === "" || str.length === 1) {
    return str;
  } else {
    return str.slice(-1) + reversed(str.slice(0, -1));
  }
}
console.log(reversed("tanvir")); */

//17.Output a single-linked list
//Write a function printList(list) that outputs list items one-by-one.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
  console.log(list.value)
 if(list.next){
  printList(list.next)
 }
 
}
printList(list)

//for reverse
/* function printList(list){
  
 if(list.next){
  printList(list.next)
  
 }
 console.log(list.value)
 
}
printList(list) */