document.addEventListener("DOMContentLoaded", () => {
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

  const fallbackObjects = ["rock", "paper", "scissors", "fire", "water", "gun", "devil"];

  const fallbackRules = {
    rock: ["scissors", "fire", "devil"],
    paper: ["rock", "water", "gun"],
    scissors: ["paper", "devil", "water"],
    fire: ["scissors", "paper", "gun"],
    water: ["fire", "rock", "devil"],
    gun: ["rock", "scissors", "devil"],
    devil: ["paper", "fire", "gun"]
  };

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
    resultDiv.innerText = "";
    restartBtn.classList.add('hidden');
    playBtn.disabled = true;
    player1Select.selectedIndex = 0;
    player2Select.selectedIndex = 0;
    updateUI();
  });

  // Load 101 objects from API
  async function loadObjects() {
    try {
      const res = await fetch('https://rps101.pythonanywhere.com/api/v1/objects/all');
      const data = await res.json();
      objects = data.objects;

      resultDiv.innerText = "✅ 101 objects loaded.";
    } catch (err) {
      console.warn("API failed, using fallback objects.");
      objects = fallbackObjects;
      resultDiv.innerText = "⚠️ Could not load from API. Using fallback options.";
    }

    populateSelect(player1Select);
    populateSelect(player2Select);
    playBtn.disabled = true; // prevent early clicking
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

  // Enable Play button if both players select an object
  function checkIfPlayButtonShouldBeEnabled() {
    const obj1 = player1Select.value;
    const obj2 = player2Select.value;
    playBtn.disabled = !obj1 || !obj2;
  }

  player1Select.addEventListener('change', checkIfPlayButtonShouldBeEnabled);
  player2Select.addEventListener('change', checkIfPlayButtonShouldBeEnabled);

  // Local fallback match logic
  function localMatch(obj1, obj2) {
    if (obj1 === obj2) {
      return {
        winner: null,
        message: `${obj1} ties with ${obj2}.`
      };
    }

    if (fallbackRules[obj1] && fallbackRules[obj1].includes(obj2)) {
      return {
        winner: obj1,
        message: `${obj1} beats ${obj2}.`
      };
    } else if (fallbackRules[obj2] && fallbackRules[obj2].includes(obj1)) {
      return {
        winner: obj2,
        message: `${obj2} beats ${obj1}.`
      };
    } else {
      return {
        winner: null,
        message: `It's unclear who wins between ${obj1} and ${obj2}.`
      };
    }
  }

  // Play one round
  playBtn.addEventListener('click', async () => {
    if (round > 3) return;

    const obj1 = player1Select.value;
    const obj2 = player2Select.value;

    playBtn.disabled = true;

    try {
      const res = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${obj1}&object_two=${obj2}`);
      const data = await res.json();

      resultDiv.innerText = `Round ${round}: ${data.message}`;

      if (data.winner === obj1) {
        score1++;
      } else if (data.winner === obj2) {
        score2++;
      }
    } catch (err) {
      // Fall back to local logic
      if (fallbackRules[obj1] && fallbackRules[obj2]) {
        const localResult = localMatch(obj1, obj2);
        resultDiv.innerText = `Round ${round}: ${localResult.message}`;

        if (localResult.winner === obj1) {
          score1++;
        } else if (localResult.winner === obj2) {
          score2++;
        }
      } else {
        resultDiv.innerText = `⚠️ Could not determine winner (API & local match failed). Please try again.`;
        return;
      }
    }

    round++;
    updateUI();

    if (round > 3) {
      showFinalResult();
    } else {
      playBtn.disabled = false;
    }
  });

  // Update scores and round
  function updateUI() {
    roundNumber.innerText = round <= 3 ? round : 3;
    score1Span.innerText = score1;
    score2Span.innerText = score2;
  }

  // Show final result
  function showFinalResult() {
    if (score1 > score2) {
      resultDiv.innerText += `\n🏆 Player 1 Wins the Game!`;
    } else if (score2 > score1) {
      resultDiv.innerText += `\n🏆 Player 2 Wins the Game!`;
    } else {
      resultDiv.innerText += `\n🤝 It's a Tie!`;
    }
    restartBtn.classList.remove('hidden');
  }
});
