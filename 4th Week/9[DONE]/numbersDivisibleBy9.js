function numbersDivisibleBy9(input){
    num1 = Number(input[0]);
    num2 = Number(input[1]);
    let sum = 0;
    let buff = "";

    for (i = num1; i <= num2; i++){
        if (i % 9 === 0){
            sum += i;
            buff += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}
numbersDivisibleBy9(["100", "200"])