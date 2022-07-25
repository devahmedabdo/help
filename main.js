let text = document.querySelectorAll("select ,input[type='text']");
text.forEach((e) => {
  e.onchange = () => {
    document.querySelectorAll(".img p").forEach((ele) => {
      ele.innerHTML = e.value;
    });
  };
});
let img = document.querySelector("input[type='file']");
img.onchange = (e) => {
  const [file] = img.files;
  if (file) {
    document.querySelectorAll(".img").forEach((e) => {
      e.style = `
      background: url(${URL.createObjectURL(file)}) center center;
      background-size: cover;
      `;
    });
    html2canvas(document.querySelector(".img")).then((canvas) => {
      console.log(canvas.toDataURL("image/png"));
      var dataURL = canvas.toDataURL("image/png");

      button.href = dataURL;
    });
  }
};
var button = document.getElementById("btn-download");
