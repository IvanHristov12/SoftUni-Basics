function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]) / 100;
    let space = length * width * height;
    let spaceLit = space / 1000;
    let neededLit = spaceLit * (1- percentage)


    console.log(neededLit);
}

fishTank(["85", "75", "47", "17"]);