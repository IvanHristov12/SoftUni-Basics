function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = String();
    let typeOfVacation = String();
    
    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            budget *= 0.3;
            typeOfVacation = "Camp"
        }
        else if (season === "winter"){
            budget *= 0.7;
            typeOfVacation = "Hotel"
        }
    }
    else if (budget <= 1000){
        destination = "Balkans";
        if (season ==="summer"){
            budget *= 0.4;
            typeOfVacation = "Camp";
        }
        else if (season ==="winter"){
            budget *= 0.8;
            typeOfVacation = "Hotel"
        }
    }
    else if (budget > 1000){
        destination = "Europe";
        budget *= 0.9;
        typeOfVacation = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${budget.toFixed(2)}`);
}
journey(["50", "summer"])