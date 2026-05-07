const form = document.getElementById("fanForm");
const nameInput = document.getElementById("fanName");
const playerInput = document.getElementById("favoritePlayer");
const messageBox = document.getElementById("messageBox");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fanName = nameInput.value.trim();
    const favoritePlayer = playerInput.value.trim();

    if (fanName === "" || favoritePlayer === "") {
        messageBox.textContent = "Please enter your name and favorite red sox player.";
        return;
    }
    messageBox.textContent =
    `Welcome, ${fanName}! Great choice picking ${favoritePlayer}. Go Red Sox!`;

    form.reset();
});
