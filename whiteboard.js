// # Given a string s, reverse only all the vowels in the string and return it.

// # The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// # Ex.1
// # Input: s = "hello"
// # Output: "holle"

// # Ex.2
// # Input: s = "codingtemple"
// # Output: "cedengtimplo"

// # 1. Define Function
// # 2. For loop, if vowel store in list
// # 3. Reverse list
// # 4. Another for loop through the string, if vowel then pop off the first value in list and replace

function vowelSwap(string) {
    let vowelslist = [];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let v of string) {
        if (vowels.includes(v))
            vowelslist.push(v);
    }
    console.log(vowelslist.reverse())
    let newstring = []
    for (let aeiou of string) {
        if (vowels.includes(aeiou)) {
            let aeiou = vowelslist.reverse().shift()
            newstring.push(aeiou);
        }
        else {
            newstring.push(aeiou);
        }
    }
    console.log(newstring.join(""))
}

string = "hello"
console.log(vowelSwap(string))