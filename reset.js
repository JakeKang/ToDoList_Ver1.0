const reset = document.querySelector(".js-reset");

function getOut() {
    localStorage.clear();
    location.reload();
}

function userReset() {
    reset.addEventListener("click", getOut);
}

function init() {
    userReset();
}

init();