
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

/*1-Fazer uma função que retorne um array de todas as médias*/
function mediaAlunas(calculoDaMedia) {
    const media = (calculoDaMedia.p1 + calculoDaMedia.p2 + calculoDaMedia.p3) / 3
    return parseFloat(media.toFixed(1))
}

let mediaDaTurma = []
function todasAsMedias(calculoDasMedias) {
    calculoDasMedias.forEach((element) => {
        mediaDaTurma.push(mediaAlunas(element.prova))
    });
    return mediaDaTurma
}
//console.log(todasAsMedias(alunas))


/*2-Fazer uma função que retorne um array de nomes das aprovadas*/
function nomeDasAprovadas(alunasAprovadas) {
    const calculoAprovacao = alunasAprovadas.filter(valor => {
        let calculo = (valor.prova.p1 + valor.prova.p2 + valor.prova.p3) / 3
        return calculo >= 7 ? valor.nome : ""
    })
    return calculoAprovacao.map(media => media.nome)
}
console.log(nomeDasAprovadas(alunas))


/*3-Fazer uma função que retorne um array de nome das reprovadas*/
function nomeDasReprovadas(alunasReprovadas) {
    const calculoReprovacao = alunasReprovadas.filter(valor => {
        let calculo = (valor.prova.p1 + valor.prova.p2 + valor.prova.p3) / 3
        return calculo < 7 ? valor.nome : ""
    })
    return calculoReprovacao.map(media => media.nome)
}
console.log(nomeDasReprovadas(alunas))


/*4-Fazer uma função que retorne um array de objetos:*/
function arrayObjetos(objetos) {
    let guardarArrayObj;
    objetos = alunas.map((valor, posicao, arrayInteiro) => {
        guardarArrayObj = arrayInteiro

        return arrayObjetos
    })
    console.log(guardarArrayObj)
}
arrayObjetos()


/*6-Fazer uma função que retorne o nome da aluna com maior nota*/
function alunaMaiorNota(nomeAlunaMaiorNota) {
    let maiorNota = 0
    let nomeDaMaiorNota = 0;
    let mapeando = nomeAlunaMaiorNota.map((valor) => {
        let calculo = (valor.prova.p1 + valor.prova.p2 + valor.prova.p3) / 3
        if (maiorNota < calculo) {
            maiorNota = calculo
            nomeDaMaiorNota = maiorNota
            nomeDaMaiorNota = valor.nome
        }
    });
    console.log(`${nomeDaMaiorNota} tem a maior nota`);
    return mapeando
}
alunaMaiorNota(alunas);


/*7-Fazer uma função que retorne o nome da aluna com menor nota*/
function alunaMenorNota(nomeAlunaMenorNota) {
    let menorNota = 999
    let nomeDaMenorNota = 0
    let mapeando = nomeAlunaMenorNota.map((valor) => {
        let calculo = (valor.prova.p1 + valor.prova.p2 + valor.prova.p3) / 3
        if (calculo < menorNota) {
            menorNota = calculo
            nomeDaMenorNota = menorNota
            nomeDaMenorNota = valor.nome
        }
    });
    console.log(`${nomeDaMenorNota} tem a menor nota`);
    return mapeando
}
alunaMenorNota(alunas);

/*8-Fazer uma função que retorne a media de toda a turma*/
let contador = 0
function mediaGeral(mediaTotal) {
    todasAsMedias(mediaTotal).map((value) => {
        return (contador += value)
    })
    return (contador / 10).toFixed(2)
}
console.log(mediaGeral(alunas))























/*8-Fazer uma função que retorne a media de toda a turma
let temp = 0
function mediaDeTodaTurma(acessarMediaTurmaToda) {
    let mapeandoMedia = acessarMediaTurmaToda.map((valor) => {
        let calculo = (valor.prova.p1 + valor.prova.p2 + valor.prova.p3) / 3
        if (temp < calculo) {
            temp = calculo + calculo
        }
    })
    console.log(`media de toda turma: ${temp}`)
    return
}
mediaDeTodaTurma(alunas)


et notas = [2, 4, 5, 4, 3]
document.querySelector("#result").innerHTML = `
A soma das notas é: ${notas.reduce(somar, 0)}
A Média das notas é: ${notas.reduce(somar, 0)/notas.length}

function somar(total, number) {
return total + number
} */
