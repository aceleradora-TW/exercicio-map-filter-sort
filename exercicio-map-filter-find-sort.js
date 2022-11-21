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

const calcularMedia = (prova) => {
    return parseFloat(((prova.p1 + prova.p2 + prova.p3) / 3).toFixed(1))
}

// 1 
let acomulador = 0
const calcularMedias = (alunas) => {
    return alunas.map(aluna => {
        acomulador++
        return calcularMedia(aluna.prova)
    })
}

// console.log(calcularMedias(alunas))

//2
const nomeAlunasAprovadas = alunas => alunas
    .filter(aluna => calcularMedia(aluna.prova) >= 7)
    .map(aluna => aluna.nome)

//console.log(nomeAlunasAprovadas(alunas))

//3
const nomeAlunasReprovadas = alunas => alunas
    .filter(aluna => calcularMedia(aluna.prova) < 7)
    .map(aluna => aluna.nome)

// console.log(nomeAlunasReprovadas(alunas))

//4   
const arrayDeObjetos = (aluna) => {
    let alunasObj = {}
    return aluna.map(aluna => alunasObj = {
        nome: aluna.nome,
        media: calcularMedia(aluna.prova),
        aprovado: calcularMedia(aluna.prova) >= 7 ? true : false
    })
}

// console.log(arrayDeObjetos(alunas))

//5 
const alunasOrdem = (alunas) => {
        return arrayDeObjetos(alunas).sort((a, b) => {
            return a.media - b.media
        })
}
const alunaMaiorNotas = (alunas) => {
    return alunasOrdem(alunas).reverse().shift().nome
}
// console.log(alunaMaiorNotas(alunas)) 



//8
const mediaTurma = (alunas) => {
    let soma = calcularMedias(alunas).reduce((total, contador) => total + contador)
    return (soma / acomulador).toFixed(2)
}

console.log(mediaTurma(alunas))