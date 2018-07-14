const onesAndZeros = arr => {
    // your code
    let decimalTotal = 0;
    let binaryMultiplier = 2;
    let reversedNumbers = arr.reverse();
    
    // First add one if there's a 1 in the 1's place
    if (reversedNumbers[0] === 1) {
        decimalTotal += 1;
        console.log(decimalTotal)
    } 
    // We reversed it, so skip first element, and if a 1, add the binaryMultiplier
    // times the multiplier by 2 every iteration
    for (let i = 1; i < arr.length; i++) {
        if (reversedNumbers[i] === 1) {
            decimalTotal += binaryMultiplier;
            binaryMultiplier *= 2;
        }
        // if no value, still need to multiply the multiplier by 2
        else if (reversedNumbers[i] === 0) {
            binaryMultiplier *= 2;
        }
    }
    return decimalTotal;
};
