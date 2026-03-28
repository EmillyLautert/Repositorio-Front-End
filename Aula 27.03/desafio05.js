// crie um array com produtos
// cada produto deve ter nome, preço e quantidade
// exiba o valor por produto e o total do carrinho de compras

const produtos = [
    {nome: 'Notebook', preco: 5000, quantidade: 2},
    {nome: 'Celular', preco: 3000, quantidade: 5},
]

let valorTotalCarrinho = 0;

for (let i = 0; i < produtos.length; i++) {
    const valorTotal = produtos[i].preco * produtos[i].quantidade;
    valorTotalCarrinho += valorTotal;
    
    console.log (produtos[i].nome, valorTotal);
}

console.log(valorTotalCarrinho)