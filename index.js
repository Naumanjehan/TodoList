let inputtext = document.getElementById("inputtext");
let listcontainer = document.getElementById("listcontainer");

function addtask() {
  if (inputtext.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    let remove = document.createElement("button");

    li.innerHTML = inputtext.value;
    remove.innerHTML = "remove";

    listcontainer.appendChild(li);
    li.appendChild(remove);
  }
  inputtext.value = "";
}

function cleartask() {
  listcontainer.remove();
}

let btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
    let listcontainer = document.getElementById("listcontainer");
    let li=e.target.parentNode;
    listcontainer.removeChild(li);
});
