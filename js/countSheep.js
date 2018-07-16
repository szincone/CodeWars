// returns a string counting sheep, based off your param
var countSheep = function (num){
  //your code here
  let sheepArr = [];
  
  for (let i = 0; i < num; i++) {
    sheepArr.push((i+1) + " sheep...");
  }
  return sheepArr.join("");
}
