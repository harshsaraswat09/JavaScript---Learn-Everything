3. Functions
    ● ✅ Teach:
        𓈒 Function declarations, expressions, and arrow functions
        𓈒 Parameters vs Arguments
        𓈒 Default, rest, and spread parameters
        𓈒 Return Values and early returns
        𓈒 First class functions (assign to variables, pass as arguments, return from other functions) 
        𓈒 Higher-order functions
        𓈒 Pure vs impure functions
        𓈒 Closures and lexical scoping
        𓈒 IIFE (Immediately Invoked Function Expressions)
        𓈒 Hoisting differences between declaration and expression

    ● ⚠️ Confusion:
        𓈒 Arrow vs regular functions this context 
        𓈒 Function hoisting and TDZ
        𓈒 Scope chains and closure traps
    ● 🎯Practice:
        𓈒 Write a BMI calculator
        𓈒 create a reusable discount calculator
        𓈒 build a counter using closure 


-------------------------------

1️⃣ Function Basics (Types)

function add(){
    return a + b
}

Hoisted ✅ (can be called before definition)

2. Function Expression

let add = function(a, b){
    return a + b
}

Not hoisted ❌ (TDZ applies)

3. Arrow Function

const add = () => {
    return add
}


2️⃣ Parameters vs Arguments

function greet(name) { // parameter
  console.log(name);
}

greet("Harsh"); // argument


3️⃣ Default, Rest & Spread

Default Parameters->

function greet(name = "Guest") {
  console.log(name);
}

Rest Parameters (collect values)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


Spread (expand values) ->
const nums = [1, 2, 3];
sum(...nums);


4️⃣ Return Values & Early Return

function checkAge(age) {
  if (age < 18) return "Minor"; // early return
  return "Adult";
}


5️⃣ First-Class Functions (VERY IMPORTANT)

Functions in JS are values.

✔ Assign to variable
✔ Pass as argument
✔ Return from function

// first class functions ya hote hai -> 

functions ko values ki tarah treat kar sakte hai 


let abcd = function(){

}

function abcd(val){
    val()
}

abcd(function(){
    console.log("hehe")
})


6️⃣ Higher-Order Functions

A function that accepts or returns another function

function abcd(val){

}

abcd(function(){

})

7️⃣ Pure vs Impure Functions
Pure Function ✅

Same input → same output

No side effects

function add(a, b) {
  return a + b;
}

let count = 0;
function increment() {
  count++;
}


## Closure
When a function remembers variables even after outer function is gone

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
