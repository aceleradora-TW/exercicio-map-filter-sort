```javascript
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
```

# Descrição
Para esse exercicio voces não poderão usar o `for`, `while` ou `do while`

1) Fazer uma função que retorne um array de todas as médias
2) Fazer uma função que retorne um array de nomes das aprovadas
3) Fazer uma função que retorne um array de nome das reprovadas
4) Fazer uma função que retorne um array de objetos:
```javascript
  [
      { 
          nome: String , 
          media: Number, 
          aprovada: Boolean 
      }
  ] 
```
Exemplo

Entrada:
```javascript
  [
      { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
      { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
      { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
  ]
```

Saída:
```javascript
  [
      { nome: "Ashley", media: 7.1, aprovada: true },
      { nome: "Sabrina", media: 7.9, aprovada: true },
      { nome: "Samantha", media: 5.0, aprovada: false }
  ]
```
6) Fazer uma função que retorne o nome da aluna com maior nota
7) Fazer uma função que retorne o nome da aluna com menor nota
8) Fazer uma função que retorne a media de toda a turma


## Observações
Formula da média: `(a + b + c) / 3`

1) as notas devem ter apenas 1 numero após a virgula
2) para estar aprovada a aluna tem que ter media igual ou acima de 7
