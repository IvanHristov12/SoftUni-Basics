function traveling(input){
    let destionaton = input[0];
    let neededMoney = Number(input[1]);


    let index = 2;
    let collectedMoney = 0;
    let currentMoney = Number(input[index]);

    while (destionaton !== `End`){
        while (collectedMoney < neededMoney) {
            currentMoney = Number(input[index]);
            collectedMoney += currentMoney;
            index++;
        }
        console.log(`Going to ${destionaton}!`);
        destionaton = input[index];
        neededMoney = Number(input[index + 1]);
        index += 2;
        collectedMoney = 0;
    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
