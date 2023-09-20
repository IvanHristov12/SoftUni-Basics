function histogram(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let numbersCounter = Number(input[0]);

    for (i = 1; i <= numbersCounter; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        }
        else if (currentNumber >= 200 && currentNumber <= 399) {
            p2++;
        }
        else if (currentNumber >= 400 && currentNumber <= 599) {
            p3++;
        }
        else if (currentNumber >= 600 && currentNumber <= 799) {
            p4++;
        }
        else {
            p5++;
        }
    }
    console.log(`${(p1 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbersCounter * 100).toFixed(2)}%`);
}
histogram(["3",
    "1",
    "2",
    "999"])
