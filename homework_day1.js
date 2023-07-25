// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: Number

let b = 'Thieves';
// A: String

let c = [true, false, false];
// A: Boolean[]

let d = {age: number};
// A: age = any

let e = [3]
// A: Number[]

let f;
// A: Any

let g = []
// A: Any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: You can't declare the type here because this is a JS file. This would be valid in a .ts file. 
// A2: releaseYear is not being passed a value. Because it was not made optional, the compiler expects a value to be passed 

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Prices[0] is equal to the NUMBER 100 not the STRING '$100'

function myFunc(a: number, b: number): number {}
// A: No return line.