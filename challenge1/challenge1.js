var testTransform = "The quick brown fox jumped over the lazy dog";
var regexVowels = /[aeiou]/gmi;

var rebuiltString = "";
var count = 1;
var promptedString = prompt("Please enter a word or sentence: ");


if (promptedString != null) {
  var charArray = promptedString.split("");
  var textAlteration = function(charArray) {
    var rebuiltArrayHolder = [];

    for (var i = 0; i < charArray.length; i++) {
      if (regexVowels.test(charArray[i])) {
        rebuiltArrayHolder.push(count);
        count++;
      } else {
        rebuiltArrayHolder.push(charArray[i]);
      }
    }
    return rebuiltArrayHolder;

  }
}

rebuiltString = textAlteration(charArray).join('');
console.log(rebuiltString);
