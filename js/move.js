function progress(ID, percent) {
  var user = ID;
  var elem = document.getElementById(user);
  var width = 1;
  var p = percent;
  var id = setInterval(frame, 20);

  function frame() {
    if (width >= p) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}