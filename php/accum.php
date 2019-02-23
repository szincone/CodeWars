function accum($s) {
  for ($i = 0; $i < strlen($s); $i++){
    $result .= strtolower(str_repeat($s[$i], $i+1)) . " ";
  }
  $result = ucwords($result);
  $result = preg_replace('#[ -]+#', '-', $result);
  return substr($result, 0, strlen($result) - 1);
}
