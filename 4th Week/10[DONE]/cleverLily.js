function cleverLily(input){

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toysCounter=0;
    let totalMoney= 0;
    let stolenMoney=0;
    let test = 1;

    for (i = 1; i <= age; i++){
        if ( i % 2 != 0){
            toysCounter += 1;
        }
        if (i % 2 === 0){
            money += 10 * test;
            stolenMoney++;
            test++;
        }   
    }
    totalMoney = (toysCounter * toyPrice) + (money - stolenMoney);
    if (totalMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}
cleverLily(["15",
"170.00",
"9"])
