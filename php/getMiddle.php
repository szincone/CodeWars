function getMiddle($text) {
  if (strlen($text) % 2 == 0) {
    return $text[(strlen($text) - 1) / 2] . $text[(strlen($text)) / 2];
  }
  return $text[(strlen($text)) / 2];
}
