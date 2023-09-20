function graduation(input){
    let index = 1;
    let nameOfStudent = input[0];
    let grades = Number(input[index])
    index++;

    let allGrades = 0;
    let year = 1;
    let badGradeCount = 0;
    while( year <= 12 ){
        if (grades < 4 ){
            badGradeCount++;
            if (badGradeCount >= 2){
                console.log(`${nameOfStudent} has been excluded at ${year} grade`);
                break;
            }
            continue;
        }
        allGrades += grades;
        year++;

        grades = Number(input[index]);
        index++;
    }

    let averageGrade = allGrades / 12;

    if (year >= 12){
        console.log(`${nameOfStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"2",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

