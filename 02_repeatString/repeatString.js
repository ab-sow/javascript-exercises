const repeatString = function(string, num) {
  var stringRepeat = '';
  while (num > 0) {
    stringRepeat += string;
  }
  return stringRepeat;
};
repeatString('hey', 4);
module.exports = repeatString;
