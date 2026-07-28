// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Language switch (simple)
let isEnglish = true;

function switchLang() {
  if (isEnglish) {
    document.body.dir = "rtl";
    document.body.style.fontFamily = "Tahoma";

    document.querySelector("#about p").innerText =
    "علی اکبر کاظمی لاری، دانشجوی دکتری مدیریت آموزشی با تمرکز بر رهبری آموزشی و توسعه سیستم‌های آموزشی است.";

    isEnglish = false;
  } else {
    document.body.dir = "ltr";

    document.querySelector("#about p").innerText =
    "I am a PhD student in Educational Management focusing on leadership and educational systems.";

    isEnglish = true;
  }
}
