const combat = (health, damage) => {
  // if health goes below zero, return 0, else return damage
  if ((health-damage) > 0 ) {
    return (health - damage);
  }
  else {
    return 0;
  }
}
