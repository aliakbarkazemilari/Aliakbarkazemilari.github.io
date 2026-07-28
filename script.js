let lang = "fa";

function toggleLang() {
  lang = lang === "fa" ? "en" : "fa";

  document.querySelectorAll("[data-fa]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
}

/* Civilica Auto */
fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://civilica.com/p/445214/print/"))
  .then(res => res.json())
  .then(data => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(data.contents, "text/html");

    let links = doc.querySelectorAll("a");
    let output = "<ul>";

    links.forEach(link => {
      if (link.innerText.length > 20) {
        output += `<li><a href="${link.href}" target="_blank">${link.innerText}</a></li>`;
      }
    });

    output += "</ul>";
    document.getElementById("pub-list").innerHTML = output;
  })
  .catch(() => {
    document.getElementById("pub-list").innerText = "خطا در بارگذاری مقالات";
  });
