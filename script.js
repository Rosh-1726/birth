// ❤️ Floating Hearts Generator
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.background = getRandomRedTone();
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

function getRandomRedTone() {
  const shades = ['#ff4d6d', '#ff6b81', '#ff5c8a', '#ff3e6c', '#ff1c52'];
  return shades[Math.floor(Math.random() * shades.length)];
}

// Auto-generate hearts every 500ms
setInterval(createHeart, 500);
