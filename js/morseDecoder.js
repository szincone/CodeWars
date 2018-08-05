const decodeMorse = morseCode => {
  //your code here
  let result = "";
  let morseCodeWords = morseCode.split("   ");
  for (let i in morseCodeWords) {
    let morseCodeArray = morseCodeWords[i].split(" ");
    for (let j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        result += MORSE_CODE[morseCodeArray[j]];
      }
    }
    result += " ";
  }
  result = result.trim();
  return result;
};

