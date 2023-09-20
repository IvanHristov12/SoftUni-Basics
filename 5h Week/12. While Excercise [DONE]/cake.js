function cake(input) {
    let index = 2;
    let length = Number(input[0]);
    let width = Number(input[1]);

    let command = input[index];
    let cakeSize = length * width;

    let pieces = 0

    while (command !== `STOP`) {
        let piecesTaken = Number(input[index])

        pieces += piecesTaken

        if (pieces > cakeSize) {
            console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`);
            break;
        }

        index++;
        command = input[index]
    }

    if (pieces <= cakeSize) {
        console.log(`${cakeSize - pieces} pieces are left.`)
    }
}
cake[("10",
    "2",
    "2",
    "4",
    "6",
    "STOP")]

