const endereco = {
    uf: 'SP',
    bairro: 'Centro',
    cidade: 'São Paulo',
    rua: 'Rua dos Bobos',
    numero: 0
};

const cliente = {
    nome: 'João',
    idade: 30,
    endereco: endereco,
    compras: [
        {
            produto: 'Notebook',
            preco: 3000,
            quantidade: 1
        }
    ]
};

console.log (endereco);
console.log (cliente);