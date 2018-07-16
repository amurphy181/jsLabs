// Random Sentence Generator: Write a program that has lists of nouns, verbs, adjectives, and other parts of speech. It will also have a list of sentence structures like "article noun verb", "adjective noun adverb verb" (these could arrays, strings, or any other kind of structure). When run, the program randomly chooses a sentence structure and randomly assigns words: "angry giraffe quietly raps", "the grapefruit sings".

var nounList = [
  "growth",
  "spark",
  "magic",
  "scarf",
  "home",
  "birds",
  "birth",
  "basket",
  "stove",
  "thunder",
  "bike",
  "page",
  "brick",
  "vest",
  "cheese",
  "pot",
  "desire",
  "lake",
  "rest",
  "idea",
  "quiver",
  "downtown"
];

var adjList = [
  "vulgar",
  "best",
  "various",
  "lavish",
  "awake",
  "festive",
  "royal",
  "pricey",
  "flippant",
  "finicky",
  "elite",
  "closed",
  "moaning",
  "meaty",
  "scared",
  "untidy",
  "numberless",
  "early",
  "well - to - do",
  "slimy"
];

var verbList = [
  "repeat",
  "kill",
  "push",
  "flap",
  "identify",
  "terrify",
  "warm",
  "exercise",
  "pick",
  "succeed",
  "flash",
  "like",
  "bare",
  "start",
  "analyse",
  "arrive",
  "try",
  "afford",
  "rule",
  "spot"
];

var adverbList = [
  "daily",
  "vastly",
  "upliftingly",
  "zestily",
  "justly",
  "more",
  "deftly",
  "sympathetically",
  "scarily",
  "already",
  "tightly",
  "punctually",
  "obnoxiously",
  "coyly",
  "loosely",
  "sedately",
  "closely",
  "suspiciously",
  "always",
  "upward"
];

var prepList = [
  "from",
  "beside",
  "into",
  "outside",
  "up",
  "regarding",
  "underneath",
  "round",
  "under",
  "with",
  "off",
  "on",
  "below",
  "save",
  "among",
  "for",
  "around",
  "since",
  "aboard",
  "along"
];

var articleList = [
  "the", "a", "an"
];

var sentenceArrange = [
  "article noun verb",
  "adjective noun adverb verb",
  "article adjective noun",
  "noun adverb verb",
  "article noun adverb verb article adjective noun",
  "article noun prep article noun verb"
];


function sentenceGenerator(inputSentence) {
  var resultingSentence = "";
  var arraySentence = [];
  var randSentStructure = "";
  randSentStructure = selectRandomSentenceStructure(inputSentence);

  switch (randSentStructure) {
    case "article noun verb":
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(verbList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    case "adjective noun adverb verb":
      arraySentence.push(selectWordFromArray(adjList));
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(adverbList));
      arraySentence.push(selectWordFromArray(verbList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    case "article adjective noun":
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(adjList));
      arraySentence.push(selectWordFromArray(nounList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    case "noun adverb verb":
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(adverbList));
      arraySentence.push(selectWordFromArray(verbList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    case "article noun adverb verb article adjective noun":
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(adverbList));
      arraySentence.push(selectWordFromArray(verbList));
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(adjList));
      arraySentence.push(selectWordFromArray(nounList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    case "article noun prep article noun verb":
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(prepList));
      arraySentence.push(selectWordFromArray(articleList));
      arraySentence.push(selectWordFromArray(nounList));
      arraySentence.push(selectWordFromArray(verbList));
      resultingSentence = changeArrayToSentenceString(arraySentence);
      break;
    default:
      return "Shucks, it broke!"
  }
  return resultingSentence;
}

function changeArrayToSentenceString(sentArray) {
  var finalSentence = "";
  finalSentence = sentArray.join(" ");
  return finalSentence;
}

function selectRandomSentenceStructure(sentStructArray) {
  var randomizer = (Number.parseInt((Math.random()) * sentStructArray.length));
  var chosenStructure = "";
  chosenStructure = sentStructArray[randomizer];
  return chosenStructure;
}

function selectWordFromArray(wordArray) {
  var wordRandom = (Number.parseInt((Math.random()) * wordArray.length));
  var chosenWord = "";
  chosenWord = wordArray[wordRandom];
  // console.log(wordRandom + " word: " + chosenWord);
  return chosenWord;
}


var theFinalSentence = sentenceGenerator(sentenceArrange);
console.log(theFinalSentence);
console.log(sentenceGenerator(sentenceArrange));
console.log(sentenceGenerator(sentenceArrange));









// end spacer comment!
