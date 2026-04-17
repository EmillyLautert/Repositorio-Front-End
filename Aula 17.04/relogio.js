function atualizarRelogio() {
    const agora = new Date(); // Obtém a data e hora atuais
    
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona zero à esquerda se for menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Formata a string do tempo
    const tempoFormatado = `${horas}:${minutos}:${segundos}`;

    // Exibe no HTML
    document.getElementById("tempo").textContent = tempoFormatado;
}

// Executa a função imediatamente ao carregar a página
atualizarRelogio();

// Atualiza o relógio a cada 1 segundo (1000ms)
setInterval(atualizarRelogio, 1000);