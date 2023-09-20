function uniquePINCodes(input){
    let firstNumUpBorder = Number(input[0]);
    let secondNumUpBorder = Number(input[1]);
    let thirdNumUpBorder = Number(input[2]);

    for (let num1 = 1; num1 <= firstNumUpBorder; num1++){
        for (let num2 = 1; num2 <= secondNumUpBorder; num2++){
            for( let num3 = 1; num3 <= thirdNumUpBorder; num3++){
                if (num1 % 2 === 0 && num3 % 2 === 0){
                    if (num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7){
                       console.log(`${num1} ${num2} ${num3}`);
                    }
                }
            }
        }
    }
}
uniquePINCodes(["3",
"5",
"5"])
