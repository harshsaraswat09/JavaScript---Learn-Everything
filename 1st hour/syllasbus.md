📦 1. Variables & Declarations

    ● ✅ Teach:
        𓈒 var, let, const
        𓈒 Scope (global, block, functional)
        𓈒 Reassignment, redeclaration
        𓈒 Temporal Dead Zone
        𓈒 Hoisting impact per type
          
    ● ⚠️ Common Confusion:
        𓈒  why var leaks outside block but let doesn't
        𓈒 why const allowes changing object properties

    ● 🧠 Mindset: 
        𓈒 Think of variables as containers scoped by prupose 

    ● 🎯Usage:
        𓈒 Base of all JS, mandatory in functions, loops, API logic

🧠 2. Data types & Type system 
    ● ✅ Teach:
        - Primitive types (string, number, boolean, null, symbol, bigint)
        - Reference types (array, objects, functions)
        - Dynamic Typing
        - typeof quirks (e.g., typeof null === 'object')
        - Type Coercion (== vs ===)
        - Truthy vs falsy values
    
    ● ⚠️ Common Confusion:
        - why NaN is a number 
        - undefined vs null
        - "5" + 1 vs "5" - 1

    ● 🧠 Mindset: 
        - Think about types like expected input/output

    ● 🎯Usage:
        - API validation, form handling, state checks