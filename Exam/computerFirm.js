function computerFirm(input){
    let pcModels = Number(input[0]);
    let soldAndRating = Number(input[1]);

    let totalSales = 0;
    let totalRating = 0;
    salesCounter = 0;
    for (let i = 1; i < input.length; i++){
        let command = input[i];
        let rating = command % 10;
        let sales = Math.floor(command / 10);

        if (rating == 2){
            sales *= 0.00;
        }
        else if (rating == 3){
            sales *= 0.50;
        }
        else if (rating == 4 ){
            sales *= 0.70;
        }
        else if (rating == 5){
            sales *= 0.85;
        }
        else if (rating == 6){
            sales *= 1;
        }
        totalSales += sales;
        totalRating += rating
        salesCounter++;
    }
    console.log(totalSales.toFixed(2));
    console.log((totalRating / salesCounter).toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

