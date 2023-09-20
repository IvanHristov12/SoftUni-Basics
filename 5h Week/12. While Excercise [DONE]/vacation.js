function vacation(input) {
    let index = 0;
    let startingMoney = Number(input[index++]);
    let money = Number(input[index++]);
    let action = "";
    let currentMoney = 0;
    let daySpent = 0;
    let dayCounter = 0;

    while (money < startingMoney) {
        action = input[index++];
        currentMoney = Number(input[index++]);
        dayCounter++;
        switch (action) {
            case "spend":
                money -= currentMoney;
                if (money < currentMoney) {
                    money = 0;
                }
                daySpent++;
                break;
            case "save":
                money += currentMoney;
                daySpent = 0;
                break;
        }
        if (daySpent >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            break;
        }
    }
    if (money >= startingMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

