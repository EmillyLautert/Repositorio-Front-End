const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
const unicos = []; // armazena um de cada vez

for (let i = 0; i < numeros.length; i++) {
  if (!unicos.includes(numeros[i])) { //includes informa se já existe, a exclamação inverte para não existe
    unicos.push(numeros[i]); //adiciona se não existe ainda
  }
}

console.log(unicos);
console.log(unicos.length);