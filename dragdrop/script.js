let src = "";

function drag(event) {
  console.log(event.target.id);
  event.dataTransfer.setData("imagenew", event.target.id);
  src = `./images/${event.target.id}`;
}

function drop1(event) {
  event.preventDefault();
  document.getElementById("imgDrop1").src = src;
}

function drop2(event) {
  event.preventDefault();
  document.getElementById("imgDrop2").src = src;
}

function allowDrop(event) {
  event.preventDefault();
}

