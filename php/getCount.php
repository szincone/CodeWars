function getCount($number) {
  $vowels = 'aeiou';
  $count = 0;
  for ($i = 0; $i < strlen($number); $i++) {
    if (strpos($vowels, $number[$i]) !== false) {
      $count += 1;
    }
  }
  return $count;
}
