function oldBooks(input){
    let favBook = input[0];
    let index = 1;
    let bookCounter= 0;

    let bookIsFound = false;

    let nextBook = input[index];

    while(nextBook !== `No More Books`){
        if (nextBook === favBook){
            bookIsFound = true;
            break;
        }

        index++;
        nextBook = input[index];
        bookCounter++;
    }
    if (bookIsFound === false ){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }
    else {
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

