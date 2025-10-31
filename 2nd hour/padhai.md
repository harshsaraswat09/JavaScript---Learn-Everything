Data types & Type system 

there are 2 types of data types:-
1. Primitive 
2. Reference

data types 
data ka types

// primitves -> aisi saari values jinko copy karne par tumhe ek real copy mil jaye 


// string, number, boolean, null, symbol, bigint
'' - single quotes
"" - double quotes
`` - back ticks 

ye teen tareeke hai string banane k

12 - number
12.3 - number

boolean -> true false 

Null -> null ka matlab hai aapne jaan bujh kar koi value nahi di

Undefined -> aapne ek variable banaya aur use value nahi di toh jo usey value by default mili vo hai undefined

// symbol -> unique immutable value (change nahi hone wala value)



// Reference -> inko copy karne par real copy nahi milegi but aapko refernce milega parent ka
// array, objects, functions

let a = [1,2,3];
let b = a;
b.pop();

-------------------------------------
DYNAMIC TYPING :-

js mein static typing nahi hai yaha par hai dynamic typing jiska matlab hai aap data ko change karr sakte ho kyuki yaha par dynamic data types hai 

-------------------------------------
typeof quirks (e.g., typeof null === 'object')

typeof -> ye ek keyword hai aap is se koi bhi value check kar sakte ho

-------------------------------------
Type Coercion (== vs ===)

:- concept jismein ek type automatically convert hojayega

Truthy vs falsy values:- 

0 false "" undefined NaN document.all -> ye saari false mein convert hogi 

baaki ALL -> truthy 

-------------------------------------

<!-- ques. why NaN is a number? -->

typeof NaN === 'number' // true
:- NaN js mein ek " failed number operation " hai kehne ka matlab hai aisa mathematical operation jo ho nahi sakta 

ki aap 2 ko HARSH se multiply kardo, POSSIBLY NOT

-------------------------------------
<!-- ques. undefined vs null -->

let x;
console.log(x);     // undefined
let y = null;
console.log(y);     // null