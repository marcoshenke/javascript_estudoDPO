const cartas = [
{ valor: 7, naipe: "espadas" },
{ valor: 10, naipe: "copas" },
{ valor: 4, naipe: "ouros" },
{ valor: 2, naipe: "paus" },
{ valor: 5, naipe: "copas" },
{ valor: 1, naipe: "ouros" },
{ valor: 13, naipe: "paus" },
{ valor: 8, naipe: "espadas" },
{ valor: 6, naipe: "copas" },
{ valor: 11, naipe: "espadas" },
{ valor: 12, naipe: "ouros" },
{ valor: 9, naipe: "paus" },
{ valor: 3, naipe: "copas" },
];

let firstValueCard = 0
let biggestCard = 0

for (var i = 0; i <= cartas.length - 1;  i++) {
   
    if (cartas[i].valor >= firstValueCard ) {
        firstValueCard = cartas[i].valor
        biggestCard = cartas[i]
    }   
}

console.log(biggestCard)
//const maiorCarta = cartas.filter()
