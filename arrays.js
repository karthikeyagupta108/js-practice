//array

const myarr = [1, 2, 3, 4, "karthik"]
console.log(myarr[4])

//length
console.log(myarr.length)

// to add at the beginning 
myarr.unshift("testing")
console.log(myarr[0])

// you can use .push()

// to remove an item from an array from last
myarr.pop()
const items = myarr.pop()
console.log(items)

// to remove an item from the front of the array
myarr.shift()

console.log(myarr[0])

// join converts the array into string type 
const newarr = myarr.join()
console.log(newarr)

// slice and splice

// slice
const arr = [0, 1, 2, 3, 4]
console.log(arr.slice(1, 3))
// you get 1 to 2 indices both included
//array is unchanged
console.log(arr)


//splice
// splice is surgery on the array
// it is used to modify the array
const removed = arr.splice(0, 3)
//splice(startindex,no of elements to be removed)
console.log(removed)
console.log(arr)

const enarr = [1, 2, 5, 6]
enarr.splice(2, 0, 3, 4)
console.log(enarr)
// (2,0,3,4). deleted 0 elements from index 2 and added 3 and 4

console.log("-----------------------------")

const marvel = ["thor", "ironman", "captain"]
const dc = ["batman", "flash", "superman"]

// //if you use push
// marvel.push(dc)
// console.log(marvel)

console.log(marvel.concat(dc))
console.log(marvel)
// marvel array is not changed

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
console.log(Array.isArray("karthik"))
console.log(Array.from("karthik"))
console.log(Array.from({name:"hitesh"}))//interesting





