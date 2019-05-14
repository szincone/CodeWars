function outed(meet, boss) {
  let total = 0;
  const meetKeys = Object.keys(meet);
  const meetValues = Object.values(meet);
  meetKeys.forEach((name, i) => {
    if (meetKeys[i] === boss) {
      meetValues[i] *= 2;
    }
    total += meetValues[i];
  });
  return total / meetValues.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
