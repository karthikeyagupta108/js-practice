//FUNCTIONS IN JAVASCRIPT

function myname()
{
    console.log("k")
    console.log("a")
    console.log("r")
    console.log("t")
    console.log("h")
    console.log("i")
    console.log("k")   
}
myname()
// the above thing is function definition


// myname -- this is reference to the function. 
// myname() -- this is execution



// here num1 and num2 are parameters
function addtwonumbers(num2, num1) {
    let result = num1+num2
    console.log(num1 + num2)
    return result
}

addtwonumbers(2, 4)
// when you call the function and put some input here it is 2,4.
//  they are called arguments

const result = addtwonumbers(4, 3456)

console.log(result);


// if argument is not passed into the function, you get undefined
// undefiend is false value and you can use !
// "" is false

// no of arguments passed doesnt match no of parameters, it will take the 
// arguments from start which can be given to function



// function declaration using arrow
//. () => {}

// this can be used inside arrow function
    
// if using arrow type function, if you are returning an object, wrap it in ()

// IIFE immediately invoked function expressions


