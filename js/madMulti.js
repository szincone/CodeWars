// divide by reciprocal, bitwise gets rid of decimals,
// .5 makes the multiplication consistent (had to be under 30 chars)
madMul=(a,b)=>~~(a/(1/b)+.5)
