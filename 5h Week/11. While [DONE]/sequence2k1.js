function sequence2k1(input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    while (index <= n){
        console.log(index);
        index = index * 2 + 1;
    }
}
sequence2k1(["31"])