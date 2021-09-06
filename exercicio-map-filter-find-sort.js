
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

// Para esse exercicio voces não poderão usar o `for`, `while` ou `do while`

// Fazer uma função que retorne um array de todas as médias
const formatNumber = number => parseFloat(number.toFixed(1))
const media = ({ p1, p2, p3 }) => formatNumber((p1 + p2 + p3) / 3)
const aprovada = prova => media(prova) >= 7

const getMedias = alunas => alunas.map(aluna => media(aluna.prova))
// Fazer uma função que retorne um array de nomes das aprovadas
const getAprovadas = alunas => alunas.filter(aluna => aprovada(aluna.prova))
// Fazer uma função que retorne um array de nome das reprovadas
const getReprovadas = alunas => alunas.filter(aluna => !aprovada(aluna.prova))
/* Fazer uma função que retorne um array de objetos:
     [ { nome: String , media: Number, aprovada: Boolean } ] 
     
     Exemplo: 
        [
            { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
            { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
            { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
        ]

        Saída:
        [
            { nome: "Ashley", media: 7.1, aprovada: true },
            { nome: "Sabrina", media: 7.9, aprovada: true },
            { nome: "Samantha", media: 5.0, aprovada: false }
        ]
*/
const getAlunas = alunas => alunas.map(aluna => ({
    nome: aluna.nome,
    media: media(aluna.prova),
    aprovada: aprovada(aluna.prova)
}))

const ordenar = (alunas) => getAlunas(alunas).sort((a, b) => a.media - b.media)

// Fazer uma função que retorne o nome da aluna com maior nota
const getMaiorNota = alunas => ordenar(alunas).pop().nome

// Fazer uma função que retorne o nome da aluna com menor nota
const getMenorNota = alunas => ordenar(alunas).shift().nome

// Fazer uma função que retorne a media de toda a turma
const getMediaTurma = alunas => {
    const somatorioMedias = getMedias(alunas).reduce((a, b) => a + b)
    const mediaGeral = somatorioMedias / alunas.length
    return formatNumber(mediaGeral)
}

const exercicio = (alunas) => {
    console.log("// Fazer uma função que retorne um array de todas as médias")
    console.log(getMedias(alunas))
    console.log("// Fazer uma função que retorne um array de nomes das aprovadas")
    console.log(getAprovadas(alunas))
    console.log("// Fazer uma função que retorne um array de nome das reprovadas")
    console.log(getReprovadas(alunas))
    console.log("/* Fazer uma função que retorne um array de objetos:")
    console.log("\t[ { nome: String , media: Number, aprovada: Boolean } ] */")
    console.log(getAlunas(alunas))
    console.log("// Fazer uma função que retorne o nome da aluna com maior nota")
    console.log(getMaiorNota(alunas))
    console.log("// Fazer uma função que retorne o nome da aluna com menor nota")
    console.log(getMenorNota(alunas))
    console.log("// Fazer uma função que retorne a media de toda a turma")
    console.log(getMediaTurma(alunas))

}

exercicio(alunas)

// Formula da média:
// (a + b + c) / 3

// observações: 
// 1) as notas devem ter apenas 1 numero após a virgula
// 2) para estar aprovada a aluna tem que ter media igual ou acima de 7
