function onTimeForTheExam(input){
    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let timeExam = hourOfExam * 60 + minuteOfExam;
    let timeArrive = hourOfArrival * 60 + minuteOfArrival;
    let time = Math.abs(timeExam - timeArrive);

    if (timeArrive < timeExam && timeExam - timeArrive > 30){
        console.log("Early");
        let h = Math.floor(time / 60);
        let min = time % 60;
        if (min < 10){
            console.log(`${h}:0${min} hours before the start`);
        } 
        else if (h >= 1){
            console.log(`${h}:${min} hours before the start`);
        }
        else if (h < 1){
            console.log(`${min} minutes before the start`);
        }
    }
    else if (timeArrive > timeExam){
        console.log("Late");
        let h = Math.floor(time / 60);
        let min = time % 60;
        if (h < 1){
            console.log(`${min} minutes after the start`);
        }
        else if (min < 10){
            console.log(`${h}:0${min} hours after the start`);
        }
        else {
            console.log(`${h}:${min} hours after the start`);
        }
    }
    else if ( timeArrive = timeExam && timeExam - timeArrive <= 30){
        console.log("On time");
        let h = Math.floor(time / 60);
        let min = time % 60;
        if (time <= 30){
            console.log(`${min} minutes before the start`);
        }
    }
}
onTimeForTheExam(["9","00","8","30"])