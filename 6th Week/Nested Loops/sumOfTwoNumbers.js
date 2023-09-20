function sumOfTwoNumbers(input){
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationsCounter= 0;
    let isFound = false;
    for ( i = startInterval ; i<= endInterval; i++){
        for (x = startInterval; x <= endInterval; x++){
            combinationsCounter++;
            if (i + x == magicNumber){
                console.log(`Combination N:${combinationsCounter} (${i} + ${x} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
