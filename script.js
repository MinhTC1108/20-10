const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  hint.style.opacity = envelope.classList.contains("open") ? "0" : "1";
});
