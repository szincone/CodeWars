const distanceCycled = (time, gear, cadence) => {
  //your code here!!!
  let gears = gear.replace(/x/g, "").split("");
  // get first two and last two array elements using slice
  // join into string and convert to number
  let frontGears = Number(gears.slice(0, 2).join(""));
  let backGears = Number(
    gears
      .reverse()
      .slice(0, 2)
      .reverse()
      .join(""),
  );
  // use metres of development algorithm in provided instructions
  let development = 2.11115 * (frontGears / backGears);
  // turns
  let turns = cadence * time
  // multiply all params, divide by 1000 and get only 3 decimal places
  return `You cycled ${Number((turns * development) / 1000).toFixed(
    3,
  )} kilometers!`;
};
