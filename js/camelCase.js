String.prototype.camelCase = function() {
  let joinedString = [];
  for (let i = 0; i < this.length; i++) {
    if (this.charAt(i) === " ") {
      joinedString.push(this.charAt(i + 1).toUpperCase());
      i += 1;
    } else {
      joinedString.push(this.charAt(i));
    }
    joinedString[0] = joinedString[0].toUpperCase();
  }
  return joinedString.join("");
};
