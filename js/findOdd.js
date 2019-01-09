function findOdd(A) {
  //happy coding!
  const sortedArray = {}
  let count = 0
  A.forEach(num => {
    if (sortedArray.hasOwnProperty(num)) {
      sortedArray[num] += 1
    }
    else {
      sortedArray[num] = 1
    }
  })
  for (let prop in sortedArray) {
    if (sortedArray[prop] % 2 === 1 ){
      return Number(prop)
    }
  }
}
