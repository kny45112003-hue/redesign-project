document.addEventListener("DOMContentLoaded", function () {
  const pins = document.querySelectorAll(".map-pin");

  pins.forEach(function (pin) {
    pin.addEventListener("click", function () {
      document.querySelectorAll(".postit").forEach(function (p) {
        p.classList.remove("show");
      });

      const item = pin.parentElement;
      const postit = item.querySelector(".postit");

      postit.classList.add("show");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".theme-card");
  const prevBtn = document.querySelector(".theme .prev");
  const nextBtn = document.querySelector(".theme .next");
  const title = document.getElementById("theme-title");
  const desc = document.getElementById("theme-desc");

  let current = 0;

  function updateThemeSlider() {
    cards.forEach((card) => {
      card.classList.remove("active", "prev", "next");
    });

    const prevIndex = (current - 1 + cards.length) % cards.length;
    const nextIndex = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[prevIndex].classList.add("prev");
    cards[nextIndex].classList.add("next");

    title.textContent = cards[current].dataset.title;
    desc.textContent = cards[current].dataset.desc;
  }

  nextBtn.addEventListener("click", function () {
    current = (current + 1) % cards.length;
    updateThemeSlider();
  });

  prevBtn.addEventListener("click", function () {
    current = (current - 1 + cards.length) % cards.length;
    updateThemeSlider();
  });

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      current = index;
      updateThemeSlider();
    });
  });

  updateThemeSlider();
});
