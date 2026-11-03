/* Adung measurement consent.
   Google Analytics stays off until the visitor chooses.
   Choices are stored only in this browser. */
(function () {
  var KEY = "adung_measure_v1";
  var GA_ID = "G-BNTRPJ6YL7";
  var loaded = false;

  function read() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function write(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
  }

  function loadGa() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function hide() {
    var bar = document.getElementById("adung-consent");
    if (bar) bar.hidden = true;
  }

  function choose(value) {
    write(value);
    hide();
    if (value === "granted") loadGa();
  }

  function mount() {
    if (document.getElementById("adung-consent")) return;
    var lang = (document.documentElement.lang || "vi").toLowerCase();
    var vi = lang.indexOf("vi") === 0;
    var bar = document.createElement("aside");
    bar.id = "adung-consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", vi ? "Đo lường truy cập" : "Site measurement");
    bar.innerHTML =
      '<p>' + (vi
        ? 'Adung chỉ bật Google Analytics sau khi anh/chị đồng ý. Cookie này đo trang xem và nút bấm, không bắt buộc để tải phần mềm. Xem <a href="privacy-vi.html">Chính sách bảo vệ dữ liệu</a>.'
        : 'Adung loads Google Analytics only after you agree. It measures page views and button clicks, and is not required to download the software. See the <a href="privacy-vi.html">Vietnamese data-protection notice</a>.') +
      '</p>' +
      '<div>' +
        '<button type="button" data-adung-consent="denied">' + (vi ? "Từ chối" : "Decline") + '</button>' +
        '<button type="button" data-adung-consent="granted">' + (vi ? "Đồng ý đo lường" : "Allow measurement") + '</button>' +
      '</div>';
    document.body.appendChild(bar);
    bar.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-adung-consent]");
      if (!btn) return;
      choose(btn.getAttribute("data-adung-consent"));
    });
  }

  var choice = read();
  if (choice === "granted") {
    loadGa();
  } else if (choice !== "denied") {
    if (document.body) mount();
    else document.addEventListener("DOMContentLoaded", mount);
  }

  window.adungOpenConsent = function () {
    write("");
    try { localStorage.removeItem(KEY); } catch (e) {}
    mount();
    var bar = document.getElementById("adung-consent");
    if (bar) bar.hidden = false;
  };
})();
