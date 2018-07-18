let makeNegative = (num) => {
    // if equal to 0 or already negative return
    if (num <= 0) {
        return num;
    }
    // else times by -1 to make negative an return
    else {
        num = num * -1;
    }
     return num;
}
