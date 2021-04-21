// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // substitution alphabet must exist and be exactly 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false;

    //Global Variables
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const userInput = input.toLowerCase().split("");
    const userAlphabet = alphabet.toLowerCase().split("");

    // substitution alphabet can not have any repeated characters
    const onlyUniqueChars = userAlphabet.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const secretMessage = () => {
      let result = [];
      // start with an empty array
      const coded = (char) => {
        const charIndex = actualAlphabet.indexOf(char);
        // variable char becomes the index of each character in the actual alphabet
        const codedChar = userAlphabet[charIndex];
        // codedChar holds the value of userAlphabet coded with the charIndex array
        result.push(codedChar);
        // push the codedChar to the result
      };
      userInput.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : coded(char);
      });
      return result.join("");
      // return the result as a string
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = userAlphabet.indexOf(char);
        const decodedChar = actualAlphabet[charIndex];
        result.push(decodedChar);
      };
      userInput.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // errors are handled, next encode or decode.
    return encode ? secretMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
