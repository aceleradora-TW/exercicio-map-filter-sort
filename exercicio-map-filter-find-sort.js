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

function media(){
    let provaMap = alunas.map((nome)=>{
        let provas = parseFloat(((nome.prova.p1+ nome.prova.p2+nome.prova.p3)/3).toFixed(1));
        let retornaNome = nome.nome;
        return {retornaNome,provas};
    });
    console.table(provaMap);
    return provaMap;
}
const aprovada = ()=>{
    let nomesAprovada= [];
    let aprovadaFilter = alunas.filter((params)=>{
        let mediaProva = parseFloat(((params.prova.p1+ params.prova.p2+params.prova.p3)/3).toFixed(1));
        if(mediaProva >=7){
            nomesAprovada.push(params.nome)
        }
    });
    console.table(nomesAprovada);
    return nomesAprovada;
}
const reprovada =()=>{
    let nomesReprovada =[];
    let reprovadaFilter = alunas.filter((params)=>{
        let mediaReprovada = parseFloat(((params.prova.p1+params.prova.p2+params.prova.p3)/3).toFixed(1));
        if(mediaReprovada<7){
            nomesReprovada.push(params.nome);
        }
    });
    console.table(nomesReprovada);
    return nomesReprovada;
}

//media();
//aprovada();
//reprovada();
