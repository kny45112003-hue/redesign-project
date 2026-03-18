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
  const infoBox = document.querySelector(".theme-info");

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

    infoBox.classList.add("changing");

    setTimeout(() => {
      title.textContent = cards[current].dataset.title;
      desc.textContent = cards[current].dataset.desc;
      infoBox.classList.remove("changing");
    }, 200);
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

document.addEventListener("DOMContentLoaded", function () {
  const thumbs = document.querySelectorAll(".food-thumb");
  const mainWrap = document.getElementById("foodMain");
  const mainImage = document.getElementById("foodMainImage");
  const bubble = document.getElementById("foodBubble");
  const foodName = document.getElementById("foodName");
  const foodDesc = document.getElementById("foodDesc");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");

      mainWrap.classList.add("changing");
      bubble.classList.add("changing");

      setTimeout(() => {
        mainImage.src = thumb.dataset.image;
        mainImage.alt = thumb.dataset.name;
        foodName.textContent = thumb.dataset.name;
        foodDesc.textContent = thumb.dataset.desc;

        mainWrap.classList.remove("changing");
        bubble.classList.remove("changing");
      }, 180);
    });
  });
});
