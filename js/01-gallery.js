import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance;

const galleryItemsToHtml = galleryItems.map(
  (el) =>
    `<li class="gallery__item"><a class="gallery__link" href="${el.original}" target="blank"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></li>`
);

gallery.insertAdjacentHTML("afterbegin", galleryItemsToHtml.join(""));

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const src = event.target.getAttribute("data-source");
  instance = basicLightbox.create(`<img src="${src}">`);

  instance.show();
}
document.addEventListener("keydown", closeInstance);

function closeInstance(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
