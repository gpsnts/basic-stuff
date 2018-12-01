let squaresContainer = document.getElementById("squares-container");
let easyButton = document.getElementById("easy-mode");
let hardButton = document.getElementById("hard-mode");
let restart = document.getElementById("restart")


let isHard = true;
let colors = [];
let answer;

init();

function init() {
    colors = [];
    squaresContainer.innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("page-title").style.backgroundColor = "#d17272"
    document.getElementById("page-sub-title").style.backgroundColor = "#d17272";
    
    createSquares();
    addresColors();
    setAnswer();
    verifyIfWon();
}

function verifyIfWon() {
    let square = document.querySelectorAll("#square");
    
    for (let i = 0; i < colors.length; i++) {
        square[i].addEventListener("click", function() {
            if(square[i].style.backgroundColor === answer) {
                document.getElementById("status").innerHTML = "Won!"
                document.getElementById("page-title").style.backgroundColor = answer;
                document.getElementById("page-sub-title").style.backgroundColor = answer;
                square.forEach(e => e.style.backgroundColor = answer);
            } else {
                document.getElementById("status").innerHTML = "";
                document.getElementById("status").innerHTML = "Try again";
                this.style.backgroundColor = "#d17272";
            }
        })
    }
}

function setAnswer() {
    let index = Math.floor(Math.random() * 6);
    
    if (isHard) {
        answer = colors[index];
    } else {
        answer = colors[index % 3];
    }

    document.getElementById("page-sub-title").textContent = ""
    document.getElementById("page-sub-title").textContent = `Guess which of these is ${answer}` 
}

function addresColors() {
    let square = document.querySelectorAll("#square");
    square.forEach(e => e.style.backgroundColor = randomColor())
}

function createSquares() {
    if (isHard) {
        for (let i = 0; i < 6; i++) {
            squaresContainer.innerHTML += "<div id=\"square\"></div>"
        }
    } else {
        for (let i = 0; i < 3; i++) {
            squaresContainer.innerHTML += "<div id=\"square\"></div>"
        }
    }
}

function randomColor() {
    redValue = Math.floor(Math.random() * 255);
    greenValue = Math.floor(Math.random() * 255);
    blueValue = Math.floor(Math.random() * 255);

    let rgb = "rgb(" + redValue + ", "+ greenValue + ", "+ blueValue + ")";
    colors.push(rgb);
    return rgb;
}

restart.addEventListener("click", function() {
    init();
})

hardButton.addEventListener("click", function() {
    isHard = true;
    init();
})

easyButton.addEventListener("click", function() {
    isHard = false;
    init();
})
