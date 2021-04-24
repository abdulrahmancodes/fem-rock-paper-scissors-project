const container = document.querySelector(".container");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const items = document.querySelectorAll(".item");
const selected = document.querySelector(".your-choice");
const computersChoice = document.querySelector(".computer-choice");
const blank = document.querySelector(".blank");
const resultElement = document.querySelector(".result")
const result = document.querySelector(".statement");
const scoreElement = document.querySelector(".score");
const scoreContainer = document.querySelector(".score-box")
const playAgain = document.querySelector(".play-again");
const rules = document.querySelector(".rules");
const cross = document.querySelector(".cross");
const modal = document.querySelector(".modal");
const clickSound = document.querySelector(".click");
const winSound = document.querySelector(".win");
const loseSound = document.querySelector(".lose");
const againSound = document.querySelector(".again");
const startSound = document.querySelector(".start")
let score = 0;
let images = ["images/icon-rock.svg", "images/icon-paper.svg", "images/icon-scissors.svg"];

refreshScore()
items.forEach(item => item.addEventListener("click", handler))

function handler(e) {
    clickSound.play();
    let imgSource = images[Math.floor(Math.random() * 3)]
    let yourChoice = this.dataset.value;
    let houseChoice;

    container.classList.add("closed");
    setTimeout(() => {
        container.parentElement.classList.add("hidden");
    }, 300);

    if (this.classList.contains("paper")) {
        your.setAttribute("src", "images/icon-paper.svg");
        selected.classList.add("paper");
    } else if (this.classList.contains("rock")) {
        your.setAttribute("src", "images/icon-rock.svg");
        selected.classList.add("rock");
    } else if (this.classList.contains("scissors")) {
        your.setAttribute("src", "images/icon-scissors.svg")
        selected.classList.add("scissors");
    }

    

    setTimeout(() => {
        blank.classList.add("button");
        blank.classList.remove("blank");
        if (imgSource.includes("paper")) {
            computersChoice.classList.add("paper")
            houseChoice = "paper";
        } else if (imgSource.includes("rock")) {
            computersChoice.classList.add("rock");
            houseChoice = "rock"
        } else if (imgSource.includes("scissors")) {
            computersChoice.classList.add("scissors");
            houseChoice = "scissors"
        }
        computer.style.display = "block";
        computer.setAttribute("src", imgSource);
    }, 1500)


    setTimeout(() => {
        if (window.innerWidth < 500) {
            step2.style.width = "100%"
        } else {
            step2.style.width = "75%"
        };


        if (yourChoice === houseChoice) {
            result.innerHTML = "IT'S A TIE";
            startSound.play();
        } else if (yourChoice === "paper" && houseChoice ==="rock") {
            result.innerHTML = "YOU WIN"
            selected.classList.add("winner");
            winSound.play();
            setTimeout(() => selected.classList.remove("winner"), 3000);
            score++;
        } else if (yourChoice === "rock" && houseChoice === "scissors") {
            result.innerHTML = "YOU WIN"
            selected.classList.add("winner")
            winSound.play();

            score++
        } else if (yourChoice === "scissors" && houseChoice === "paper") {
            result.innerHTML = "YOU WIN"
            selected.classList.add("winner")
            winSound.play();

            score++
        } else if (yourChoice === "rock" && houseChoice ==="paper") {
            result.innerHTML = "YOU LOSE"
            computersChoice.classList.add("winner")
            loseSound.play();
            score--
        } else if (yourChoice === "scissors" && houseChoice === "rock") {
            result.innerHTML = "YOU LOSE"
            computersChoice.classList.add("winner")
            loseSound.play();
            score--
        } else if (yourChoice === "paper" && houseChoice === "scissors") {
            result.innerHTML = "YOU LOSE"
            computersChoice.classList.add("winner")
            loseSound.play();
            score--
        };
        save();
        refreshScore();
        resultElement.classList.add("active");
    }, 2000)
}


playAgain.addEventListener("click", reset)

function refreshScore() {
    score = +JSON.parse(localStorage.getItem("score")) || 0;
    scoreElement.innerHTML = score;
    console.log(JSON.parse(localStorage.getItem("score")))
}

function save() {
    localStorage.setItem("score", String(score));
}


function reset() {
    againSound.play();
    container.classList.remove("closed");
    container.parentElement.classList.remove("hidden");
    blank.classList.remove("button");
    blank.classList.add("blank");
    resultElement.classList.remove("active");
    computersChoice.classList.remove("paper");
    computersChoice.classList.remove("rock");
    computersChoice.classList.remove("scissors");
    computersChoice.classList.remove("winner")
    selected.classList.remove("paper");
    selected.classList.remove("rock");
    selected.classList.remove("scissors");
    selected.classList.remove("winner");
    computer.style.display = "none";
    computer.setAttribute("src", "");
    if (window.innerWidth > 500) {
        step2.style.width = "30%"
    }
}


rules.addEventListener("click", () => {
    modal.classList.add("show-modal");
    setTimeout(() => modal.classList.add("pop-up"), 100)
    container.style.filter = "brightness(0.5)"
})

cross.addEventListener("click", () => {
    modal.classList.remove("pop-up");
    setTimeout(() => modal.classList.remove("show-modal"), 500)
    container.style.filter = "none"

})

scoreContainer.addEventListener("click", (e) => {
    score = 0;
    save();
    refreshScore();
    console.log(score)
})