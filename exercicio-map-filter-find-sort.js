
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
// console.log(Media(alunas))

function Aprovadas(aprAluna) {
    // let teste = aprAluna.map(function (aprovada) {
    //     let teste1 = (aprovada.nome)
    //     return teste1
    // })
    // let teste2 = aprAluna.map(function (nota) {
    //     let calc = ((nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3).toFixed(1)
    //     return calc
    // })
    let teste3 = aprAluna.filter(function (filtro) {
        let calc2 = ((filtro.prova.p1 + filtro.prova.p2 + filtro.prova.p3) / 3).toFixed(1)
        // if (calc2 >= 7) {
        // return "Alunas Aprovadas: " + filtro.nome
        //}
        return calc2 >= 7
    })
    return teste3
}
//console.log(Aprovadas(alunas))

function Reprovadas(RprAluna) {
    let aa = RprAluna.filter(function (reprovada) {
        let calcR = ((reprovada.prova.p1 + reprovada.prova.p2 + reprovada.prova.p3) / 3).toFixed(1)
        //if (calcR < 7) {
        //return "Aluna Reprovada: " + reprovada.nome
        //}
        return calcR < 7
    })
    return aa
}
//console.log(Reprovadas(alunas))

function total(resultado) {
    let colega = resultado.map(function (d) {
        let nota = ((d.prova.p1 + d.prova.p2 + d.prova.p3) / 3).toFixed(1)
        if (nota >= 7) {
            nota = true
        }
        else {
            nota = false
        }
        return {
            nome: d.nome,
            media: ((d.prova.p1 + d.prova.p2 + d.prova.p3) / 3).toFixed(1),
            aprovada: nota
        }
    })
    return colega
}

function maior(c) {
    let nota = c.map(function (a) {
        let batata = ((a.prova.p1 + a.prova.p2 + a.prova.p3) / 3).toFixed(1)
        console.log(batata)
        if (batata >= 7) {
            return a.nomme
        }
    })


    let maxima = nota.reduce(function (b, c) {
        let teste1 = b
        //let teste2 =
        //console.log(teste1 + "   " + teste2)

        return b + " " + c

    }, 0)
    return maxima
}
console.log(maior(alunas))
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