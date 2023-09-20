function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0
    let totalEarned = 0 

    if (type === "Premiere"){
        price = 12.00;
        totalEarned = rows * columns * price;
    }
    else if(type=== "Normal"){
        price = 7.50;
        totalEarned = rows * columns * price;
    }
    else if(type === "Discount"){
        price = 5;
        totalEarned = rows * columns * price;
    }
    console.log(`${totalEarned.toFixed(2)} leva.`);
}
cinema (["Premiere","10","12"])
