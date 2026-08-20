const message = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");

const maxLength = 200;

message.addEventListener("input", function() {

    let count = message.value.length;
    let left = maxLength - count;

    counter.textContent = count + "/200 characters";
    remaining.textContent = left + " characters remaining";

    if (count >= maxLength) {
        warning.textContent = "Maximum character limit reached!";
    } else {
        warning.textContent = "";
    }
});