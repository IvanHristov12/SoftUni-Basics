function areaOfFigures(input){
    let figure = input[0];
    let size = Number(input[1]);
    let length = Number(input[2]);
    if (figure == "square"){
        console.log((size * size).toFixed(3));
    }
    else if(figure == "rectangle"){
        console.log((size * length).toFixed(3));
    }
    else if (figure == "circle") {
        console.log((Math.PI * Math.pow(size,2)).toFixed(3));
    }
    else if (figure == "triangle") {
        console.log((size * length / 2).toFixed(3));
    }
}
areaOfFigures(["square", "5"])
console.log("------------------------------");
areaOfFigures(["rectangle","7","2.5"])
console.log("------------------------------");
areaOfFigures(["circle","6"])
console.log("------------------------------");
areaOfFigures(["triangle","4.5","20"])
