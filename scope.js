// scope concept

//     {} is the scope

// this also comes with object. dont confuse. 
// in general, we see about functions, if else 

if (true)
{
    let a = 10
    const b = 20
    var c=30
}

// whatever you write outside {} is global scope.
// if you write inside {} is not available outside


// When JS encounters a inside the block, it stops searching as soon as it finds the local declaration.
// That’s called the Scope Chain Resolution mechanism.


let a = 300

if (true)
{
    let a = 30
    console.log(a)
}
console.log(a)
  
// 30
// 300

// Because var is not block-scoped, only function-scoped —
// so both statements refer to the same a.



var k = 300;

if (true) {
    var k = 30;
    console.log(a);
}

console.log(a);

// 30
// 30


// inner loops and functions can take variables from their parents for say.

// +++++++++++++ interesting +++++++++++++++++++ 

// hoisting is a concept where function is taken to the top. 
// if the function is written as an expression, it is not hoisted 
// and, call or maipulating the variable 
// before function declaration in the code, gives an error



// sayHi(); // ✅ Works!

// function sayHi() {
//   console.log("Hello!");
// }


// sayHello(); // ❌ TypeError: sayHello is not a function

// var sayHello = function () {
//   console.log("Hi!");
// };

//  we cant use this in functions