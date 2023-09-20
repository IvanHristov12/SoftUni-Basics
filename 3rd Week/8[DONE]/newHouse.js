function newHouse(input){
    let typeOfFlowers = input[0];
    let amountOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(typeOfFlowers){
        case "Roses":
            price = amountOfFlowers * 5;
            if (amountOfFlowers > 80){
                price *= 0.90;
            }
            break;
        case "Dahlias":
            price = amountOfFlowers * 3.80;
            if (amountOfFlowers > 90){
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = 2.80 * amountOfFlowers
            if (amountOfFlowers > 80){
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = amountOfFlowers * 3;
            if (amountOfFlowers < 120){
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = 2.50 * amountOfFlowers;
            if(amountOfFlowers < 80){
                price *= 1.20
            }
            break;
    }
    let diff = Math.abs(price - budget)
   if (budget >= price){
    console.log(`Hey, you have a great garden with ${amountOfFlowers} ${typeOfFlowers} and ${diff.toFixed(2)} leva left.`);
   }
   else if ( price > budget){
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
   }
}
newHouse(["Roses",
"55",
"250"])



