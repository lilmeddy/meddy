let myInp = document.getElementById("myInp");
let show = document.getElementById("show");

function myClick() {
  let mede = myInp.value;
  let listItem = document.createElement("h1");
  listItem.innerHTML =
    "<p>" +
    mede +
    "</p>" +
    "<section>" +
    "<button onclick='del(this)'>" +
    "x" +
    "</button>" +
    "</section>";
  show.appendChild(listItem);

  // Store the updated list items in local storage
  localStorage.setItem("showData", show.innerHTML);
}

// Retrieve the list items from local storage when the page loads
window.addEventListener("load", function() {
  let showData = localStorage.getItem("showData");
  if (showData) {
    show.innerHTML = showData;
  }
});

// Function to delete a list item
function del(button) {
  let listItem = button.parentNode.parentNode;
  listItem.remove();

  // Update the list items in local storage after an item is deleted
  localStorage.setItem("showData", show.innerHTML);
}
