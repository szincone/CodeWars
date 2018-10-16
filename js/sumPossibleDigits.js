const digits = (x) => {
    // turn to string
    let digits = x.toString();
    // iterate over string, turn each char into a number
    let xArr = Array.from(digits).map(x => parseInt(x));
    // empty total array
    let totalArr = [];
    // need 2 loops for this bad boy since you need
    // the total of the n and all elements, then n+1
    // and all elements, and so on
    for (let i = 0; i < xArr.length; i++) {
        for (let j = i + 1; j < xArr.length; j++) {
            totalArr.push(xArr[i] + xArr[j])
        }
    }
    return totalArr;
}
