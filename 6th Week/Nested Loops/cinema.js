function cinema(input){
    let index = 0;

    let command = input[index];
    index++;

    let countStudentTicket = 0;
    let countStandardTicket = 0;
    let countKidTicket = 0;
    let countTotalTicket = 0;

    while (command !== `Finish`){
        let movieName = command;

        let freespace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let countSellTicket = 0;

        while (ticketType !== `End`){
            countSellTicket++;

            switch(ticketType){
                case `student`: countStudentTicket++; break;
                case `standard`: countStandardTicket++; break;
                case `kid`: countKidTicket++; break;
            }
            if (countSellTicket === freespace){
                break;
            }
            ticketType = input[index];
            index++;
        }
        countTotalTicket += countSellTicket;
        let percentageFull = countSellTicket / freespace * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let percentageStudentTicket = countStudentTicket / countTotalTicket * 100;
    let percentageStandard = countStandardTicket / countTotalTicket * 100;
    let percentageKidTicket = countKidTicket / countTotalTicket * 100;

    console.log(`Total tickets: ${countTotalTicket}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`);
}
cinema