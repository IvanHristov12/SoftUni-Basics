function skiTrip(input){
    let nights = Number(input[0]) -1;
    let room = input[1];
    let rating = input[2];

    let price = 0;

    switch(room){
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (nights < 10){
                price *= 0.70;
            }
            else if (nights >= 10 && nights <= 15){
                price *= 0.65;
            }
            else if (nights > 15){
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (nights < 10){
                price *= 0.90;
            }
            else if (nights >= 10 && nights <= 15){
                price *= 0.85;
            }
            else if (nights > 15){
                price *= 0.80;
            }
            break;
    }
    if (rating === "positive"){
        price *= 1.25;
    }
    else if (rating === "negative"){
        price *= 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["30", "president apartment", "negative"])