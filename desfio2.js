let frase = 'Hello Wendel!';

let fraseNoSpace = frase.replace(/\s+/g, '')

let fraseMin = fraseNoSpace.toLocaleLowerCase()

let separeteLetters = fraseMin.split('')

const objLetters = {}   

separeteLetters.forEach((char, i) => {
    
    if (!objLetters.hasOwnProperty(char)) {
        objLetters[char] = 1
    } else {
        objLetters[char]++
    }
});

let arrayValues = Object.values(objLetters)

console.log(arrayValues)

let maxValue = 0

arrayValues.forEach(value => {
    if (value >= maxValue) {
        maxValue = value
    }
})

console.log(maxValue)



