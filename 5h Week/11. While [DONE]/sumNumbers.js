function sumNumbers(input){
    let index = 0;
    let command = Number(input[index]);
    index++;

    let sum = 0;
    while (true){
        if (sum >= command){
            break;
        }

        let currentNumber = Number(input[index]);
        index++;

        sum+= currentNumber;
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

