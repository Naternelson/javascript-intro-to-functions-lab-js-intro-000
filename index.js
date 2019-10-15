function shout(string){
  return string.toUpperCase()
}

function whisper(talk) {
  return talk.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase());
}

function logWhisper(string) {
  console.log (string.toLowerCase());
}

function sayHiToGrandma(word) {
  if(word.toLowerCase === word) {
    return "I can\'t hear you!";
  } else if (word.toUpperCase === word) {
    return "YES INDEED!";
  } else if (word === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
