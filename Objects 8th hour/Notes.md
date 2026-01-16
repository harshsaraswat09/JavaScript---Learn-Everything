📦 8. Objects

    ● ✅ Teach:
        𓈒 key-value structure
        𓈒 Dot vs bracket notation
        𓈒 nesting and deep access
        𓈒 looping : for-in, Object.keys, Object.entries
        𓈒 copying objects: spread, Object.assign, deep clone
    ● ⚠️ Common Confusion:
        𓈒  Reference copy vs deep clone

    ● 🧠 Mindset: 
        𓈒 Objects = structured,readable state 

    ● 🎯Practice:
        𓈒 Student manager app
        𓈒 Address book with optional chaining
        𓈒 object flattener 

--------------------------------

📦 8. JavaScript Objects
🧠 What is an Object?

An object stores data in key–value pairs.

const user = {
  name: "Harsh",
  age: 22,
  role: "Developer"
};

🔑 Key–Value Structure

const student = {
  id: 101,
  name: "Amit",
  marks: 85,
  isActive: true
};

Think of objects as real-world entities with properties.

🔹 Dot vs Bracket Notation
Dot Notation (most common)

student.name;      // "Amit"
student.marks;    // 85

-> Bracket Notation (powerful)

student["name"];  // "Amit"

const key = "marks";
student[key];     // 85


❗ When bracket is REQUIRED

const obj = {
  "full name": "Harsh Saraswat"
};

obj["full name"]; // ✅
obj.full name;    // ❌ error

🪜 Nesting & Deep Access

Objects can contain objects inside objects.

const user = {
  name: "Harsh",
  address: {
    city: "Bhopal",
    pincode: 462001,
    location: {
      lat: 23.25,
      lng: 77.41
    }
  }
};


-> Deep Access
user.address.city;                 // "Bhopal"
user.address.location.lat;         // 23.25

