

function dis(hex,rgb){
  document.getElementById("textview").textContent = hex.toUpperCase()
  document.getElementById("block").style.background = hex
  document.getElementById("rgbv").textContent = rgb

}
