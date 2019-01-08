function descendingOrder(n){
  const sorted_array = parseInt(n.toString().split('').map(Number).sort().reverse().join(""), 10)
  return sorted_array
}
