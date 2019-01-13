const unluckyDays = year => {
  let count = 0;
  const friday = 5; // friday equal to 5 in UTC
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getUTCDay() === friday) {
      // new Date(year, month, day)
      count += 1;
    }
  }
  return count;
};
