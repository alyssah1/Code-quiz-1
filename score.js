
// declared variables
var userHighscore = document.querySelector("#userHighscore");
var clearBtn = document.querySelector("#clearBtn");
var backBtn = document.querySelector("#backBtn");

// adding event listener to clear user scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload;
});

// adding event listener to move to the index.html
backBtn.addEventListener("click", function() {
    location.replace("./index.html");
})