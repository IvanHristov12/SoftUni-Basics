function tennisRanklist(input){
    let tournamentsAttended = Number(input[0]);
    let startingPoints = Number(input[1]);

    let earnedPoints = 0;
    let W = 0;

    for (i = 2; i < input.length; i++){
        let currentTournament = input[i];

        switch (currentTournament){
            case `W`: earnedPoints += 2000; break;
            case `F`: earnedPoints += 1200; break;
            case `SF`: earnedPoints += 720; break;
        }
        if (currentTournament === `W`){
            W++;
        }
    }
    let totalPoints = startingPoints + earnedPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(earnedPoints / tournamentsAttended)}`);
    console.log(`${(W / tournamentsAttended * 100).toFixed(2)}%`);
}
tennisRanklist([`4`, `750`, `SF`, `W`, `SF`, `W`])
