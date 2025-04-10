const button = document.getElementById("button");
const levelInfo = document.getElementById("level");
const gameArea = document.getElementById("area");

let clickCount = 0;
let level = 1;
let escapeTime = 500;
let escapeTimeoutId;

function moveButton() {
  const maxLeft = gameArea.clientWidth - button.offsetWidth;
  const maxTop = gameArea.clientHeight - button.offsetHeight;

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  button.style.marginLeft = `${left}px`;
  button.style.marginTop = `${top}px`;
}

function updateLevelInfo() {
  levelInfo.textContent = `Level: ${level} | Clicks: ${clickCount}`;
}

button.addEventListener("mouseenter", () => {
  escapeTimeoutId = setTimeout(moveButton, escapeTime);
});

button.addEventListener("mouseleave", () => {
  clearTimeout(escapeTimeoutId);
});

button.addEventListener("click", () => {
  clearTimeout(escapeTimeoutId);

  clickCount++;
  updateLevelInfo();

  // Seviye atlama kontrolü
  if (clickCount >= 3) {
    level++;
    clickCount = 0;

    if (level >= 6) {
      escapeTime = 0; 
    } else {
      escapeTime = Math.max(100, escapeTime - 100); 
    }

    alert(`Level ${level - 1} geçti! Yeni seviyeye hoş geldin!`);
  }

  moveButton();
});

moveButton();
updateLevelInfo();
