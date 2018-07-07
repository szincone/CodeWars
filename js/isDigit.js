function isDigit(s) {
  if (s <= 0) {
        return !isNaN(parseFloat(s));
    }
    else {
        return isFinite(s);
    }
}
