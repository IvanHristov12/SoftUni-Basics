function combinations(input){
    let n = Number(input[0]);
    let validCombinationsCounter= 0;

    for (let a = 0; a <= n; a++){
        for(let b = 0; b<= n; b++){
            for (let c = 0; c <= n; c++){
                if (a + b + c == n){
                    validCombinationsCounter++;
                }
            }
        }
    }
    console.log(validCombinationsCounter);
}
combinations(["25"])