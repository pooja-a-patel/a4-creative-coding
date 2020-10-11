// Animate background color
var colors = ["plum","orange","coral"];
var currentIndex = 0;

setInterval(function() {
  document.body.style.cssText = "background-color: " + colors[currentIndex];
  currentIndex++;
  if (currentIndex == undefined || currentIndex >= colors.length) {
    currentIndex = 0;
  }
}, 1000);
