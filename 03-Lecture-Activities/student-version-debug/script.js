const dog = document.querySelector("#dog");
const cat = document.getElementById(".cat");

dog.addEventListener("click", () => {
    if(cat.classList.contains("cat")) {
        cat.classList.add("active");
        console.log();
        dog.classList.remove("active");
    }
}

cat.addEventListener(, function () => {
    if(dog.classList.contains("dog")) {
        dog.classList.add("active");
        cat.classList.remove("cst")
    }
});

function () {
    return dog;
}
