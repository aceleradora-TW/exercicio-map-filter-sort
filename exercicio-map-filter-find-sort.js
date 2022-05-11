
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
    //calcula a media das provas
    const media = (prova.p1 + prova.p2 + prova.p3) / 3
    return parseFloat(media.toFixed(1))
}
const calculaMediaAlunas = (listaDeAlunas) => {
    //percorrer a listaDeAlunas e calcular a media para cada aluna
    return listaDeAlunas.map(aluna => calcularMedia(aluna.prova))
}
console.log(calculaMediaAlunas(alunas))

const buscaAlunasAprovadas = (listaDeAlunas) => {
    const alunasAprovadas = listaDeAlunas.filter(aluna => calcularMedia(aluna.prova) >= 7)
    return alunasAprovadas.map(aluna => aluna.nome)
}
console.log(buscaAlunasAprovadas(alunas))

const buscaAlunasReprovadas = (listaDeAlunas) => {
    const alunasReprovadas = listaDeAlunas.filter(aluna => calcularMedia(aluna.prova) < 7)
    return alunasReprovadas.map(aluna => aluna.nome)
}
console.log(buscaAlunasReprovadas(alunas))

const listaDeAlunasObj = (listaDeAlunas) => {
    return listaDeAlunas.map(aluna => alunaObj = {
        nome: aluna.nome,
        media: calcularMedia(aluna.prova),
        aprovada: calcularMedia(aluna.prova) >= 7 ? true : false
    })
}
console.log(listaDeAlunasObj(alunas))

const calcularMaiorNota = (notas) => {
    return notas.reduce(function(mediaA, mediaB) { return Math.max(mediaA, mediaB) })
}

const buscaAlunaMaiorNota = (listaDeAlunas) => {
    const mediaAlunas = calculaMediaAlunas(listaDeAlunas)
    const alunaMaiorNota = listaDeAlunas.filter(aluna => calcularMedia(aluna.prova) === calcularMaiorNota(mediaAlunas))
    return alunaMaiorNota.map(aluna => aluna.nome)
}
console.log(buscaAlunaMaiorNota(alunas))

const calcularMenorNota = (notas) => {
    return notas.reduce(function(mediaA, mediaB) { return Math.min(mediaA, mediaB) })
}

const buscaAlunaMenorNota = (listaDeAlunas) => {
    const mediaAlunas = calculaMediaAlunas(listaDeAlunas)
    const alunaMenorNota = listaDeAlunas.filter(aluna => calcularMedia(aluna.prova) === calcularMenorNota(mediaAlunas))
    return alunaMenorNota.map(aluna => aluna.nome)
}
console.log(buscaAlunaMenorNota(alunas))

const calcularSomaMedias = (notas) => {
    return notas.reduce(function(mediaA, mediaB){ return mediaA + mediaB })
}

const calcularMediaDaTurma = (listaDeAlunas) => {
    //receber um array de alunas
    //calcular a media de cada uma das alunas
    //calcular e media da turma
    const mediaAlunas = calculaMediaAlunas(listaDeAlunas)
    const somaDasMedias = calcularSomaMedias(mediaAlunas)
    const mediaDaTurma = somaDasMedias / mediaAlunas.length
    return parseFloat(mediaDaTurma.toFixed(1))
}
console.log(calcularMediaDaTurma(alunas))