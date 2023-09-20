function personalTitles(input){
    let age = Number(input[0]);
    let gender = input[1];
    if (gender == "m"){
        if (age >= 16){
            console.log("Mr.");
        }
        if (age < 16){
            console.log("Master");
        }
    }
    if (gender == "f"){
        if (age >= 16){
            console.log("Ms.");
        }
        if (age < 16){
            console.log("Miss");
        }
    }
}
personalTitles(["12", "f"])
