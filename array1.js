function Medias() {
    const alunas = [
        { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
        { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
        { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
        { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
        { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
        { nome: "Inês Brasil", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
        { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
        { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
        { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
        { nome: "Beyoncé", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
    ]

    const separa = alunas.map(aluna => aluna.prova.p1)
    const separa2 = alunas.map(aluna => aluna.prova.p2)
    const separa3 = alunas.map(aluna => aluna.prova.p3)
    let resultado = (separa[0] + separa2[0] + separa3[0]) / 3
    console.log(resultado.toFixed(1))



}

Medias()

/* if (vegetais.indexOf(vegetal) === -1) {
    vegetais.push(vegetal);
    console.log('Nova coleção de vegetais é : ' + vegetais);
} else if (vegetais.indexOf(vegetal) > -1) {
    console.log(vegetal + ' já existe na coleção de vegetais.');
}
*/