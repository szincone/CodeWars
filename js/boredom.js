function boredom(staff) {
  let total = 0;
  const staffDepts = Object.values(staff);
  staffDepts.forEach((dept) => {
    switch (dept) {
      case 'accounts':
        total += 1;
        break;
      case 'finance':
        total += 2;
        break;
      case 'canteen':
        total += 10;
        break;
      case 'regulation':
        total += 3;
        break;
      case 'trading':
        total += 6;
        break;
      case 'change':
        total += 6;
        break;
      case 'IS':
        total += 8;
        break;
      case 'retail':
        total += 5;
        break;
      case 'cleaning':
        total += 4;
        break;
      case 'pissing about':
        total += 25;
        break;
      default:
        break;
    }
  });
  if (total >= 100) {
    return 'party time!!';
  }
  if (total > 80) {
    return 'i can handle this';
  }
  return 'kill me now';
}
