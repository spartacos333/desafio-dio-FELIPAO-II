//proponho-me a corrigir o erro e desenvolver mais o codigo(codando em ingles-basico,mas ainda em ingles-)
/* Parametros
- victory: o numero de vitorias
- defeat: o numero de derrotas
- rank: o nivel do heroi
agora declaro o rank nos parametro ao inves de como uma variavel no escopo da function
*/
function winningBalance(victory, defeat, rank) {
    let rankName
//agora o rankName varia de acordo com o rank declarado para facilitar o uso do swith case.
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
//apos dar run and debug percebi que nao defini nenhum dos parametros.