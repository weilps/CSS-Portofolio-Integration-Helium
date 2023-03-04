const addCircle = (name, iD, size) => {
  name = document.createElement("span");
  name.classList.add("circle");
  document.body.appendChild(name);
  //   name.setAttribute("id", iD);
  name.id = iD;
};

addCircle("c1", "c1");
addCircle("c2", "c2");
addCircle("c3", "c3");

document.addEventListener("mousemove", (e) => {
  c1.style.top = e.pageY + "px";
  c1.style.left = e.pageX + "px";
  c2.style.top = e.pageY + "px";
  c2.style.left = e.pageX + "px";
  c3.style.top = e.pageY + "px";
  c3.style.left = e.pageX + "px";
});
