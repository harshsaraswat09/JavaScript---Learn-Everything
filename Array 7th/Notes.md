3. Arrays
    ● ✅ Teach:
        𓈒 Create, access, modify arrays
        𓈒 Array methods: push,pop,shift,unshift,splice,slice,reverse,sort
        𓈒 map,filter,reduce,find,some,every (intro)
        𓈒 Destructuring, spread operator
    

--------------------------------

1️⃣ Creating Arrays

const arr = [1, 2, 3, 4];
const mixed = [1, "hello", true, null];
const empty = [];

2️⃣ Accessing Array Elements

const nums = [10, 20, 30];

nums[0]; // 10
nums[2]; // 30
nums[nums.length - 1]; // last element


3️⃣ Modifying Arrays

const nums = [1, 2, 3];

nums[1] = 20;
nums.push(4);


4️⃣ Core Array Methods (Very Important)
🔹 push() – add at end

arr.push(5);

🔹 pop() – remove from end

arr.pop();

🔹 unshift() – add at start

arr.unshift();

🔹 shift() – remove from start

arr.shift();


5️⃣ Higher-Order Methods (🔥 Interview Gold)
🔹 map() – transform array

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);


🔹 filter() – keep some elements

const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);


6️⃣ Array Destructuring

const arr = [10, 20, 30];

const [a, b] = arr;


const [first, , third] = arr;


7️⃣ Spread Operator (...)
🔹 Copy array

const copy = [...arr];


🔹 Merge arrays

const merged = [...arr1, ...arr2];
