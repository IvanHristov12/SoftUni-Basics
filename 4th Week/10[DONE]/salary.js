function salary(input){
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= input.length; i++){

        let currentTab = input[i];
        switch(currentTab){
            case `Facebook`: salary -= 150; break;
            case `Instagram`: salary -= 100; break;
            case `Reddit`: salary -= 50; break;
        }
    }
    if (salary <= 0){
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(Math.abs(salary));
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
