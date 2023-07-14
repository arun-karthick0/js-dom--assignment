const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

let getRandomColor = () => {
  const str = "0123456789ABCDEF";
  let randomColorGenerator = "#";
  for (let i = 0; i < 6; i++) {
    randomColorGenerator += str[Math.floor(Math.random() * 16)];
  }
  return randomColorGenerator;
};
