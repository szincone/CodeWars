const race = (v1, v2, g) => {
  // your code
  // find rate and divide by lead, subtract out the hours from the mins, mins from secs
  let hours = Math.floor(g / (v2 - v1));
  let mins = Math.floor(((g % (v2 - v1)) * 60) / (v2 - v1));
  let secs = Math.floor(
    ((((g % (v2 - v1)) * 60) % (v2 - v1)) * 60) / (v2 - v1)
  );
  let result = [];
  if (v1 >= v2) {
    return null;
  } else {
    result = [hours, mins, secs];
  }
  return result;
};
