document.getElementById("lang-switcher").addEventListener("change", function () {
  const lang = this.value;
  fetch(`lang/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.innerHTML = data[key];
        }
      });
    });
});