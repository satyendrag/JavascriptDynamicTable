const select = document.getElementById("mySelect");
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const add = document.getElementById("add");
const buttonContainer = document.querySelector(".button-container");
const tableContainer = document.querySelector(".table-container");

add.addEventListener("click", (e) => {
  const selectedValue = select.options[select.selectedIndex].text;
  //console.log(selectedValue);
  let table = `<table class="table${selectedValue}"><thead><tr><th>Project type</th><th>Name</th><th>Email</th></tr></thead>`;
  const row = `<tr><td>${selectedValue}</td><td>${name}</td><td>${email}</td></tr>`;
  if (document.querySelector(".button-container > #" + selectedValue)) {
    document.querySelector("#tbody" + selectedValue).innerHTML += row;
  } else {
    let button = `<button id="${selectedValue}">${selectedValue}</button>`;
    buttonContainer.innerHTML += button;
    tableContainer.innerHTML +=
      table + `<tbody id="tbody${selectedValue}">` + row + "</tbody></table>";
  }
  hideShow("table" + selectedValue, selectedValue);
  const buttons = document.querySelectorAll(".button-container > button");
  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      hideShow("table" + e.target.id, e.target.id);
    })
  );
});

function hideShow(tableclassName, buttonId) {
  document.querySelectorAll("table").forEach((tab) => {
    if (tab.classList.contains(tableclassName)) {
      tab.classList.add("show");
      tab.classList.remove("hide");
    } else {
      tab.classList.remove("show");
      tab.classList.add("hide");
    }
  });

  document.querySelectorAll(".button-container > button").forEach((button) => {
    if (button.id == buttonId) {
      button.classList.add("bgGreen");
      button.classList.remove("bgGray");
    } else {
      button.classList.add("bgGray");
      button.classList.remove("bgGreen");
    }
  });
}
