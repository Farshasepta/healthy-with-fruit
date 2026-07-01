const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const closeBtn = lightbox.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

document.querySelectorAll(
  ".cover-card img, .board-card img, .gallery-grid .asset-card img"
).forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hasAttribute("hidden")) closeLightbox();
});
