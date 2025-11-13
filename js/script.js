// toggle class active

// hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
// toggle end

// klik diluar untuk menutup menu
const menu = document.querySelector("#menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
// const itemDetailModal = document.querySelector("#item-detail-box");
// const itemDetailButton = document.querySelectorAll(".item-detail-button");

// itemDetailButton.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();
//   };
// });

// script.js

// modal box
const itemDetailModal = document.querySelector("#item-detail-box");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // 1. Ambil "kartu" terdekat dari tombol (btn) yang diklik
    const productCard = btn.closest(".product-card");

    // 2. Ambil semua data dari dalam "kartu" itu
    const imageSrc = productCard.querySelector(".product-image img").src;
    const title = productCard.querySelector(".product-content h3").innerText;
    const price = productCard.querySelector(".product-price").innerHTML;
    const description = productCard.dataset.description; // Ambil dari data-description

    // 3. Cari elemen-elemen di dalam MODAL
    const modalImage = itemDetailModal.querySelector(".modal-content img");
    const modalTitle = itemDetailModal.querySelector(".modal-content h3");
    const modalDesc = itemDetailModal.querySelector(".modal-content p");
    const modalPrice = itemDetailModal.querySelector(
      ".modal-content .product-price"
    );

    // 4. Salin data dari KARTU ke MODAL
    modalImage.src = imageSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = description;
    modalPrice.innerHTML = price;

    // 5. Baru tampilkan modalnya!
    itemDetailModal.style.display = "flex";
  };
});
// tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik untuk close diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
