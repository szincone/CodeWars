const michaelPays = (costs) => {
  //Insert your code here
  if (costs < 5) {
    costs = Number(costs.toFixed(2));
  }
  else {
    if (costs < 30) {
      costs = (costs - (costs * (1/3)))
      costs = Number(costs.toFixed(2))
      return costs;
    }
    return Number((costs - 10).toFixed(2));
  }
  return costs;
}
