
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
//1)
function media(notas) {
    const medias = notas.map(function(pontos){ 
        const media = calcularMedia(pontos.prova)
        return Number(media.toFixed(1))      
        //medias = ['7.1', '7.9', '8.1','9.0', '8.2', '5.5','7.1', '5.8', '3.7', '7.2']                  
    }) 
    return medias
} 

function calcularMedia(prova) {
    return Number(((prova.p1 + prova.p2 + prova.p3)/3).toFixed(1))
} //talvez uma funcao de media que retorne true ou flase tipo essa aqui da linha 24

// function getAprovadas(alunas) {
//     const notasAlunas = alunas.map(aluna => {
//        return {
//            nome: aluna.nome,
//            nota: calcularMedia(aluna.prova)
//        } 
//     })
//     const aprovadas = notasAlunas.filter(notaAluna => notaAluna.nota >= 7)
//     return aprovadas.map(aprovada => aprovada.nome)
    
// } 

//  console.log(getAprovadas(alunas))

// function getReprovadas(alunas) {
//     const notasAlunas = alunas.map(aluna => {
//        return {
//            nome: aluna.nome,
//            nota: calcularMedia(aluna.prova)
//        }
//     })
//     const reprovadas = notasAlunas.filter(notaAluna => notaAluna.nota < 7)
//     return reprovadas.map(reprovadas => reprovadas.nome)
    
// }

//console.log(getReprovadas(alunas))


/*
function verificarAprovacao(media){
    const objetoAluna 
    const mediaVerificacao = media.map(aluna => {
        if(aluna >= 7){  
            return true
        }
        return false
    }) 
    const verificacaoAprovada = mediaVerificacao.map()

    return mediaVerificacao 
}
console.log(verificarAprovacao(media(alunas)))
*/

function impressaoObjeto(alunas){
    const objeto = alunas.map(aluna => {
        return {
            nome: aluna.nome,
            media: calcularMedia(aluna.prova),
            aprovada: calcularMedia(aluna.prova) >= 7
        } 
    }) 
    return objeto 
}

 //console.log(impressaoObjeto(alunas))

function mediaAlta(){
    const maiorMedia = media(alunas).sort()
    return maiorMedia[maiorMedia.length-1]
}
//  console.log(mediaAlta(alunas))

// function maiorNotaAluna(alunas){
//     const objeto  = alunas.sort()
//     objeto.media.sort()
//     return objeto 
// }
// console.log(media())

