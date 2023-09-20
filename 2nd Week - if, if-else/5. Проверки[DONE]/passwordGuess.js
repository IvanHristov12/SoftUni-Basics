function passwordGuess(input){
    let password = input[0];
    let setPassword = "s3cr3t!P@ssw0rd";
    if ( password === setPassword ) {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!"); 
    }
}
passwordGuess (["qwerty"])