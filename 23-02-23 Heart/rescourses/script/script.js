const heart = document.querySelector(".heart");

function toggleHeartAnimation() {
  heart.classList.toggle("paused");
}

heart.addEventListener("click", toggleHeartAnimation);
