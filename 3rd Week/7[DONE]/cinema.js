function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let money = 0

    if (type === "Premiere"){
        money = rows * columns * 12.00;

    }
    else if (type === "Normal"){
        money = rows * columns * 7.50;  
    }
    else if (type === "Discount"){
        money = rows * columns *5.00;
    }
    console.log(money.toFixed(2));
}
cinema(["Premiere","10","12"])
