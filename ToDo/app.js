let inp = document.querySelector("input");

let add = document.querySelector("#addBtn");

let ul = document.querySelector("ul");

add.addEventListener("click", function () {
  let task = inp.value;

  let newTask = document.createElement("li");
  newTask.innerText = task;
  ul.appendChild(newTask);
  inp.value = "";

  let addDelBtn = document.createElement("button");
  addDelBtn.innerText = "Delete";
  addDelBtn.classList.add("delBtn");
  newTask.appendChild(addDelBtn);

  //   addDelBtn.addEventListener("click", function () {
  //     addDelBtn.parentElement.remove();
  //   });
});

// let delBtns = document.querySelectorAll(".delBtn");
// for (let del of delBtns) {
//   del.addEventListener("click", function () {
//     this.parentElement.remove();
//   });
// }

ul.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
