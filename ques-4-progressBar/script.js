const progressBar = document.getElementById("progressBar");
const content = document.getElementById("content");

window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
}
