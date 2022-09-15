
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

//1) Fazer uma função que retorne um array de todas as médias

const media  = (prova) => parseFloat(((prova.p1+ prova.p2+ prova.p3) /3).toFixed(2))

const medias = (alunas) => {

    return alunas.map(aluna => {   
        return media(aluna.prova);
    })
}

//console.log(medias(alunas));

//2) Fazer uma função que retorne um array de nomes das aprovadas

const obterAprovadas = alunas => alunas.filter(aluna => media(aluna.prova) >= 7 ).map(aluna => aluna.nome)

//console.log(obterAprovadas(alunas));

//3) Fazer uma função que retorne um array de nomes das reprovadas

const obterReprovadas = alunas => alunas.filter(aluna => media(aluna.prova) < 7 ).map(aluna => aluna.nome)

//console.log(reprovadas(alunas));

/*4) Fazer uma função que retorne um array de objetos:
  [
      { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
  ] 
*/

 const statusAlunas = (alunas)=>{
    return alunas.map(aluna=>{
        const resultado = media(aluna.prova)
        return {
            nome: aluna.nome,
            media: resultado,
            aprovada: resultado >= 7
        }
    })
 }
//console.log(statusAlunas(alunas))

//6) Fazer uma função que retorne o nome da aluna com maior nota
 const obterAlunasOrdenadas = (alunas)=>{
    return statusAlunas(alunas).sort((prevAluna, nextAluna)=>{
        return prevAluna.media - nextAluna.media
    })
 }

const alunaMaiorNota = (alunas)=>{
    return obterAlunasOrdenadas(alunas).reverse().shift().nome
}


//7) Fazer uma função que retorne o nome da aluna com menor nota
const alunaMenorNota = (alunas)=>{
    return obterAlunasOrdenadas(alunas).shift().nome
}
//console.log(alunaMenorNota(alunas))

//8) Fazer uma função que retorne a media de toda a turma

const mediaTurma = (alunas)=> (medias(alunas)
    .reduce((acum, media)=>acum+media)/alunas.length)
    .toFixed(2)


console.log(mediaTurma(alunas))