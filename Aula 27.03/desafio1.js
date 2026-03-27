const numeros = [10, 20, 30, 40, 50]; //declara o array (lista), separação por vírgula
let soma = 0; //armazena a soma
for (let i = 0; i < numeros.length; i++) { //separado por ponto e vírgula / length = tamanho
    soma += numeros[i];
}

console.log("O resultado é: " + soma);