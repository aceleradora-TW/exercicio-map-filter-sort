
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

function Media(mediaAlunas) {

    let mostraMedia = mediaAlunas.map(function (mediaNota) {
        let calculo = ((mediaNota.prova.p1 + mediaNota.prova.p2 + mediaNota.prova.p3) / 3).toFixed(1)
        return calculo
    })
    return mostraMedia
}
console.log("Média das alunas:",Media(alunas))

function Aprovadas(alunaApr) {
    // let teste = alunaApr.map(function (aprovada) {
    //     let teste1 = (aprovada.nome)
    //     return teste1
    // })
    // let teste2 = alunaApr.map(function (nota) {
    //     let calc = ((nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3).toFixed(1)
    //     return calc
    // })
    let aluna = alunaApr.filter(function (filtro) {
        let calculo = ((filtro.prova.p1 + filtro.prova.p2 + filtro.prova.p3) / 3).toFixed(1)
        // if (calculo >= 7) {
        // return "Alunas Aprovadas: " + filtro.nome
        //}
        return calculo >= 7
    })
    return aluna
}
console.log("Alunas Aprovadas:",Aprovadas(alunas))

function Reprovadas(RprAluna) {
    let aluna = RprAluna.filter(function (reprovada) {
        let calculo = ((reprovada.prova.p1 + reprovada.prova.p2 + reprovada.prova.p3) / 3).toFixed(1)
        //if (calcR < 7) {
        //return "Aluna Reprovada: " + reprovada.nome
        //}
        return calculo < 7
    })
    return aluna
}
console.log("Alunas Reprovadas:",Reprovadas(alunas))

function total(resultado) {
    let aluna = resultado.map(function (teste) {
        let nota = ((teste.prova.p1 + teste.prova.p2 + teste.prova.p3) / 3).toFixed(1)
        if (nota >= 7) {
            nota = true
        }
        else {
            nota = false
        }
        return {
            nome: teste.nome,
            media: ((teste.prova.p1 + teste.prova.p2 + teste.prova.p3) / 3).toFixed(1),
            aprovada: nota
        }
    })
    return aluna
}
console.log("Retorno de Array com objetos:",total(alunas))

function maior(prova) {
    let nota = prova.map(function (teste) {
        //   console.log(a)
        let aluna = ((teste.prova.p1 + teste.prova.p2 + teste.prova.p3) / 3).toFixed(1)
        if (aluna > 7) {
            return teste.nome
        }
        return null
    })
    let maxima = nota.sort(function (aluna1, aluna2) {
        // let arrai2 = [c]
        // let arrai = [b]
        if (aluna1 > aluna2) {
            return -1
        }
        if (aluna2 > aluna1) {
            return 1
        }
        // return  arrai - arrai2[3]
    })
    return maxima[6]
}
console.log("Maior Nota:",maior(alunas))

function menor(prova) {
    let nota = prova.map(function (teste) {
        //   console.log(a)
        let aluna = ((teste.prova.p1 + teste.prova.p2 + teste.prova.p3) / 3).toFixed(1)
        if (aluna < 7) {
            return teste.nome
        }
        return null
    })
    let minimo = nota.sort(function (aluna1, aluna2) {
        // let arrai2 = [aluna2]
        // let arrai = [aluna1]
        if (aluna1 < aluna2) {
            return -1
        }
        if (aluna2 < aluna1) {
            return 1
        }
        // return  arrai - arrai2[3]
    })
    return minimo[8]
}
console.log("Menor Nota:", menor(alunas))

function mediaTurma(aluna) {
    let nota = aluna.map(function (teste) {

        let calculo = (teste.prova.p1 + teste.prova.p2 + teste.prova.p3) / 3

        return calculo
    })
    let turma = nota.reduce(function (nota1, nota2) {
        return nota1 += nota2
    }, 0)
    return turma.toFixed(1)
}
console.log("Media da Turma:",mediaTurma(alunas))
// const notas = [1, 5, 8, 3, 7, 10, 9, 4];
// let media = notas.reduce((soma, nota) => soma += nota, 0) / notas.length;

// console.log(media.toFixed(2));
  // Resultado:
  // [ {nome: 'Coca Cola', preco: 5}, {nome: 'Pizza', preco: 15} ]


//console.log(total(alunas))
// console.log(total(alunas))
// var fruits = ["Banana", "Orange", "Apple", "Mango"];  typeof fruits;             // retorna o object
// tipo
// let = [ fulana, ciclana, ]
// return aprovadas

/*x.map(Media[Resultado])
console.log(alunas)*/



/*function Media(p1, p2, p3) {
    let Resultado = parseInt(p1 + p2 + p3) / 3
    let alunaTeste = alunas.nome


    return alunaTeste
}
console.log(Media(alunas))
alunas.map(Media[Resultado])
console.log(alunas)

const notas = mediaAlunas.map(mediaNota => mediaNota)*/
// --------------------------------------------------------------------------
// let aluna = aprAluna
// let teste = alunas.find((usuario, index, Array) => usuario.name === 'Ashley')
// return aluna



        //if (JSON.stringify(a.prova.p1) > JSON.stringify(a.prova.p2)) {
           // return a.nome
        //}


        
//var frutas = [{
    //nome: 'maça'
//},
//{
    //nome: 'banana'
//},
//{
    //nome: 'pera'
//}];

//frutas.sort(function (a, b) {
    //return (a.nome > b.nome)
//})

//console.log(frutas)
