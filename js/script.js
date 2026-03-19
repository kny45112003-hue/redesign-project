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
  const items = document.querySelectorAll(".food-thumb");
  const bubble = document.getElementById("foodBubble");
  const foodName = document.getElementById("foodName");
  const foodDesc = document.getElementById("foodDesc");

  const positions = ["pos-main", "pos-1", "pos-2", "pos-3", "pos-4"];

  items.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.classList.contains("pos-main")) return;

      const mainItem = document.querySelector(".food-thumb.pos-main");
      let clickedPos = "";

      positions.forEach((pos) => {
        if (item.classList.contains(pos)) {
          clickedPos = pos;
        }
      });

      if (!clickedPos) return;

      item.classList.remove(clickedPos);
      item.classList.add("pos-main");

      mainItem.classList.remove("pos-main");
      mainItem.classList.add(clickedPos);

      items.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      bubble.classList.add("changing");

      setTimeout(() => {
        foodName.textContent = item.dataset.name;
        foodDesc.textContent = item.dataset.desc;
        bubble.classList.remove("changing");
      }, 180);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const signs = document.querySelectorAll(".shop-sign");
  const card = document.getElementById("shoppingCard");
  const cardImg = document.getElementById("shoppingCardImg");
  const cardTitle = document.getElementById("shoppingCardTitle");
  const cardDesc = document.getElementById("shoppingCardDesc");

  signs.forEach((sign) => {
    sign.addEventListener("click", function () {
      signs.forEach((item) => item.classList.remove("active"));
      sign.classList.add("active");

      card.classList.add("changing");

      setTimeout(() => {
        cardImg.src = sign.dataset.image;
        cardImg.alt = sign.dataset.title;
        cardTitle.textContent = sign.dataset.title;
        cardDesc.textContent = sign.dataset.desc;
        card.classList.remove("changing");
      }, 180);
    });
  });
});
