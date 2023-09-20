function courierExpress(input){
    let weight = Number(input[0]);
    let delivery = input[1];
    let distance = Number(input[2]);

    let priceInCoints = 0;

    switch (delivery){
        
     case "standard":
    if (weight < 1){
        priceInCoints = 3 * distance;
    }
    else if (weight >= 1 && weight < 10){
        priceInCoints = 5 * distance;
    }
    else if(weight >= 10 && weight < 40){
        priceInCoints = 10 * distance;
    }
    else if(weight >= 40 && weight <90){
        priceInCoints = 15 * distance;
    }
    else if (weight >= 90 && weight <= 150){
        priceInCoints = 20 * distance;
    }
    break;
        case "express":
        if (weight < 1){
            priceInCoints = weight * (3 * 0.80);
        }
        else if (weight >= 1 && weight < 10){
            priceInCoints = 5 * 1.40;
        }
        else if(weight >= 10 && weight < 40){
            priceInCoints = 10 * 1.05;;
        }
        else if(weight >= 40 && weight <90){
            priceInCoints = (15 * distance) * (0.02 * 15);
        }
        else if (weight >= 90 && weight <= 150){
            priceInCoints = 20 * 1.01;;
        }
    }  
    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${(priceInCoints).toFixed(2)} lv.`);

}
courierExpress[("20", 
"standard",
"349")]

