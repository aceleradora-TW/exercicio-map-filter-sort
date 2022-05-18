
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

// retorna um array com todas as medias
function medias(notas) {
    const media = notas.map(nota => ((nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3).toFixed(1))

    return media
}
//console.log(medias(alunas))

// retorna um array com o nome das aprovadas
function nomesAprovadas(nomesAlunas) {

    let listaNomes = nomesAlunas.filter((i) => {
        let medias = ((i.prova.p1 + i.prova.p2 + i.prova.p3) / 3).toFixed(1)

        if (medias >= 7) {
            return i.nome
        }
    })
    return listaNomes.map(i => i.nome)
}

console.log(nomesAprovadas(alunas))


// retorna um array com o nome das aprovadas
