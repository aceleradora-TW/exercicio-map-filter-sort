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
const calcularMedia = (a, b, c) => (a + b + c) / 3;

//EX 1
function retornarTodasAsMedias(arr) {
    let arrayMedias = [];
    arrayMedias = arr.map(function(item){
        return Number(calcularMedia(item.prova.p1, item.prova.p2, item.prova.p3).toFixed(1));
    });
    console.log(arrayMedias);
    return arrayMedias;
}
//retornarTodasAsMedias(alunas);

//EX 2
function retornarNomesDasAprovadas(arr) {
    let arrayNomesAprovadas = [];
    arrayNomesAprovadas = arr.filter(item => calcularMedia(item.prova.p1, item.prova.p2, item.prova.p3) >= 7).map((item) => item.nome);
    console.log(arrayNomesAprovadas);
    return arrayNomesAprovadas;
}
//retornarNomesDasAprovadas(alunas);

//EX 3
function retornarNomesDasReprovadas(arr) {
    let arrayNomesReprovadas = [];
    arrayNomesReprovadas = arr.filter(item => calcularMedia(item.prova.p1, item.prova.p2, item.prova.p3) < 7).map((item) => item.nome);
    console.log(arrayNomesReprovadas);
    return arrayNomesReprovadas;
}
//retornarNomesDasReprovadas(alunas);

//EX 4
function retornarArrayDeObjetos(arr) {
    let arrDeObjetos = [];
    arrDeObjetos = arr.map((item) => {
        return {
            nome: item.nome, 
            media: calcularMedia(item.prova.p1, item.prova.p2, item.prova.p3), 
            aprovada: calcularMedia(item.prova.p1, item.prova.p2, item.prova.p3) >= 7
        };
    });
    console.log(arrDeObjetos);
    return (arrDeObjetos);
    
}
//retornarArrayDeObjetos(alunas);

//EX 6
function retornarAlunaComMaiorNota(arr) {
    let alunaComMaiorNota;
    let maiorNota = 0;
    retornarArrayDeObjetos(arr).sort((item) => {
        if(item.media > maiorNota){
            maiorNota = Number(item.media.toFixed(1));
            alunaComMaiorNota = item.nome;
        }
    });
    
    console.log(`A aluna ${alunaComMaiorNota} teve a maior nota que foi de ${maiorNota}`);
    return alunaComMaiorNota;
}
//retornarAlunaComMaiorNota(alunas);

//EX 7
function retornarAlunaComMenorNota(arr) {
    let alunaComMenorNota;
    let menorNota = 10;

    retornarArrayDeObjetos(arr).sort((item) => {
        if(item.media < menorNota) {
            menorNota = Number(item.media.toFixed(1));
            alunaComMenorNota = item.nome;
        }
    });

    console.log(`A aluna ${alunaComMenorNota} teve a maior nota que foi de ${menorNota}`);
    return alunaComMenorNota;
}
//retornarAlunaComMenorNota(alunas);

//EX 8
function retornarMediaDaTurma(arr) {
    let mediaGeral = Number((retornarTodasAsMedias(arr).reduce((prev, item) => {
        return prev + item;
    }, 0) / 10).toFixed(1));
    console.log(mediaGeral);
}
//retornarMediaDaTurma(alunas);