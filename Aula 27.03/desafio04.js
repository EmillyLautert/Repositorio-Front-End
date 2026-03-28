const pessoas = [
 { nome: "João", idade: 25 },
 { nome: "Maria", idade: 18 },
 { nome: "Pedro", idade: 30 }
];
//const maiores18 = pessoas.filter(nome => nome.idade > 18);
//console.log(maiores18);

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas [i].idade > 18) {
        console.log (pessoas [i].nome)
    }
}