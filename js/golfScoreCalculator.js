function golfScoreCalculator(parList, scoreList){
  let total = 0;
  let parList_copy = parList;
  let scoreList_copy = scoreList;
  for (let i = 0; i < parList.length; i++){
    let parRound = Number(parList_copy.substring(0,1));
    parList_copy = parList_copy.substring(1);
    let scoreRound = Number(scoreList_copy.substring(0,1));
    scoreList_copy = scoreList_copy.substring(1);
    total += scoreRound - parRound;
  }
  return total;
}
