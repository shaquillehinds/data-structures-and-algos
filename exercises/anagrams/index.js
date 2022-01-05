// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sortAndJoin(stringA) === sortAndJoin(stringB);
}

module.exports = anagrams;

function sortAndJoin(str) {
  return str
    .replace(/[^\w+]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join();
}

// function anagrams(stringA, stringB) {
//   const args = [stringA.replace(/[^\w+]/g), stringB.replace(/[^\w+]/g)];
//   const reduced = [];
//   for (let arg of args) {
//     reduced.push(
//       arg
//         .toLowerCase()
//         .split("")
//         .reduce(
//           (reduce, curr) => ((reduce[curr] = reduce[curr] + 1 || 1), reduce),
//           {}
//         )
//     );
//   }
//   if (args[1].length !== args[0].length) return false;
//   for (let key in args[0].length > args[1].length ? reduced[0] : reduced[1]) {
//     if (reduced[0][key] !== reduced[1][key]) return false;
//   }
//   return true;
// }
