replaceText(document.body);

function replaceText(element) {
  if (element.nodeName === "STYLE") {
    return;
  }
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    const words = element.textContent.split(" ");
    if (element.textContent == "" || checkForSpaces(words) === false) {
      return;
    }

    for (let i = 0; i < words.length; i++) {
      var randomNum = Math.floor(Math.random() * 100);
      if (randomNum == 35) {
        element.textContent = element.textContent.replace(words[i], "SocNet");
      }
    }
  }
}

function checkForSpaces(array) {
  spaceCount = 0;
  for (let l = 0; l < array.length; l++) {
    if (array[l] !== "") {
      spaceCount++;
    }
    if (spaceCount == 3) return;
  }
  return false;
}
