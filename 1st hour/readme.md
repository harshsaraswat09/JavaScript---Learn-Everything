keywords - var let const

JS mein aise words jinse kuch ho sakta hai vo saare words js k keywords hote hai

var a;
var a = 12;

let a;
let a = 12;

const a = 12;


// declarations and initializatins

var a; // declare karna
var a = 12; // declare and initialize

var a = 12;
// window mein add hota hai
// function scoped hota hai
// aap firse declare kar sakte ho same name se and error nahi aayega  


// Temporal Dead Zone  (interesting topic)  - utna area jitne mein js ko pata to hai ki variable exist karta hai par vo aapko value nahi de sakta

console.log(a);
let a = 12;

Hoisting impact per type

// hoisting -> ek variable ko jab js mein banate hai toh vo variable do hisso mein toot jaata hai and uska declare part upar chala jata hai and uska initialization part neeche reh jata hai

var -> hoist -> undefined
let -> hoist 
const -> hoist 
