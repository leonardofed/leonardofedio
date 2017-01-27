function random_int (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min;}
function gcd(a, b) { var w; while (b !== 0) { w = a % b; a = b; b = w; } return a; }


function random_color(iDarkLuma, iLightLuma) {
  var sColour, rgb, r, g, b;
  for (var i=0;i<20;i++) {
    sColour = ('ffffff' + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);
    rgb = parseInt(sColour, 16);
    r = (rgb >> 16) & 0xff; g = (rgb >>  8) & 0xff; b = (rgb >>  0) & 0xff;
    iLuma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    if (iLuma > iDarkLuma && iLuma < iLightLuma) return "#"+sColour;
  }
  return "#"+sColour;
}