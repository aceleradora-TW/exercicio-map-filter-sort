
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

const mediaAlunas = alunas.map((aluna) => {
    let mediaAlunas = (aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3
    return parseFloat(mediaAlunas.toFixed(1))
});
console.log(mediaAlunas)

const buscaAlunasAprovadas = () => {
    const alunasAprovadas = alunas.filter((aluna, indice) => mediaAlunas[indice] >= 7)
    const nomesAlunasAprovadas = alunasAprovadas.map((aluna) => aluna.nome)
    return nomesAlunasAprovadas
}
console.log(buscaAlunasAprovadas(alunas))

const buscaAlunasReprovadas = () => {
    const alunasReprovadas = alunas.filter((aluna, indice) => mediaAlunas[indice] < 7)
    const nomesAlunasReprovadas = alunasReprovadas.map((aluna) => aluna.nome)
    return nomesAlunasReprovadas
}
console.log(buscaAlunasReprovadas(alunas))

const listaDeAlunas = alunas.map((aluna, indice) => {
    let aprovada = true
    if(mediaAlunas[indice] >= 7){
        aprovada = true
    } else {
        aprovada = false
    }
    const alunaObj = {
        nome: aluna.nome,
        media: mediaAlunas[indice],
        aprovada: aprovada
    }
    return alunaObj 
})
console.log(listaDeAlunas)

// console.log(listaDeAlunas(alunas))

// const listaDeAlunas = () => {
//     const listaAlunas = alunas.map((aluna) => {
//         const alunaObj = {
//             nome: aluna.nome
//         }
//         return alunaObj 
//     })
//     console.log(listaAlunas) 
// }