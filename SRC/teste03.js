//joguei o codigo no chatgpt com as instrucoes para ele relacionar o rank com o balance, agora vou rodar esse codigo e pretendo altera-lo para os padroes do desafio.
// Função para obter o nome da classificação com base no número de rank
function getRankName(rank) {
    switch (rank) {
        case 1:
            return "Iron";
        case 2:
            return "Bronze";
        case 3:
            return "Silver";
        case 4:
            return "Gold";
        case 5:
            return "Diamond";
        case 6:
            return "Legendary";
        case 7:
            return "Immortal";
        default:
            return "Unknown Rank";
    }
}

// Função para determinar o nível de classificação com base no saldo de vitórias e derrotas
function getRankByBalance(balance) {
    if (balance <= 10) return 1; // Se o saldo for <= 10, retorna o nível 1 (Iron)
    if (balance <= 20) return 2; // Se o saldo for <= 20, retorna o nível 2 (Bronze)
    if (balance <= 50) return 3; // Se o saldo for <= 50, retorna o nível 3 (Silver)
    if (balance <= 80) return 4; // Se o saldo for <= 80, retorna o nível 4 (Gold)
    if (balance <= 90) return 5; // Se o saldo for <= 90, retorna o nível 5 (Diamond)
    return 6; // Se o saldo for >= 100, retorna o nível 6 (Legendary)
}

// Função para exibir o resultado com o nível de classificação correspondente
function winningBalance(victory, defeat) {
    let rank = getRankByBalance(victory - defeat); // Obtém o nível de classificação
    const rankName = getRankName(rank); // Obtém o nome do nível de classificação
    console.log(`The hero has a winning balance of ${victory - defeat} and is at the level of ${rankName}`);
}

let victory = 0;
let defeat = 0;

// Loop for que simula o aumento de vitórias e derrotas e chama a função winningBalance
for (let rank = 1; rank <= 7; rank++) {
    winningBalance(victory, defeat); // Chama a função com os valores de vitória e derrota
    victory += 7; // Aumenta o número de vitórias em 7
    defeat += 2; // Aumenta o número de derrotas em 2
}
//o loop parou no rank silver, vou analisar o codigo para entender o porque disso e realizar as alteracoes comentadas anteriormente