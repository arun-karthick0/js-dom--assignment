const btn = document.querySelector(".toggle");
const paragraph = document.querySelector(".para");

btn.addEventListener("click", () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
});
