
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

function medias (alunas) {

    const medias = alunas.map(aluna => {
        const notas = aluna.prova.p1+ aluna.prova.p2+ aluna.prova.p3;
        const media =  notas/3;
        return media.toFixed(2)
    }
    )
    return medias
}

//console.log(medias(alunas));

//2) Fazer uma função que retorne um array de nomes das aprovadas

function aprovadas (alunas) {
    
    const aprovadas = [];

     alunas.map(aluna => {
        const notas = aluna.prova.p1+ aluna.prova.p2+ aluna.prova.p3;
        const media =  notas/3;
        if (media >= 7 ){

            aprovadas.push(aluna.nome);

        }
    }  
    )
    return aprovadas
}

//console.log(aprovadas(alunas));

//3) Fazer uma função que retorne um array de nomes das reprovadas

function reprovadas (alunas) {
    
    const reprovadas = [];

     alunas.map(aluna => {
        const notas = aluna.prova.p1+ aluna.prova.p2+ aluna.prova.p3;
        const media =  notas/3;
        if (media < 7 ){

            reprovadas.push(aluna.nome)

        }
    }  
    )
    return reprovadas
}

//onsole.log(reprovadas(alunas));

/*4) Fazer uma função que retorne um array de objetos:
  [
      { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
  ] 
*/

 function statusAlunas(alunas){
    return alunas.map(aluna=>{
        const media = ((aluna.prova.p1+ aluna.prova.p2+ aluna.prova.p3)/3).toFixed(2)
        return {
            nome: aluna.nome,
            media,
            aprovada: (media >= 7 ? true: false)
        }
    })
 }
console.log(statusAlunas(alunas))
   


