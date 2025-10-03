const sounds = [
  "applause.mp3",
  "boo.mp3",
  "gasp.mp3",
  "tada.mp3",
  "victory.mp3",
  "wrong.mp3",
  "stop.mp3"
];

let currentAudio = null;

for (let i = 1; i <= sounds.length; i++) {
  const btn = document.getElementById(`btn${i}`);
  if (btn) {
    btn.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(`sounds/${sounds[i - 1]}`);
      currentAudio.play();
    });
  }
}
