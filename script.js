let container = document.getElementById("cont")
let openWindow = document.getElementById("open");
let closeWindow = document.getElementById("close");

// open window
openWindow.addEventListener('click', () => {
    container.style.animation = "wOpen 1s forwards ease-in-out";
    container.style.transition = "1s";
})

//close window
closeWindow.addEventListener('click', () => {
    container.style.animation = "wClose 1s forwards ease-in-out";
    container.style.transition = "5s";
})




























