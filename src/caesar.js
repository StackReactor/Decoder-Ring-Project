// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (() => {
  const BOUNDARIES = {
    start: "a".charCodeAt(),
    end: "z".charCodeAt(),
  };
  function caesar(input, shift, encode = true) {
    if (!shift) return false;
    if (shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    input = input.toLowerCase();
    return input.split("").reduce((result, char) => { 
      const code = char.charCodeAt();
      if (code < BOUNDARIES.start || code > BOUNDARIES.end) return result + char;
      let shifted = code + shift;
      if (shifted > BOUNDARIES.end) {
        shifted = BOUNDARIES.start + (shifted - BOUNDARIES.end - 1);
      } else if (shifted < BOUNDARIES.start) {
        shifted = BOUNDARIES.end - (BOUNDARIES.start - shifted - 1);
      }
      return result + String.fromCharCode(shifted);
    }, ""); 
  }
  return { caesar };
})();
module.exports = { caesar: caesarModule.caesar };
