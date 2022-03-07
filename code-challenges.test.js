// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe('Fibonacci', () => {
    it(' Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.', () => {
        // Example input: 6
        // Expected output: [1, 1, 2, 3, 5, 8]

        // Example input: 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(Fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(Fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})


// b) Create the function that makes the test pass.


function Fibonacci(n) {
    // declare the array starting with the first 2 values of the fibonacci sequence
    // starting at array index 1, and push current index 
    // Add the previous index to the array

    for (var fibonacciV = [0, 1], i = 1; i < n; i++)
        fibonacciV.push(fibonacciV[i] + fibonacciV[i - 1])

    return fibonacciV
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe('onlyNums', () => {
    it('Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.', () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]

        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]

        expect(onlyNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyNums(fullArr2)).toEqual([-823, 7, 23])
    })
})


// b) Create the function that makes the test pass.

// sort will sort the data but it wont completely work on numbers without the a-b addition (which I have to lookup)
// create a local variable that filters through the array assessing each value
// the return needs to be only numbers and (&&) only those numbers that have a remainder after being devided by two

const onlyNums = (array) => {
    let dataType = array.sort(function (a, b) { return a - b }).filter(value => {
        return typeof (value) === "number" && (value) % 2 !== 0
    })
    return dataType
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('addingArray', () => {
    it('Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.', () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]

        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]

        const numbersToAdd3 = []
        // Expected output: []

        expect(addingArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addingArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addingArray(numbersToAdd3)).toEqual([])
    })
})



// b) Create the function that makes the test pass.
// createing a for loop that taking in an array and returns a new arrway with the vaule of each index location added of the old array added to the previous index of the new array this should result in the numbers of the new array effetively accumulating 
// need to make sure that if there are no values no values are returned
// I can use .length to ensure that the correct index values are getting added together and .push to return the correct new values to the new array

function addingArray(array) {
    let empty = []
    for (let num of array) {
        if (!empty.length) empty.push(Number(num))
        else empty.push(empty[empty.length - 1] + Number(num))
    }
    return empty
}
