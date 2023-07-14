window.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const sliderAnimation = document.getElementById("sliderAnimation");
  const body = document.body;
  const darkModeClass = "dark-mode";

  toggleSwitch.addEventListener("change", (e) => {
    if (e.target.checked) {
      body.classList.add(darkModeClass);
      sliderAnimation.style.transform = "translateX(25px)";
    } else {
      body.classList.remove(darkModeClass);
      sliderAnimation.style.transform = "translateX(0)";
    }
  });
});
