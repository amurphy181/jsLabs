var countTester = "Hello world";

var charArray = countTester.toLowerCase().split("").sort();

var count = 0;
console.log(charArray);

var charCount = function(charArray) {
  var countMap = new Map();
  for (var i = 0; i < charArray.length; i++) {
    if (charArray[i] !== " " && i != 0) {
      if (charArray[i] == charArray[i - 1]) {
        count++;
        countMap.set(charArray[i], count);
      } else {
        countMap.set(charArray[i], 1);
        count = 1;
        continue;
      }
      // console.log(charArray[i] + ": " + count);
    }
  }
  return countMap;
}


for (var [key, value] of charCount(charArray)) {
  console.log(key + ": " + value);
}

// console.log(charCount(charArray));
