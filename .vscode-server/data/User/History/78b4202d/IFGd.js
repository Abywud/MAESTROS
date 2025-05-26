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
  playBtn.disabled = false;
});

// Load 101 objects from API
async function loadObjects() {
  try {
    const res = await fetch('https://rps101.pythonanywhere.com/api/v1/objects/all');
    const data = await res.json();
    console.log("API Response:", data);

    if (!data.objects) {
      throw new Error("API returned unexpected data.");
    }

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
  select.innerHTML = '';
  objects.forEach(obj => {
    const option = document.createElement('option');
    option.value = obj;
    option.textContent = obj;
    select.appendChild(option);
  });
}

// Play one round
playBtn.addEventListener('click', async () => {
  const obj1 = player1Select.value;
  const obj2 = player2Select.value;

  try {
    // Making API call
    const res = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${obj1}&object_two=${obj2}`);
    if (!res.ok) {
      throw new Error(`API Error: ${res.statusText}`);
    }

    // Parsing JSON response
    const data = await res.json();
    console.log("Round Result:", data); // Debugging line to check the result of the match

    // If API does not return the expected structure, handle it gracefully
    if (!data || !data.message || !data.winner) {
      throw new Error("Unexpected response
