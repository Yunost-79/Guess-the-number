let randomNumber = Math.floor(Math.random() * 10);
document.querySelector(".random-num").innerHTML = randomNumber;

const updateRandom = document.querySelector(".update-random");

updateRandom.onclick = () => {
  randomNumber = Math.floor(Math.random() * 10);
  document.querySelector(".random-num").innerHTML = randomNumber;
};

let guessNum = "";
let allGuessNum = [];
const btnNum = document.querySelector(".buttons");
const gameResult = document.querySelector(".game-result");

btnNum.onclick = (e) => {
  if (!e.target.classList.contains("btn")) return;
  guessNum = e.target.textContent;
  allGuessNum.push(guessNum);
  allGuessNum.length = Math.min(allGuessNum.length, 3);

  // console.log(guessNum, allGuessNum);

  if (guessNum == randomNumber) {
    gameResult.innerHTML = "Yeah, you are Winner!!!";
    return;
  } else {
    gameResult.innerHTML = "Nope, Looser...";
    if (allGuessNum.length <= 3) {
      gameResult.innerHTML = "You lost your chance poor man";
      return;
    }
  }

  const selectedNums = document.querySelector(".selected-numbers");
  selectedNums.innerHTML = "Your numbers " + allGuessNum;
};
