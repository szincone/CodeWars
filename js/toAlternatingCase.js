const toAlternatingCase = (string) => {
    // empty result var
    let solveString = [];
    // return number if number is passed
    if (typeof string === 'number'){
        return string;
    }
    // iterate over array and flip case of individual element
    // if string not letter, just push to string array
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            solveString.push(string[i].toUpperCase());
        }
        else if (string[i] === string[i].toUpperCase()) {
            solveString.push(string[i].toLowerCase());
        }
        else {
            solveString.push(string[i]);
        }
    }
    return solveString;
}
