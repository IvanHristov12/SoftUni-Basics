function TrainTheTrainers(input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sumGrade = 0;
    let counter = 0

    while (command !== `Finish`){
        counter++;
        let presentationName = command;
        let sumCurrentGrade = 0;
        for (let i =0; i< n; i++){
            let grade = Number(input[index]);
            index ++;

            sumCurrentGrade+= grade;
        }

        let temAvg= sumCurrentGrade / n;
        sumGrade += temAvg;
        console.log(`${presentationName} - ${temAvg.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    let avgGrade = sumGrade / counter; 
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
TrainTheTrainers