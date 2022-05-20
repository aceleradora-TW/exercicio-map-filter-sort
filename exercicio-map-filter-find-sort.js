
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
const medias = (notas) => {
    const media = notas.map(nota => parseFloat(((nota.prova.p1 + nota.prova.p2 + nota.prova.p3) / 3).toFixed(1)))

    return media
}



// retorna um array com o nome das aprovadas
const nomesAprovadas = (nomesAlunas) => {

    let listaNomes = nomesAlunas.filter((i) => {
        let medias = ((i.prova.p1 + i.prova.p2 + i.prova.p3) / 3).toFixed(1)

        if (medias >= 7) {
            return i.nome
        }
    })
    return listaNomes.map(i => i.nome)
}


// retorna um array com o nome das aprovadas
const nomesReprovadas = (nomesAlunas) => {

    let encontraReprovadas = nomesAlunas.filter(i => {
        let media = ((i.prova.p1 + i.prova.p2 + i.prova.p3) / 3).toFixed(1)
        if(media < 7){
            return media;
        }
    } 
    )
    return encontraReprovadas.map(j => j.nome)
}


const verificaMedias = ({p1, p2, p3}) => ((p1 + p2 + p3) / 3).toFixed(1)


const aprovadaOuReprovada = (media) => {
    if(media >= 7){
        return true
    } else{
        return false
    }
}


// função que retorna um array de objetos
const arrayObjetos = (arrayAlunas) => {

    let aprovada = arrayAlunas.map(alunas => ({

        nome: alunas.nome,
        media: verificaMedias(alunas.prova),
        aprovada: aprovadaOuReprovada(verificaMedias(alunas.prova))

    }))

    return aprovada
}


// função que retorna o nome da aluna com maior nota
const maiorNota = (mediaAluna) => {
    let ordenaMedias = mediaAluna.sort((a, b) => a.media - b.media)
    return ordenaMedias.pop().nome
}


// função que retorna o nome da aluna com menor nota
const menorNota = (mediaAluna) => {

    let notaAluna = mediaAluna.sort((a, b) => b.media - a.media)
    return notaAluna.pop().nome

}


// funcão que retorna a media da turma
const mediaTurma = (medias) => {
    let arrayDeMedias = medias.reduce((acumulador, nota) => acumulador + nota)

    return (arrayDeMedias / medias.length).toFixed(1)
}

const mostraTela = () => {
    return {
        alunas: (medias(alunas)),
        aprovadas: (nomesAprovadas(alunas)),
        reprovadas: (nomesReprovadas(alunas)),
        criaObjetos: (arrayObjetos(alunas)),
        nomeAlunaMaiorNota: (maiorNota(arrayObjetos(alunas))),
        nomeAlunaMenorNota: (menorNota(arrayObjetos(alunas))),
        mediaTurma: (mediaTurma(medias(alunas)))
    }
}
console.log(mostraTela())