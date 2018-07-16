function predictAge (age1,age2,age3,age4,age5,age6,age7,age8) {
    // your code
    let paramArr = [];
    
    // spread operator to push all args into empty paramArr
    paramArr.push(...arguments);
    
    // map through array, multiply each element by itself
    paramArr = paramArr.map(x => x * x);
    
    // reduce array to find total sum
    paramArr = paramArr.reduce((a,b) => a + b)
    
    // find square root, divide number by 2, round down
    paramArr = Math.floor(Math.sqrt(paramArr)/2);
    
    // return total
    return paramArr;
}
