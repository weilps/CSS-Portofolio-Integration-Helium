const addCircle = (name, iD) => {
  name = document.createElement("span");
  name.classList.add("circle");
  document.body.appendChild(name);
  //   name.setAttribute("id", iD);
  name.id = iD;
};

addCircle("c1", "c1");
addCircle("c2", "c2");
addCircle("c3", "c3");

const circles = document.querySelectorAll(".circle");
// console.log(circles);
window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.top = e.y + "px";
    circle.style.left = e.x + "px";
  });
});
