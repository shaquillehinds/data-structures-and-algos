// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const reducedMap = str.split("").reduce((reduced, curr) => {
    reduced[curr] = reduced[curr] ? reduced[curr] + 1 : 1;
    if (!reduced.max) reduced.max = { char: curr, amount: 1 };
    else {
      if (reduced.max.amount < reduced[curr]) {
        reduced.max.char = curr;
        reduced.max.amount = reduced[curr];
      }
    }
    return reduced;
  }, {});

  return reducedMap.max.char;
}

module.exports = maxChar;
