//Vou definir valores para os parametros e, assim como no ultimo desafio, quero que meu heroi passe por uma especie de evolucao de ranks.

function winningBalance(victory, defeat, rank) {
    let rankName
    switch (rank) {
    case 1:
        rankName = "Iron"
        break
    case 2:
        rankName = "Bronze"
        break
    case 3:
        rankName = "Silver"
        break
    case 4:
        rankName = "Gold"
        break
    case 5:
        rankName = "Diamond"
        break
    case 6:
        rankName = "Legendary"
        break
    case 7:
        rankName = "Immortal"
        break
    }
    console.log(`The hero has a winning balance of ${victory - defeat} and is at the level of ${rankName}`)
    return victory - defeat
}
//Repeti o codigo e formatei para uma melhor organizacao;
//decidi usar um operador logico, criando um loop usando o comando `For`;
//E `chamei` minha function definindo o numero de vitorias e derrotas;
for (let rank = 1; rank <= 7; rank++) {
    winningBalance(10, 5, rank)
}
//ainda falta relacionar o victory - defeat ao rank e decidi nomear o heroi.