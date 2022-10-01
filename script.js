let randomNumber = null;

let arrNums = [];
let tries = 3;
document.querySelector(".tries").innerHTML = "Tries: " + tries;

function generateRandomNum() {
  randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  if (randomNumber != null) {
    document.querySelector(".random-num").classList.add("generated");
    document.querySelector(".random-num").innerHTML = "Random number genarated";
  }
}

function renderHistory() {
  document.querySelector(".selected-numbers").innerHTML = "Yours numbers: " + arrNums.join(" ");
}

function handleButtonClick(value) {
  if (tries > 0) {
    if (randomNumber == value) {
      document.querySelector(".game-result").innerHTML = "Good boiii, wins numbers is " + value;
      document.querySelector(".game-result").classList.add("win");
      return;
    }
    arrNums.push(value);
    tries--;
    document.querySelector(".tries").innerHTML = "Tries: " + tries;
    console.log(tries);

    renderHistory();
  } else {
    if (randomNumber == null) {
      document.querySelector(".random-num").classList.add("error");
      document.querySelector(".clear").classList.add("error");
      document.querySelector(".random-num").innerHTML = "You didn't generate a number";
    } else {
      document.querySelector(".game-result").innerHTML = "Dude you are looser, wins numder is " + randomNumber;
      document.querySelector(".game-result").classList.add("loose");
    }
  }
}

function clearResult() {
  randomNumber = null;
  tries = 3;
  arrNums = [];

  document.querySelector(".random-num").innerHTML = "Generade a random number";
  document.querySelector(".selected-numbers").innerHTML = "Yours numbers " + arrNums.join(" ");

  document.querySelector(".tries").innerHTML = "Tries: " + tries;
  document.querySelector(".game-result").innerHTML = "";
  document.querySelector(".random-num").classList.remove("error");
  document.querySelector(".clear").classList.remove("error");
  document.querySelector(".game-result").classList.remove("win");
  document.querySelector(".game-result").classList.remove("loose");
  document.querySelector(".random-num").classList.remove("generated");
}
