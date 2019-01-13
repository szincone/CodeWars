function isLeapYear(year) {
  if (new Date(year, 1, 29).getDate() === 29) {
    // gets 29 days after the 2nd month of the year
    // if it's feb 29th it's leap, if it's march 1st it's not
    return true;
  } else {
    return false;
  }
//   one-liner solution below
//   return new Date(year, 1, 29).getDate() === 29 ? true: false
}

