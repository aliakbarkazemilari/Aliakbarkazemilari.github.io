function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// بستن منو وقتی بیرونش کلیک میشه
window.onclick = function(event) {
  const menu = document.getElementById("dropdown");
  const dots = document.querySelector(".menu-dots span");

  if (!dots.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none";
  }
};// وقتی صفحه لود شد
document.addEventListener("DOMContentLoaded", function () {

  // ===== تغییر هدر هنگام اسکرول =====
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== اسکرول نرم برای لینک‌ها =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
