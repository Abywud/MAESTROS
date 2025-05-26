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

// Start game
startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  loadObjects();
});

// Restart game
restartBtn.addEventListener('click', () => {
  round = 1;
  score1 = 0;
  score2 = 0;
  updateUI();
  resultDiv.innerText = "";
  restartBtn.classList.add('hidden');
  playBtn.disabled = true;
  player1Select.selectedIndex = 0;
  player2Select.selectedIndex = 0;
});

// Load 101 objects from API
async function loadObjects() {
  try {
    const res = await fetch('https://rps101.pythonanywhere.com/api/v1/objects/all');
    const data = await res.json();

    if (!data.objects) throw new Error("API returned unexpected data.");
    objects = data.objects;
  } catch (err) {
    console.warn("API failed, using fallback objects.");
    objects = ["rock", "paper", "scissors", "fire", "water", "gun", "devil"];
    resultDiv.innerText = "⚠️ Could not load from API. Using fallback options.";
  }

  populateSelect(player1Select);
  populateSelect(player2Select);
}

// Populate dropdown
function populateSelect(select) {
  select.innerHTML = `<option value="" disabled selected>Select object</option>`;
  objects.forEach(obj => {
    const option = document.createElement('option');
    option.value = obj;
    option.textContent = obj;
    select.appendChild(option);
  });
}

// Enable/disable Play button
function checkSelections() {
  playBtn.disabled = !player1Select.value || !player2Select.value;
}

player1Select.addEventListener('change', checkSelections);
player2Select.addEventListener('change', checkSelections);

// Play one round
playBtn.addEventListener('click', async () => {
  const obj1 = player1Select.value;
  const obj2 = player2Select.value;

  if (obj1 === obj2) {
    resultDiv.innerText = "⚠️ You both selected the same object. It's a tie!";
    round++;
    updateUI();
    if (round > 3) {
      playBtn.disabled = true;
      showFinalResult();
    }
    return;
  }

  try {
    const res = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${obj1}&object_two=${obj2}`);
    const data = await res.json();
    resultDiv.innerText = data.message;

    if (data.winner === obj1) score1++;
    else if (data.winner === obj2) score2++;
  } catch (err) {
    resultDiv.innerText = "⚠️ Could not determine winner. Please try again.";
    return;
  }

  round++;
  updateUI();

  if (round > 3) {
    playBtn.disabled = true;
    showFinalResult();
  }
});

// Update scores and round
function updateUI() {
  roundNumber.innerText = round <= 3 ? round : 3;
  score1Span.innerText = score1;
  score2Span.innerText = score2;
}

// Show winner
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
