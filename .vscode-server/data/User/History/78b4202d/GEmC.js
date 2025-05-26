const startBtn = document.getElementById('start-btn');
const playBtn = document.getElementById('play-btn');
const restartBtn = document.getElementById('restart-btn');

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');

const player1Select = document.getElementById('player1');
const player2Select = document.getElementById('player2');
const resultDiv = document.getElementById('result');

const roundNumber = document.getElementById('round-number');
const score1Span = document.getElementById('score1');
const score2Span = document.getElementById('score2');

let round = 1;
let score1 = 0;
let score2 = 0;
let objects = [];
let useLocalRules = false;

const rules = {
  rock: ["scissors", "fire", "gun"],
  paper: ["rock", "water", "devil"],
  scissors: ["paper", "devil"],
  fire: ["paper", "scissors"],
  water: ["fire", "rock"],
  gun: ["devil", "fire"],
  devil: ["rock", "paper"]
};

startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  loadObjects();
});

restartBtn.addEventListener('click', () => {
  round = 1;
  score1 = 0;
  score2 = 0;
  updateUI();
  resultDiv.innerText = "";
  restartBtn.classList.add('hidden');
  playBtn.disabled = false;
});

async function loadObjects() {
  try {
    const res = await fetch('https://rps101.pythonanywhere.com/api/v1/objects/all');
    const data = await res.json();
    if (!data.objects) throw new Error();
    objects = data.objects;
  } catch (err) {
    console.warn("API failed, using fallback objects.");
    objects = ["rock", "paper", "scissors", "fire", "water", "gun", "devil"];
    useLocalRules = true;
    resultDiv.innerText = "⚠️ Could not load from API. Using fallback options.";
  }

  populateSelect(player1Select);
  populateSelect(player2Select);
}

function populateSelect(select) {
  select.innerHTML = '';
  objects.forEach(obj => {
    const option = document.createElement('option');
    option.value = obj;
    option.textContent = obj;
    select.appendChild(option);
  });
}

playBtn.addEventListener('click', async () => {
  const obj1 = player1Select.value;
  const obj2 = player2Select.value;

  if (useLocalRules) {
    const result = getLocalResult(obj1, obj2);
    resultDiv.innerText = result.message;

    if (result.winner === obj1) {
      score1++;
    } else if (result.winner === obj2) {
      score2++;
    }
  } else {
    try {
      const res = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${obj1}&object_two=${obj2}`);
      const data = await res.json();
      resultDiv.innerText = data.message;

      if (data.winner === obj1) {
        score1++;
      } else if (data.winner === obj2) {
        score2++;
      }
    } catch (err) {
      resultDiv.innerText = `⚠️ Could not determine winner. Please try again.`;
      return;
    }
  }

  round++;
  updateUI();

  if (round > 3) {
    playBtn.disabled = true;
    showFinalResult();
  }
});

function getLocalResult(obj1, obj2) {
  if (obj1 === obj2) {
    return { winner: null, message: `Both players chose ${obj1}. It's a tie!` };
  } else if (rules[obj1] && rules[obj1].includes(obj2)) {
    return { winner: obj1, message: `${obj1} beats ${obj2}` };
  } else {
    return { winner: obj2, message: `${obj2} beats ${obj1}` };
  }
}

function updateUI() {
  roundNumber.innerText = round <= 3 ? round : 3;
  score1Span.innerText = score1;
  score2Span.innerText = score2;
}

function showFinalResult() {
  if (score1 > score2) {
    resultDiv.innerText += "\n🏆 Player 1 Wins the Game!";
  } else if (score2 > score1) {
    resultDiv.innerText += "\n🏆 Player 2 Wins the Game!";
  } else {
    resultDiv.innerText += "\n🤝 It's a Tie!";
  }
  restartBtn.classList.remove('hidden');
}
