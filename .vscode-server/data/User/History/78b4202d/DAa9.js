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
    console.log("API Response:", data); // Debugging line to check API response

    if (!data.objects) throw new Error("API data is invalid");
    objects = data.objects;

  } catch (err) {
    console.warn("API failed, using fallback objects.");
    objects = ["rock", "paper", "scissors", "fire", "water", "gun", "devil"];
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

// Enable the "Play Round" button when both players select an object
function enablePlayButton() {
  const obj1 = player1Select.value;
  const obj2 = player2Select.value;
  
  if (obj1 && obj2) {
    playBtn.disabled = false;  // Enable play button when both players have selected objects
  } else {
    playBtn.disabled = true;  // Keep it disabled if either player hasn't selected an object
  }
}

player1Select.addEventListener('change', enablePlayButton);
player2Select.addEventListener('change', enablePlayButton);

playBtn.addEventListener('click', async () => {
  const obj1 = player1Select.value;
  const obj2 = player2Select.value;

  try {
    const res = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${obj1}&object_two=${obj2}`);
    const data = await res.json();
    console.log("Round Result:", data);  // Debugging line to check the result of the match

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

  round++;
  updateUI();

  if (round > 3) {
    playBtn.disabled = true;
    showFinalResult();
  }
});

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
