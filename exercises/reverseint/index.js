// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
  const r = parseInt(
    n
      .toString()
      .split("")
      .reduce((t, c) => c + t, "")
  );
  return n < 0 ? r * -1 : r;
};

module.exports = reverseInt;
