function examPreparation(input) {
    let maxBadGrades = Number(input[0]);
    let badGradesCounter = 0;
    let index = 1;

    let isEnough = false;

    let sumGrades = 0;
    let excCounter = 0;

    let nameOfExcercise = input[index];
    let currentGrade = Number(input[index + 1]);
    let lastExcercise = input[index - 2];

    while (badGradesCounter < maxBadGrades) {

        nameOfExcercise = input[index];
        currentGrade = Number(input[index + 1]);
        lastExcercise = input[index - 2];

        if (nameOfExcercise === "Enough") {
            isEnough = true;
            break;
        }

        if (currentGrade <= 4) {
            badGradesCounter++;
        }


        sumGrades = sumGrades + currentGrade;

        index++;
        index++;
        excCounter++;
    }
    let averageGrade = sumGrades / excCounter;

    if (isEnough === true) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${excCounter}`);
        console.log(`Last problem: ${lastExcercise}`);
    }
    else{
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


