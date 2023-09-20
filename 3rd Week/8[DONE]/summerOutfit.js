function summerOutfit(input){
    let temperature = Number(input[0]);
    let timeOfTheDay = input[1];

    if (temperature >= 10 && temperature <= 18){
        if (timeOfTheDay === "Morning"){
            console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`);
        }
        else if (timeOfTheDay === "Afternoon"){
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }
    if (temperature > 18 &&temperature <= 24){
        if (timeOfTheDay === "Morning"){
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
        else if (timeOfTheDay === "Afternoon"){
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        }
        else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }
    else if (temperature >= 25){
        if (timeOfTheDay === "Morning"){
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        }
        else if (timeOfTheDay === "Afternoon"){
            console.log(`It's ${temperature} degrees, get your Swim Suit and Barefoot.`);
        }
        else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }
    
}
summerOutfit (["16","Morning"])
