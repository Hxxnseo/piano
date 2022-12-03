const keys = document.querySelectorAll(".key");
const nowNote = document.querySelector(".playingNote");

playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (audio) {
    const keyNote = key.getAttribute("data-note");

    nowNote.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
  }
};

window.addEventListener("keydown", playSound);
