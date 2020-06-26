var h = document.getElementById('h').innerHTML;
var w = document.getElementById('w').innerHTML;
let wc = 35.74+(0.6215*h)-(35.75*(w**0.16))+(0.4275*h*(w**.16));
if (h <= 50 && w > 3) {
   wc = Math.round(wc);
} else {
   wc = "NA";
}
document.getElementById('wC').innerHTML = wc;