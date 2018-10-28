function highAndLow(numbers){
  // split num string into array and sort high to low
  numbers = numbers.split(" ").sort((a, b) => a - b)
  // grabs lowNum
  const lowNum = numbers[0]
  // grabs highNum
  const highNum = numbers[numbers.length-1]
  // return in format required
  return `${highNum} ${lowNum}`
}
