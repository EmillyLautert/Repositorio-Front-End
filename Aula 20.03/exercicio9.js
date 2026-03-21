// Exercício 9
// Crie um programa para exibir o resultado de três produtos
function geraMensagem(nomeProduto, valor, quantidade) {
    console.log(`${nomeProduto}, valor unitário: ${valor}, total da compra: ${quantidade*valor}`);
}

geraMensagem("Iphone", "6000", "3");
geraMensagem("xBox", "4500", "2");
geraMensagem("Notebook", "8000", "4");