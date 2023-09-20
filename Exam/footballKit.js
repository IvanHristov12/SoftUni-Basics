function footballKit(input){
    let shirtPrice = Number(input[0]);
    let sumForReward = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let bootsPrice = (shirtPrice + shortsPrice) * 2;
    let totalSum = shirtPrice + shortsPrice + socksPrice + bootsPrice;
    let sumAfterDiscount = totalSum * 0.85;

    if (sumAfterDiscount >= sumForReward){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${sumAfterDiscount.toFixed(2)} lv.`);
    }
    else if (sumForReward > sumAfterDiscount) {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(sumForReward - sumAfterDiscount).toFixed(2)} lv. more.`);
    }
}
footballKit(["59.99",
"500"])

