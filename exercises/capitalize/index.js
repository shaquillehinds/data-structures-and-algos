// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newStr = "";
  for (str of str.split(" ")) {
    newStr += " " + str[0].toUpperCase() + str.slice(1);
  }
  return newStr.trim();
}

module.exports = capitalize;
