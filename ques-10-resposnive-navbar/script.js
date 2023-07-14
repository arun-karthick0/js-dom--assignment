const btn = document.querySelector(".icon");

btn.addEventListener("click", () => {
  let menu = document.getElementById("myNavbar");
  if (menu.className === "navbar") {
    menu.className += " responsive";
  } else {
    menu.className = "navbar";
  }
});
