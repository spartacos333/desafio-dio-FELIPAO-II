//Idealizacao + primeiras linhas de codigo.
//decidi realizar o codigo em ingles(basico, mas em ingles)
winningBalance(`the heroe has a winnig balance of ${winningBalance} is at the level of ${rank}`)

function winningBalance(victory,defeat){
    let rank = 7
    switch(rank){
        case 1:
            console.log("Iron")
        case 2:
            console.log("Bronze")
        case 3:
            console.log("Silver")
        case 4:
            console.log("Gold")
        case 5:
            console.log("Diamond")
        case 6:
            console.log("Legendary")
        case 7:
            console.log("Immortal")
    }
    return victory-defeat
}
//vou dar run and debug pela primeira vez...
/*
recebi:
Process exited with code 1
Uncaught ReferenceError ReferenceError: rank is not defined
*/
