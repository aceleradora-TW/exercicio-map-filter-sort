
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


/*const mediaAlunas = (estudantes) => {
    let novoArrayCalcularNota = []
    estudantes.forEach((estudante) => {
        let { nome, prova } = estudante
        let calculoMedia = parseFloat((prova.p1 + prova.p2 + prova.p3) / 3).toFixed(1)
        novoArrayCalcularNota.push(`nome: ${nome}, media: ${calculoMedia},aprovado: ${calculoMedia >= 7 ? true : false}`)
        calculoMedia > maiorNota ? maiorNota = calculoMedia : menorNota = calculoMedia

    })
    return novoArrayCalcularNota
}
console.log(mediaAlunas(alunas))
const mediaTurma =(estudante)=>{
}
*/
const calcularMedia = (prova) => {
    return parseFloat(((prova.p1 + prova.p2 + prova.p3) / 3).toFixed(1))
}
// 1 
const calcularMedias = (alunas) => {
    return alunas.map(aluna => {
        return calcularMedia(aluna.prova)
    })
}
//console.log(calcularMedias(alunas))

//2
const nomeAlunasAprovadas = alunas => alunas
    .filter(aluna => calcularMedia(aluna.prova) >= 7)
    .map(aluna => aluna.nome)

//console.log(nomeAlunasAprovadas(alunas))
//3
const nomeAlunasReprovadas = alunas => alunas
    .filter(aluna => calcularMedia(aluna.prova) < 7)
    .map(aluna => aluna.nome)

console.log(nomeAlunasReprovadas(alunas))
//4


