function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let extrasClothesPrice = Number(input[2]);

    let filmDecoration = budget * 0.1;
    if (extras > 150 ) {
        extrasClothesPrice = extrasClothesPrice * 0.9;
    }
    let totalExtrasPrice = extrasClothesPrice * extras;
    let totalCost = filmDecoration + totalExtrasPrice;
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    }
    else if (totalCost <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}
godzillaVsKong (["20000","120","55.5"])
