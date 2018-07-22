let getCount = str => {
    // reassign string
    let stringVar = str;
    // string variable to store count
    let vowelsCount = 0;
    // vowels array to compare string iterable too
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < stringVar.length; i++) {
        // comapre vowels array to string iterable, if match 
        // it will return the index it's found at, so greater than
        // -1 is a match, add to vowelsCount var
        if (vowels.indexOf(stringVar[i]) > -1) {
            vowelsCount += 1;
        } else {
            // do nothing
        }
    }
    return vowelsCount;
};
