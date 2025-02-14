let isOpen = false;

function createConfetti() {
  // Extended pastel palette for confetti
  const colors = [
    "#B39DDB",
    "#81D4FA",
    "#FFCC80",
    "#FFF59D",
    "#FFCDD2",
    "#C8E6C9",
  ];
  for (let i = 0; i < 100; i++) {
    const confettiElem = document.createElement("div");
    confettiElem.className = "confetti";
    confettiElem.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confettiElem.style.left = Math.random() * 100 + "vw";
    confettiElem.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(confettiElem);

    confettiElem.addEventListener("animationend", () => {
      confettiElem.remove();
    });
  }
}

function toggleEnvelope(container) {
  isOpen = !isOpen;
  container.classList.toggle("open");

  if (isOpen) {
    createConfetti();
    // Confetti explosion with canvas-confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: [
        "#B39DDB",
        "#81D4FA",
        "#FFCC80",
        "#FFF59D",
        "#FFCDD2",
        "#C8E6C9",
      ],
    });
  }
}

// Pink fine trail functionality for the mouse
document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.className = "mouse-trail";
  // Random rotation for a subtle distortion effect
  const randomRotation = Math.random() * 60 - 30; // entre -30° et 30°
  trail.style.setProperty("--r", randomRotation + "deg");
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
  document.body.appendChild(trail);
  trail.addEventListener("animationend", () => {
    trail.remove();
  });
});
