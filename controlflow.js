// falsy values :

/*
    false,
    0,
    -0,
    NaN,
    null,
    undefined,
    BigInt,
    "",
    0n
    */

// truthy values
    /*
    "0",
    'false',
    " ",
    [],
    {},
    function(){}
    
    */

// Nullish Coalescing Operator(??) null undefined
    
let val1

//val1 = 5 ?? 10
val1 =null ?? 10

console.log(val1)
// answer is 10

//if Not, it is 1st value

// Ternary Operator also can be used in javascript instead of if else 
// short hand notation

// Maps 

const map = new Map()
map.set('india', 'delhi')

for (const [mykey, newval] of map)
{
    console.log("country is ",mykey, "capital is ", newval)
}

const myarr = [1, 5, 6, 3]

for (const ert of myarr)
{
console.log(ert)
}