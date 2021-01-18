
// declared variables
var userHighscore = document.querySelector("#userHighscore");
var clearBtn = document.querySelector("#clearBtn");
var backBtn = document.querySelector("#backBtn");

// adding event listener to clear user scores 
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload;
});

// Retreives local stroage 
var allUsers = localStorage.getItem("allUsers");
allUsers = JSON.parse(allUsers);

if (allUsers !== null) {

    for (var i = 0; i < allUsers.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allUsers[i].initials + " " + allUsers[i].score;
        userHighscore.appendChild(createLi);

    }
}


// adding event listener to move to the index.html
backBtn.addEventListener("click", function() {
    location.replace("./index.html");
})

