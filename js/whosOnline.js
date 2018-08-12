const whosOnline = friends => {
  // Empty storage vars
  let results = [];
  let resultsObj = {};
  let online = [];
  let offline = [];
  let away = [];

  // make sure friends isn't an empty object
  if (friends.length === 0) {
    return {};
  }

  // iterate through friends object, push any who meet criteria
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online" && friends[i].lastActivity <= 10) {
      online.push(friends[i].username);
    } else if (friends[i].status === "online" && friends[i].lastActivity > 10) {
      away.push(friends[i].username);
    } else {
      offline.push(friends[i].username);
    }
  }
  // only pushing arrays with actual values
  if (online.length === 0) {
    results.push({ offline, away });
  } else if (offline.length === 0) {
    results.push({ online, away });
  } else if (away.length === 0) {
    results.push({ online, offline });
  } else if (away.length != 0 && online.length != 0 && offline != 0) {
    results.push({ online, offline, away });
  } else {
    return resultsObj;
  }
  // assign array to empty object
  for (let i = 0; i < friends.length; i++) {
    resultsObj[i] = results[i];
  }
  // return first item in object, which was previously our entire array
  return resultsObj[0];
};
