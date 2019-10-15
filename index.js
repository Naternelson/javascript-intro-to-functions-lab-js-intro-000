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

function sayHiToGrandma(string) {
  if(string.toLowerCase === string) {
    console.log("I can\'t hear you!");
  } else if (string.toUpperCase === string) {
    console.log("YES INDEED!");
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
