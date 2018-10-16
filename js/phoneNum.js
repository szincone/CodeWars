function createPhoneNumber(numbers) {
  // beginning of phone number
  let phoneNumber = ["("];
  // push all digits of numbers array into phone number
  for (let i = 0; i < numbers.length; i++) {
    phoneNumber.push(numbers[i]);
    // insert second parenthese plus space
    if (i === 2) {
      phoneNumber.push(") ");
    }
    // insert our hypen in the 5th index
    else if (i === 5) {
      phoneNumber.push("-");
    } else {
      // do nothing
    }
  }
  // turn array into string
  phoneNumber = phoneNumber.join("");
  // return value
  return phoneNumber;
}
