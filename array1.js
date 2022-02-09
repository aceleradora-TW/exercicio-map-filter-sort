
function Medias() {
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




    const separacao = alunas.map(aluna => aluna.prova.p1)
    const separacao2 = alunas.map(aluna => aluna.prova.p2)
    const separacao3 = alunas.map(aluna => aluna.prova.p3)


    const soma1 = (separacao[0] + separacao2[0] + separacao3[0]) / 3
    const soma2 = (separacao[1] + separacao2[1] + separacao3[1]) / 3
    const soma3 = (separacao[2] + separacao2[2] + separacao3[2]) / 3
    const soma4 = (separacao[3] + separacao2[3] + separacao3[3]) / 3
    const soma5 = (separacao[4] + separacao2[4] + separacao3[4]) / 3
    const soma6 = (separacao[5] + separacao2[5] + separacao3[5]) / 3
    const soma7 = (separacao[6] + separacao2[6] + separacao3[6]) / 3
    const soma8 = (separacao[7] + separacao2[7] + separacao3[7]) / 3
    const soma9 = (separacao[8] + separacao2[8] + separacao3[8]) / 3
    const soma10 = (separacao[9] + separacao2[9] + separacao3[9]) / 3
    let geral = [soma1.toFixed(1), soma2.toFixed(1), soma3.toFixed(1),
    soma4.toFixed(1), soma5.toFixed(1), soma6.toFixed(1),
    soma7.toFixed(1), soma8.toFixed(1),
    soma9.toFixed(1), soma10.toFixed(1)]

    return geral



}

console.log(Medias())















/*

    let soma1 = separacao.reduce(function (valor1) {
        return valor1
    })
    let soma2 = separacao2.reduce(function (valor2) {
        return valor2
    })
    let soma3 = separacao3.reduce(function (valor3) {
        return valor3

    }) */





/*function isBigEnough(value) {
    return value >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtrado é [12, 130, 44]
  

/*Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}
*/

/* if (vegetais.indexOf(vegetal) === -1) {
    vegetais.push(vegetal);
    console.log('Nova coleção de vegetais é : ' + vegetais);
} else if (vegetais.indexOf(vegetal) > -1) {
    console.log(vegetal + ' já existe na coleção de vegetais.');
}
*/