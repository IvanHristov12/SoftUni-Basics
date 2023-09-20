function walking(input){
    let goal = 10000;
    let index = 0;
    let command = input[index];
    let totalSteps = 0;

    let isDone = false; 
    while (command !== `Going home`){
        let steps = Number(command);
        totalSteps += steps;

            if (totalSteps >= goal){
                console.log(`Goal reached! Good job!`);
                console.log(`${totalSteps - goal} steps over the goal!`);
                break;
            }


        index++;
        command = input[index];
    }

    if(command === `Going home`){
        let stepsHome = Number(input[index+1]);
        isDone = true;

        totalSteps += stepsHome;

        if (totalSteps >= goal){
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - goal} steps over the goal!`);
        }
        else {
            console.log(`${goal - totalSteps} more steps to reach goal.`);
        }
    }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

