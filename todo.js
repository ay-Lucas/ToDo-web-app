let listContainer = document.getElementById("note-container");
const input = document.getElementById("response");

function getInput() {
  input.addEventListener("keyup", function (event) {
    if (event.code === "Enter" && input.value !== "") {
      const li = document.createElement("li");
      li.innerHTML = input.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      console.log(li);
      input.value = "";
      saveData();
    }
  });
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayStoredTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

displayStoredTask();
