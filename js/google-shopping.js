// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
// console.log(data.items)

// Next, it's recommended to just look at the first item
// console.log(data.items[0])

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?
// Answer to problem 1
// let count = 0
// data.items.forEach((kind) => {
//    kind === "shopping#products"
//    count++
// })
// console.log(count)
// console.log('\nProblem 1:\n')

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.
// Answer for problem 2
// for (let i = 0; i < data.items.length; i++) {
//     if (data.items[i].product.inventories[0].availability === "backorder") {
//     console.log(data.items[i].product.title)
//     }
// }

// console.log('\nProblem 2:\n')

// 3.) Print the `title` all items with more than one image link.
// Answer to problem 3
// for (let i = 0; i < data.items.length; i++) {
//     if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title)
//     }
// }
// console.log('\nProblem 3:\n')

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!
// Answer for problem 4
// for(let i = 0; i < data.items.length; i++) {
//     if (data.items[i].product.brand == 'Canon')
//     console.log(data.items[i].product.title)
// }
// console.log('\nProblem 4:\n')

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?
// for (let i = 0; i < data.items.length; i++) {
//     if (data.items[i].product.author.name.includes("eBay") && data.items[i].product.brand == "Canon") {
//     console.log(data.items[i])
//     }
// }
// console.log('\nProblem 5:\n')

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.
for (let i = 0; i < data.items.length; i++) {
    console.log(`${data.items[i].product.brand}` + ' ' + `${data.items[i].product.inventories[0].price}` + ' ' + `${data.items[i].product.images[0].link}`)
}

console.log('\nProblem 6:\n')
