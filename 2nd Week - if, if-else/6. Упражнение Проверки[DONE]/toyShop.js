function toyShop (input) {
    let excursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let talkingDollsPrice = talkingDolls * 3;
    let bearsPrice = bears * 4.1;
    let minionsPrice = minions * 8.2;
    let trucksPrice = trucks * 2;

    let totalToysCount = puzzles + talkingDolls + bears + minions + trucks;
    let totalToysPrice = puzzlesPrice + talkingDollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if (totalToysCount >= 50) {
        totalToysPrice = totalToysPrice * 0.75;
    }

    totalToysPrice = totalToysPrice * 0.90;

    if (totalToysPrice >= excursion) {
        console.log(`Yes! ${(totalToysPrice - excursion).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(excursion - totalToysPrice).toFixed(2)} lv needed.`);
    }   
}
toyShop (["320","8","2","5","5","1"])
