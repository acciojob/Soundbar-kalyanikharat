//your JS code here. If required.
const sounds = [
  "applause.mp3",
  "boo.mp3",
  "gasp.mp3",
  "tada.mp3",
  "victory.mp3",
  "wrong.mp3",
  "stop.mp3",
  
];

for (let i = 1; i <= 9; i++) {
  const btn = document.getElementById(`btn${i}`);
  btn.addEventListener("click", () => {
    const audio = new Audio(`sounds/${sounds[i - 1]}`);
    audio.play();
  });
}
