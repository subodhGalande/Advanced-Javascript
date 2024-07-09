const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkWin = (roll) => roll === 6;

const displayResult = (el, message) => {
  el.innerText = message;
};

const rollDiceDisplayResult = (resultDisplay) => () => {
  const roll = getRandomRoll();
  const message = checkWin(roll)
    ? `you rolled a ${roll}, you win`
    : `you rolled a ${roll}, try again`;

  displayResult(resultDisplay, message);
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const rollBtn = document.getElementById(rollBtnId);
  const resultDisplay = document.getElementById(resultDisplayId);

  rollBtn.addEventListener("click", rollDiceDisplayResult(resultDisplay));
};

createDiceGame("dice", "result");
