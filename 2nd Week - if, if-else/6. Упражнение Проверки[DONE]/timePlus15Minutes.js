function timePlus15Minutes(input){
    let hours = Number(input[0])
    let minutes = Number(input[1]) + 15
 
    if (minutes > 59) { 
        minutes -= 60
        hours += 1
    }
 
    if (hours >= 24) hours -= 24
    if (minutes < 10) minutes = '0' + minutes
 
    console.log(`${hours}:${minutes}`);
}
timePlus15Minutes(["1", "46"])