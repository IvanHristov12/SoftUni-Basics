function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let space = width * length * height;

    let index = 3;
    let command = input[index];

    let totalBoxes = 0;
    while (command !== `Done`){
        let boxes = Number(command);

        totalBoxes += boxes;
        if (space <= totalBoxes){
            console.log(`No more free space! You need ${totalBoxes - space} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === `Done`){
        if(space > totalBoxes){
            console.log(`${space - totalBoxes} Cubic meters left.`);
        }
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
