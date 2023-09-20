function trekkingMania(input) {
    let amountOfGroups = Number(input[0]);

    let musala = 0;
    let monblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i <= amountOfGroups; i++) {
        let peopleInGroups = Number(input[i]);

        if (peopleInGroups <= 5) {
            musala += peopleInGroups;
        }
        else if (peopleInGroups <= 12) {
            monblanc += peopleInGroups;
        }
        else if (peopleInGroups <= 25) {
            kilimandjaro += peopleInGroups;
        }
        else if (peopleInGroups <= 40) {
            k2 += peopleInGroups;
        }
        else {
            everest += peopleInGroups;
        }
    }
    let totalPeople = musala + monblanc + kilimandjaro + k2 + everest;

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblanc / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])

