
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
//1) FUNCAO PARA CALCUCAR MEDIAS DAS ALUNAS
function media(notas) {
    const medias = notas.map(function(pontos){ 
        const media = calcularMedia(pontos.prova)
        return Number(media.toFixed(1))      
        //medias = ['7.1', '7.9', '8.1','9.0', '8.2', '5.5','7.1', '5.8', '3.7', '7.2']                  
    }) 
    return medias
} 
console.log(media(alunas))

//==================================================================

// FUNCAO CORINGA PARA CALCULAR MEDIAS
function calcularMedia(prova) {
    return Number(((prova.p1 + prova.p2 + prova.p3)/3).toFixed(1))
} //talvez uma funcao de media que retorne true ou flase tipo essa aqui da linha 24

//==================================================================

//2) Fazer uma função que retorne um array de nomes das aprovadas
function getAprovadas(alunas) {
    const notasAlunas = alunas.map(aluna => {
       return {
           nome: aluna.nome,
           nota: calcularMedia(aluna.prova)
       } 
    })
    const aprovadas = notasAlunas.filter(notaAluna => notaAluna.nota >= 7)
    return aprovadas.map(aprovada => aprovada.nome)
    
}
console.log(getAprovadas(alunas))

//==================================================================

//3) Fazer uma função que retorne um array de nome das reprovadas
function getReprovadas(alunas) {
    const notasAlunas = alunas.map(aluna => {
       return {
           nome: aluna.nome,
           nota: calcularMedia(aluna.prova)
       }
    })
    const reprovadas = notasAlunas.filter(notaAluna => notaAluna.nota < 7)
    return reprovadas.map(reprovadas => reprovadas.nome)
    
}
console.log(getReprovadas(alunas))

//==================================================================

//4) Fazer uma função que retorne um array de objetos:

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
console.log(impressaoObjeto(alunas))

//==================================================================
function ordenarMedia(){
    const listaOrdenada = media(alunas).sort()
    return listaOrdenada
}
console.log(ordenarMedia())

//==================================================================

//6) Fazer uma função que retorne o nome da aluna com maior nota
function alunaMaiorMedia(alunas) {
    const getMediaAlta = ordenarMedia()
    const aprovada = impressaoObjeto(alunas).filter(aluna=>{if(aluna.media === getMediaAlta[getMediaAlta.length-1])
    return aluna.nome})

    return aprovada[0].nome
}
console.log(alunaMaiorMedia(alunas))

//==================================================================

//7) Fazer uma função que retorne o nome da aluna com menor nota
function alunaMenorMedia(alunas) {
    const getMediaAlta = ordenarMedia()
    const aprovada = impressaoObjeto(alunas).filter(aluna=>{if(aluna.media === getMediaAlta[0])
    return aluna.nome})

    return aprovada[0].nome
}
console.log(alunaMenorMedia(alunas))

//==================================================================

//8) Fazer uma função que retorne a media de toda a turma
function mediaTurma(alunas) {
    
    const getMedia = media(alunas).reduce(function(a,b){
        return a + b})
    const resultMedia = getMedia / media(alunas).length        
    return resultMedia.toFixed(1)
}

console.log(mediaTurma(alunas))
