function maxNumber(input){
    let index = 0;
    let maxNumber = -9007199254740991;

    let command = input[index];
    index++;

    while(command !== "Stop"){
        let num = Number(command);
        if (num > maxNumber){
            maxNumber = num;
        }

        command = input[index];
        index++
    }
    console.log(maxNumber);
}
maxNumber(["-1",
"-2",
"Stop"])

