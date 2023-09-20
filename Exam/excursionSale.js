function excursionSale(input){
    let seaExcursions = Number(input[0]);
    let mountExcurcions = Number(input[1]);
    let index = 2;
    let command = input[index];

    let isDone = false; 
    let seaCounter = 0;
    let mountCounter = 0;
    let profit = 0;
    while (command !== `Stop`){

        switch (command){
            case `sea`:
                if (seaCounter == seaExcursions){
                    break;
                }
                profit += 680;
                seaCounter++;
                
                break;
        }
        switch (command){
            case `mountain`:
                if (mountCounter == mountExcurcions){
                    break;
                }
                profit += 499;
                mountCounter++;
                
                break;
        }
        if (mountCounter >= mountExcurcions && seaCounter >= seaExcursions){
            isDone = true;
            break;
        }
        index++;
        command = input[index];
    }
    if (isDone){
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${profit} leva.`);
    }
    else if (!isDone){
        console.log(`Profit: ${profit} leva.`);
    }
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
