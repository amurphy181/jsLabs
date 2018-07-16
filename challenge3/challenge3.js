var testString = "The quick brown fox jumped over the lazy dog";
var promptedString = prompt("Please enter a word or sentence: ");
var arraySplit = promptedString.split(" ");

var wordCount = 0;

if (promptedString != null) {
  var totalWords = function(arraySplit) {
    for (var i = 0; i < arraySplit.length; i++) {
      wordCount++;
    }
    return wordCount;
  }
}

console.log(totalWords(arraySplit));
