const reverseString = function(str) {
 var splitString = str.split("");
 var reverseArry = splitString.reverse();
 var joinArry = reverseArry.join("");
  return jointArry;
};
reverseString("hello"):
module.exports = reverseString;
