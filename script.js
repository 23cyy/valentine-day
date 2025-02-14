let isOpen = false;

function createConfetti() {
  // Extended color palette for confetti
  const colors = [
    "#B39DDB", // purple
    "#81D4FA", // blue
    "#FFCC80", // orange
    "#FFF59D", // yellow
    "#FFCDD2", // red
    "#C8E6C9", // green
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
        "#B39DDB", // purple
        "#81D4FA", // blue
        "#FFCC80", // orange
        "#FFF59D", // yellow
        "#FFCDD2", // red
        "#C8E6C9", // green
      ],
    });
  }
}
