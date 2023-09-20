function exam(input){
    let weight = Number(input[0]);
    let delivery = input[1];
    let distance = Number(input[2]);

    let priceInCoints = 0;

    if (delivery === `standard`){

    if (weight < 1){
        priceInCoints = 0.03 * distance;
    }
    else if (weight >= 1 && weight < 10){
        priceInCoints = 0.05 * distance;
    }
    else if(weight >= 10 && weight < 40){
        priceInCoints = 0.10 * distance;
    }
    else if(weight >= 40 && weight <90){
        priceInCoints = 0.15 * distance;
    }
    else if (weight >= 90 && weight <= 150){
        priceInCoints = 0.20 * distance;
    }
    }
    else if (delivery === `express`){
        if (weight < 1){
            priceInCoints = (0.03 * distance) + ((weight * (0.80 * 0.03)) * distance);
        }
        else if (weight >= 1 && weight < 10){
            priceInCoints = (0.05 * distance) + ((weight * (0.40 * 0.05)) * distance);
        }
        else if(weight >= 10 && weight < 40){
            priceInCoints = (0.10 * distance) + ((weight * (0.05 * 0.10)) * distance);
        }
        else if(weight >= 40 && weight <90){
            priceInCoints = (0.15 * distance) + ((weight * (0.02 * 0.15)) * distance);
        }
        else if (weight >= 90 && weight <= 150){
            priceInCoints = (0.20 * distance) + ((weight * (0.01 * 0.20)) * distance);
        }
    }
console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${(priceInCoints).toFixed(2)} lv.`);
}
exam(["87",
"express",
"130"])



