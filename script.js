(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme");
  var dark = window.matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : dark.matches;
  }

  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  var titles = { en: "Daohai Yu", zh: "余道海 (Daohai Yu)" };

  function setLang(l) {
    root.setAttribute("data-lang", l);
    root.lang = l === "zh" ? "zh-CN" : "en";
    document.title = titles[l];
    localStorage.setItem("lang", l);
  }

  document.getElementById("lang").addEventListener("click", function () {
    setLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
  });
  document.title = titles[root.getAttribute("data-lang")] || titles.en;

  document.getElementById("year").textContent = new Date().getFullYear();
})();
