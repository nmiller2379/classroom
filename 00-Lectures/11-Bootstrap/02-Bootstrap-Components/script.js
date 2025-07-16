const button = document.getElementById("custom-button");
button.addEventListener("click", function () {
  // Check current button class and change it
  console.log("I've been clicked");
  if (button.classList.contains("btn-primary")) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
  } else {
    button.classList.remove("btn-success");
    button.classList.add("btn-primary");
  }
});
