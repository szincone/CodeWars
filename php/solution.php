function solution($number){
  $result = 0;
  for ($i = 0; $i < $number; $i++){
    if ($i % 5 == 0 && $i % 3 == 0){
      $result += $i;
    }
    elseif ($i % 5 == 0){
      $result += $i;
    }
    elseif ($i % 3 == 0){
      $result += $i;
    }
  }
  return $result;
}
