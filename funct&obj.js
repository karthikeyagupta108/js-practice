
// 🧩 Step 1: What is an Object again?
// An object in JavaScript is just a collection of key–value pairs.
// Each key is called a property, and its value can be anything — number, string, array, another object, or even a function.
// So when a function is stored as a property → we call it a method.


// ⚙️ Step 2: Adding a Function to an Object
// ✅ Case 1 — Direct definition inside object literal
// const user = {
//   name: "Karthikeya",
//   age: 20,
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// user.greet(); // Hello, Karthikeya
// Breakdown:
// greet is a property.
// Its value is a function.
// So greet becomes a method of the user object.
// ✅ Case 2 — Add function after object creation
// const user = {
//   name: "Karthikeya"
// };

// // Add function dynamically
// user.sayHi = function() {
//   console.log("Hi " + this.name);
// };

// user.sayHi(); // Hi Karthikeya
// You added a new property sayHi whose value is a function.
// 🧠 In JS, you can add, modify, or delete object properties anytime.
// Objects are not rigid like C structs — they are mutable and dynamic.
// ✅ Case 3 — Arrow function inside object (⚠️ subtle difference)
// const user = {
//   name: "Karthikeya",
//   greet: () => {
//     console.log("Hello, " + this.name);
//   }
// };

// user.greet(); // Hello, undefined ❌
// Why undefined?
// Because arrow functions don’t bind their own this.
// They use the this value from the outer scope (not the object).
// ✅ Case 4 — Using shorthand syntax
// const user = {
//   name: "Karthikeya",
//   greet() {
//     console.log("Hello, " + this.name);
//   }
// };

// user.greet(); // Hello, Karthikeya
// This is just a shorter version of greet: function() { ... }.
// ✅ Case 5 — Assign an external function to object
// function greetUser() {
//   console.log("Hello, " + this.name);
// }

// const user = { name: "Karthikeya" };
// user.greet = greetUser;

// user.greet(); // Hello, Karthikeya
// Here, the same function greetUser can be reused across multiple objects.
// When called as user.greet(), the this inside refers to that particular object.
// 🧠 Step 3: The role of this
// this = the object that owns the function at call time.
// So:
// user.greet()  → this = user
// admin.greet() → this = admin


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 4: "d", 3: "c" }

// const obj3 ={ obj1,obj2}
// you get 2 objects inside one object
//console.log(obj3)

// if you want to combine both objects, 
const obj3 = Object.assign({}, obj1, obj2)

//or use this
const obj4= {...obj1,...obj2} 

console.log(obj3)
console.log(obj4)


// destructuring object

const course = {
    coureinstructor: "karthik",
    subject: "javascript",
    age: 18

}
const { coureinstructor } = course
console.log(coureinstructor);



// API Concept
// json format both key and values are strings
// can be in object type or array type
// used to fetch information 
