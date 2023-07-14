const drag_me = document.querySelector(".draggable");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

drag_me.addEventListener("mousedown", startDragging);
drag_me.addEventListener("mousemove", dragElement);
drag_me.addEventListener("mouseup", stopDragging);

function startDragging(e) {
  if ((isDragging = true)) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
}

function dragElement(e) {
  if (isDragging) {
    drag_me.style.left = e.pageX - offsetX + "px";
    drag_me.style.top = e.pageY - offsetY + "px";
  }
}

function stopDragging() {
  isDragging = false;
}
