function excursion(input){
    let peopleInGroup = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    //	Нощувка - 20 лв.
    //	Карта за транспорт - 1.60 лв.
    //	Билет за музей - 6 лв.

    let nightsPerPerson = nights * 20;
    let transportPerPerson = transportCards * 1.60;
    let museumPerPerson = museumTickets * 6;
    let sumPerPerson = nightsPerPerson + transportPerPerson + museumPerPerson;
    let sumForEveryone = sumPerPerson * peopleInGroup;
    let sumForEveryonePlusPercentage = sumForEveryone * 1.25;
    console.log(sumForEveryonePlusPercentage.toFixed(2));
}
excursion(["131",
"9",
"33",
"46"])
