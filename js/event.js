function showCoord(e) {
  let text = "좌표: (" + event.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
