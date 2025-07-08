const emblems = [
  'bowser.png',
  'coin.png',
  'flower.png',
  'mush.png',
  'penguin.png',
  'prop.png',
  'star.png'
];
const grid = document.getElementById('emblem-grid');

// Limite maximale d'emblèmes
const maxEmblems = 80; // Changez ce nombre pour ajuster la densité

for (let i = 0; i < maxEmblems; i++) {
  const div = document.createElement('div');
  div.className = 'emblem';
  const delay = Math.random() * -20;
  div.style.animationDelay = `${delay}s`;

  const img = document.createElement('img');
  img.src = emblems[Math.floor(Math.random() * emblems.length)];
  img.alt = 'Emblem';

  div.appendChild(img);
  grid.appendChild(div);
}

/**			Sound-Related			**/

// Lecture du son après la première interaction
const audio = document.getElementById('intro-audio');
audio.volume = 0.3; // 🔉 Volume à 30%

function playIntroSound() {
  audio.play().catch((e) => {
    console.warn("Lecture audio bloquée :", e);
  });
  // Supprime le listener une fois le son joué
  window.removeEventListener('click', playIntroSound);
}

// Attend le premier clic
window.addEventListener('click', playIntroSound);
