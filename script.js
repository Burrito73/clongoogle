const searchInput = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
    window.location.href = `https://www.google.com/search?q=${searchInput.value}`;
});