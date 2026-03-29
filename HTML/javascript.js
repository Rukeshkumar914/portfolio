// Button click effect
const buttons = document.querySelectorAll(".connect-buttons a");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Opening link...");
    });
});