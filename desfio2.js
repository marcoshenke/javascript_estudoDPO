let frase = 'Congratulations Wendel, Congratulations Mantelli, Brazzzzzzil!';

let fraseNoSpace = frase.replace(/\s+/g, '') // deleta os espaços

let fraseMin = fraseNoSpace.toLocaleLowerCase() // transforma em letra minuscula

let separeteLetters = fraseMin.split('') // separa cada letra da frase

const objLetters = {}   

separeteLetters.forEach((char, i) => {
    //vai adicionar cada letra para dentro do objeto objLetters, e se repetir adiciona mais um no valor dela
    if (!objLetters.hasOwnProperty(char)) {
        objLetters[char] = 1
    } else {
        objLetters[char]++
    }
});
let arrayValues = Object.values(objLetters)

let maxValue = 0

arrayValues.forEach(value => {
    if (value >= maxValue) {
        maxValue = value
    }
})

//iterando sobre o objeto e encontrando as letras que mais apareceram
for (var value in objLetters) {
    if (objLetters[value] === maxValue) {
        console.log(`a letra ${value} aparece ${maxValue} vezes`)
        console.log(value + ' = ' + objLetters[value])
    }
}





