const button = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const listMenu = document.querySelector(".listMenu");
button.addEventListener("click", function () {
  button.classList.toggle("is-active");
  menu.classList.toggle("hidden");
  listMenu.classList.add("animate__animated", "animate__slideInRight");
});

function handleBreakpoint() {
  if (window.innerWidth >= 768) {
    // Ganti 768 dengan nilai breakpoint md yang sesuai
    listMenu.classList.remove("animate__animated", "animate__slideInDown");
  } else {
    listMenu.classList.add("animate__animated", "animate__slideInDown");
  }
}

// Panggil fungsi saat halaman dimuat dan ketika jendela diubah ukurannya
window.addEventListener("DOMContentLoaded", handleBreakpoint);
window.addEventListener("resize", handleBreakpoint);

const btnMenu = document.querySelector(".btn-menu");
const menuHidden = document.querySelectorAll(".hidden-menu");

btnMenu.addEventListener("click", function () {
  menuHidden.forEach(function (menu) {
    menu.classList.toggle("hidden");
  });

  if (btnMenu.textContent === "View all menu") {
    btnMenu.textContent = "Show less";
  } else {
    btnMenu.textContent = "View all menu";
  }
});
