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
        break
    }
}

function getRankByBalance(balance) {
    if (balance <= 10) return 1;
    if (balance <= 20) return 2;
    if (balance <= 50) return 3;
    if (balance <= 80) return 4;
    if (balance <= 90) return 5;
    if (balance <= 100) return 6;
    return 7;
}

function winningBalance(victory, defeat) {
    let rank = getRankByBalance(victory - defeat);
    const rankName = getRankName(rank);
    console.log(`The hero has a winning balance of ${victory - defeat} and is at the level of ${rankName}`);
    const heroName = "Spartacos333";
    console.log(`The hero ${heroName} is a ${rankName} challenger!!!`);
}

let victory = 0;
let defeat = 0;

for (let rank = 1; rank <= 10; rank++) {
    winningBalance(victory, defeat);
    victory += 15;
    defeat += 3;
}
