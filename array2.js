const alunas = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
]

// formula para calculo da media
const media = ({p1, p2, p3}) => (p1 + p2 + p3) / 3

// verificação da aluna, se a media foir maior ou igual a 7, retorna true, se não, false
const aprovada = prova => media(prova) >= 7 

// verificação da aluna, se a media for menor ou igual a 7, retorna true, se não, false
const reprovada = prova => media(prova) < 7 

// com base na verificação da função aprovada, retorna o nome da aluna com nota maior que 7
const aprovadas = alunas => alunas.filter(aluna => aprovada(aluna.prova)).map(aluna => aluna.nome)
const reprovadas = alunas => alunas.filter(aluna => reprovada(aluna.prova)).map(aluna => aluna.nome)

const objetoAluna = alunas => alunas.map(aluna => ({
    nome: aluna.nome,
    media: media(aluna.prova),
    aprovada: aprovada(aluna.prova)
}))


const ordenar = alunas => objetoAluna(alunas).sort((a, b) => a.media - b.media)

// para pegar a aluna com a maior nota,sera necessario o método .pop em .nome

// para pegar a aluna com a menor nota,sera necessario o método .shift em .nome

console.log(aprovadas(alunas))
console.log('    ')
console.log(reprovadas(alunas))
console.log('    ')
console.log(objetoAluna(alunas))
console.log('    ')
console.log(ordenar(alunas))





/*for (const value of alunas) {
    if (value === separaNome) {
        return value
    }
}
*/

/*function retornaAprovada(value) {
    if (geral >= value)
        return "as aprovadas"
}
//var resultado = alunas.filter(retornaAprovada(7))
//   console.log(resultado)
*/
///geral.sort(function () {
//for (let value of separaNome) {

//console.log(value)
//}

/*  // pegar primeiro da lista
var inicio = 0
// pegar ultimo da lista
var final = separaNome.length - 1


  for (i = inicio; i <= final; i++) {
      console.log(i)
  }*/


/*
..............................
/*for (let entry of separacao2) {
        return entry
    }
const usersList = [
    {name: 'João', credit: 600},
    {name: 'Maria', credit: 900},
    {name: 'Carlos', credit: 300},
    {name: 'Vanessa', credit: 200},
];

const newUsersList = usersList.filter((user, index, array) => user.credit > 500);
/* Resultado:
[
    {name: 'João', credit: 600},
    {name: 'Maria', credit: 900}
]

...........................

 function filtro(value) {
        if (soma1 >= 6) {
            // return separaNome
        }
        let nomesFiltrados = separaNome.filter(filtro)

    }

soma1 || soma2 || soma3 || soma4 || soma5 || soma6 || soma7 || soma8 || soma9 || soma10 >= 6

if (soma2 >= 6) {
       return "Sabrina"
   }
   if (soma3 >= 6) {
       return "Samantha"
   }
   if (soma4 >= 6) {
       return "Andreia"
   }
   if (soma5 >= 6) {
       return "Raquel"
   }
   if (soma6 >= 6) {
       return "Amanda"
   }
   if (soma7 >= 6) {
       return "Pietra"
   }
   if (soma8 >= 6) {
       return "Jaqueline"
   }
   if (soma9 >= 6) {
       return "Alessandra"
   }
   if (soma10 >= 6) {
       return "Jane Kelly"
   }*/