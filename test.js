/ Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    let joined;
    let final = []
    let numbers = [{ 11: 'a' }, { 21: 'b' }, { 31: 'c' }, { 41: 'd' }, { 51: 'e' }, { 12: 'f' }, { 22: 'g' },
    { 32: 'h' }, { 42: 'i' }, { 42: 'j' }, { 52: 'k' }, { 13: 'l' }, { 23: 'm' }, { 33: 'n' }, { 43: 'o' },
    { 53: 'p' }, { 14: 'q' }, { 24: 'r' }, { 34: 's' }, { 44: 't' }, { 54: 'u' }, { 15: 'v' }, { 25: 'w' },
    { 35: 'x' }, { 45: 'y' }, { 55: 'z' }];
    if (encode) {
      let letters = input.split('');
      for (let i = 0; i < letters.length; i++) {
        if (letters[i] == ' ') {
          final.push(letters[i])
        }
        for (let j = 0; j < numbers.length; j++) {
          console.log(letters[i])
          if (letters[i].includes(Object.values(numbers[j]))) {
            final.push(Object.keys(numbers[j]).join(''));
          }
        }
      }
      joined = final.join('')
      console.log(joined)
      return joined;
      //========================================================================================
    } else if (!encode) {
      numbers.push({ 65: ' ' })
      let spacesAdded = input.replace(" ", 65);
      matched = spacesAdded.match(/.{1,2}/g)
      let matchedArr = []
      if (spacesAdded.length % 2 !== 0) return false;
      for (let j = 0; j < matched.length; j++) {
        matchedArr.push(Number(matched[j]))
      }
      for (let i = 0; i < matchedArr.length; i++) {
        for (let k = 0; k < numbers.length; k++) {
          let currentNumber = Object.keys(numbers[k])[0];
          if (matchedArr[i] == currentNumber) {
            let currentLetter = Object.values(numbers[k]);
            final.push(currentLetter.join());
          }
        }
      }
      joined = final.join('')
      console.log('final', joined)
      return joined;
    }
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };