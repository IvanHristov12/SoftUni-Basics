function lunchBreak(input){
    let series = input[0];
    let episodeLength = Number(input[1]);
    let brakeLength = Number(input[2]);

    let lunch = brakeLength * 1/8
    let relax = brakeLength * 1/4
    let remainingBrake = brakeLength - (lunch + relax)

    if (remainingBrake >= episodeLength) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(remainingBrake - episodeLength)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episodeLength - remainingBrake)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones","60","96"])
