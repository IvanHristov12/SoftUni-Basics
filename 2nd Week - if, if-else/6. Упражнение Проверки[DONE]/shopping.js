function shopping(input){
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let GPUprice = GPU * 250;
    let CPUprice = 0.35 * GPUprice * CPU;
    let RAMprice = 0.10 * GPUprice * RAM;
    let totalPrice = GPUprice + CPUprice + RAMprice;
    if (GPU > CPU) {
        totalPrice *= 0.85
    }
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900","2","1","3"])
