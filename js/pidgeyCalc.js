function pidgeyCalc(pidgeys, candy) {
  let totalXP = 0;
  do {
    if (candy >= 12 && pidgeys > 0) {
      candy -= 12;
      pidgeys -= 1;
      totalXP += 500;
      candy += 1;
    } else if (candy < 12 && pidgeys > 0) {
      pidgeys -= 1;
      candy += 1;
    } else {
      return totalXP;
    }
  } while (pidgeys >= 0);
}
