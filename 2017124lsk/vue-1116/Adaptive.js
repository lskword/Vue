window.onresize = res
res()
function res() {
  var WindowWidth = document.documentElement.clientWidth
  var NewFontSize = WindowWidth/(20 / 1)
  document.documentElement.style.fontSize = NewFontSize + 'px'
}
