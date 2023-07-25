/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */


console.log('Hi')
// Our first TS Code
let anyType;
let myName: string = 'Nick';
let age: number;
let isTheGoat: boolean;
let myObject: object;
let nullObj: null;

age = 9001


// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value
let myClassName: string = "padawans 122";


// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
let nick: any = 'Hello world!'
nick = 1000
nick = {
    'test': 'testing'
}



// ----- Arrays: Dynamic, you can pass any data type
let names: string[] = ['nick', 'renat', 'edward', 'shoha']



// Another huge benefit: Code completion; gives suggestions on methods you might be using
// names. will show all methods in dropdown because it knows it's an array




// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
const personTuple: [string, number] = ['Nick', 9000]
// Code Completion
// WARNING, tuples technically are still an Array obj
// Goes against TS principles however, and should not be done
personTuple.push('sdoidaiu')


// ----- Enums: Special "Class" that represents a group of constants.
const small = 'SM'
const med = 'MD'
const large = 'LG'

enum Size {
    Small = 'SM', 
    Med = 'MD', 
    Large='LG'}
// if you gave no declarations ("SM"), then the output would default to 0. But if 1 const has a declaration, all other const will have to have a similar type
let mySize = Size.Small
mySize = Size.Med
console.log(mySize)

// PascalCase "numeric"
//camelCase vs PascalCase

// "string"



// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
function nameLowerCase(firstName:string, lastName:string):string {
    const fullName = firstName + ' ' + lastName
    return fullName.toLowerCase()
};

function myFunc(a: number, b: number):number {
    return a
}

const output = nameLowerCase('NICK', 'Dean')
console.log(output)

//Arow functions
const nameUpperCase = (firstName: string, lastName: string):string => {
    const fullName = firstName + ' ' + lastName
    return fullName.toUpperCase()
};

const output2 = nameUpperCase('NICK', 'Dean')


// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/
const person: {
    readonly id: number,
    myName: string,
    age: number,
    hobbies: string[],
    location?: string 
    languages?: {
        verbal?: string[],
        coding?: string[]
    }
} = {
    id: 1,
    myName: 'Nick',
    age: 9001,
    hobbies: ['kayaking', 'video games', 'anime'],
}

person.location = 'Atlanta'
// person.id = 100
person.languages = {
    coding: ['Python', 'Javascript'],
    verbal: ['English', 'Spanish']
}
console.log(person.hobbies[1])
console.log(person.location)
console.log(person.id)

//Type Aliasing:
// Kind of like a class; something you're inherting from
type Person = {
    readonly id: number,
    myName: string,
    age: number,
    hobbies: string[],
    location?: string 
    languages?: {
        verbal?: string[],
        coding?: string[]
    },
    yellFavoriteQuote: (quote:string)=>string
}

// const person2: Person = {
//     id: 2,
//     myName: 'Niko',
//     age: 9001,
//     hobbies:[],
// }
const person3: Person = {
    id: 3,
    myName: 'Nickero',
    age: 9001,
    hobbies:['reading'],
    location: 'New York',
    yellFavoriteQuote: (quote)=>{
        return quote.toUpperCase()+ "!!!"
    }
}

const quote = person3.yellFavoriteQuote("Just do it")
console.log(quote)

//UNION Operator
//Multiple types
let myAge: number | string | boolean;
myAge = 1;
myAge = '1';

// LIteral types
let myNum: 100 | 500 | 1000 | 'testing'
myNum = 'testing';