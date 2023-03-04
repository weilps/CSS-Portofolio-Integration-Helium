const addCircle = (id, size) => {
  id = document.createElement("span");
  id.classList.add("circle");
  id.style.height = size + "px";
  id.style.width = size + "px";
  id.addEventListener("mousemove", (e) => {
    console.log(e);
  });
};

addCircle("c1", 300);
