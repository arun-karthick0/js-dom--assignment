window.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("myTextarea");
  const counter = document.getElementById("counter");
  const maxChars = 60;

  textarea.addEventListener("input", (event) => {
    const textLength = event.target.value.length;
    const remainingChars = maxChars - textLength;
    counter.textContent = remainingChars;
  });
});
