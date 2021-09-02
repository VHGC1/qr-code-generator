let qrcode = new QRCode("qrcode", {
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

let text = document.getElementById("text");
let button = document.getElementById("button");
let downloadButton = document.getElementById("downloadButton")

qrcode.makeCode(window.location.href);

button.onclick = () => {
  qrcode.makeCode(text.value);
};

downloadButton.onclick = () => {
  download()
}

var download = function(){
  var link = document.createElement('a');
  link.download = 'QrCode.png';
  link.href = document.getElementsByTagName('canvas')[0].toDataURL()

  link.click();
}
