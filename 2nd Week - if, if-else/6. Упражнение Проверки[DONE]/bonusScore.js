function bonusScore(input) {
    let startPoints = Number(input[0]);
    let bonusPoints = 0
    let bonusPoints2 = 0
    if (startPoints <= 100) {
        bonusPoints = 5
    }
    if (startPoints > 100) {
        bonusPoints = startPoints * 0.2
    }
    if (startPoints > 1000) {
        bonusPoints = startPoints * 0.1
    }
    if (startPoints % 2 == 0) {
        bonusPoints2 = 1
    }
    else if (startPoints % 10 == 5) {
        bonusPoints2 = 2
    }
    console.log(bonusPoints + bonusPoints2);
    console.log(startPoints + bonusPoints + bonusPoints2);
}
bonusScore(["2703"])