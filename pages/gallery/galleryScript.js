//load images

function loadImages() {
  const gallery = document.querySelectorAll("#galleryPage .grid-container");
  console.log(gallery[0]);
  for (i = 2; i <= 36; i++) {
    let image = lightBox(i);
    gallery[0].appendChild(image);
  }
}
//create img html element
function createImage(index) {
  let div = document.createElement("div");
  div.setAttribute("class", "");
  let img = document.createElement("img");
  img.setAttribute("src", "../../images/chytiris/chyt_" + index + ".jpg");

  div.appendChild(img);
  return div;
}

function lightBox(index) {
  let a = document.createElement("a");
  a.setAttribute("href", "../../images/chytiris/chyt_" + index + ".jpg");
  a.setAttribute("data-toggle", "lightbox");
  a.setAttribute("data-gallery", "example-gallery");

  let img = document.createElement("img");
  img.setAttribute("src", "../../images/chytiris/chyt_" + index + ".jpg");
  img.setAttribute("class", "img-fluid");
  a.appendChild(img);
  return a;
}

const options = {
  keyboard: true,
  size: "fullscreen",
  gallery: "gallery-photos",
};

loadImages();
