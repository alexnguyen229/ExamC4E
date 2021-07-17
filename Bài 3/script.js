let txtHex = document.getElementById("hexColor");
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log("a");
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = rgbToHex(r,g,b);
    txtHex.innerHTML = rgbToHex(r,g,b);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }