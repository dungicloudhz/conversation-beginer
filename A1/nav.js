/* A1 site navigation — thêm <script src="nav.js" defer></script> trước </body> */
(function () {
  var PAGES = [
    { group: "Bắt đầu", items: [
      ["introduce-yourself-beginer.html", "🙋", "Giới thiệu bản thân"],
      ["Meeting-New-People.html", "🤝", "Meeting New People"],
      ["Making-Friends.html", "😊", "Making Friends"],
      ["family-english-beginner.html", "👨‍👩‍👧", "Gia đình"],
      ["thank-you-sorry.html", "🙏", "Thank You & Sorry"],
      ["english-communication-toolkit.html", "💬", "Bộ công cụ giao tiếp"],
    ]},
    { group: "Cuộc sống hằng ngày", items: [
      ["daily-routine.html", "⏰", "Hoạt động hằng ngày"],
      ["Time-and-Date.html", "📅", "Time & Date"],
      ["Weather.html", "🌤️", "Weather"],
      ["At-Home.html", "🏠", "At Home"],
      ["House-and-Furniture.html", "🛋️", "House & Furniture"],
      ["Clothes.html", "👕", "Clothes"],
      ["accupation.html", "💼", "Nghề nghiệp"],
      ["School-and-Study.html", "📚", "School & Study"],
      ["Plans-for-Tomorrow.html", "🗓️", "Plans for Tomorrow"],
    ]},
    { group: "Ăn uống & Mua sắm", items: [
      ["Food-and-Drinks.html", "🍜", "Food & Drinks"],
      ["drinking.html", "🥤", "Gọi đồ uống"],
      ["at-a-restaurant.html", "🍽️", "Gọi món tại nhà hàng"],
      ["restaurant-cafe.html", "☕", "Nhà hàng & Cafe"],
      ["Shopping.html", "🛍️", "Shopping"],
    ]},
    { group: "Đi lại & Hỗ trợ", items: [
      ["ask-for-directions.html", "🧭", "Hỏi đường & Hỏi giờ"],
      ["Asking-for-Directions-v2.html", "🗺️", "Asking for Directions"],
      ["Asking-for-Help.html", "🆘", "Asking for Help"],
      ["Transportation.html", "🚌", "Transportation"],
      ["Travel.html", "✈️", "Travel"],
      ["conversation-phone.html", "📞", "Giao tiếp qua điện thoại"],
    ]},
    { group: "Sở thích & Giải trí", items: [
      ["Weekend-Activities.html", "🎉", "Weekend Activities"],
      ["Sports.html", "⚽", "Sports"],
      ["Movies.html", "🎬", "Movies"],
      ["Music.html", "🎵", "Music"],
    ]},
  ];

  var flat = [];
  PAGES.forEach(function (g) { g.items.forEach(function (i) { flat.push(i); }); });

  var here = decodeURIComponent(location.pathname.split("/").pop() || "index.html");
  var idx = -1;
  flat.forEach(function (p, i) { if (p[0].toLowerCase() === here.toLowerCase()) idx = i; });
  var prev = idx > 0 ? flat[idx - 1] : null;
  var next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  var css = [
    ":host{all:initial}",
    "*{box-sizing:border-box}",
    "nav{font:14px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e8e8ef}",
    ".fab{position:fixed;left:calc(16px + env(safe-area-inset-left,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:2147483000;display:flex;align-items:center;gap:6px;padding:10px 14px;border-radius:999px;border:1px solid #3a3a4a;background:#1d1d27;color:#fff;font:600 13px/1 inherit;font-family:inherit;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.45)}",
    ".fab:hover{background:#2a2a38}",
    ".overlay{position:fixed;inset:0;z-index:2147483001;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .2s}",
    ".panel{position:fixed;top:0;left:0;bottom:0;z-index:2147483002;width:min(340px,100vw);background:#16161e;border-right:1px solid #2e2e3c;box-shadow:8px 0 30px rgba(0,0,0,.4);display:flex;flex-direction:column;transform:translateX(-100%);transition:transform .25s ease;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}",
    ".open .overlay{opacity:1;pointer-events:auto}",
    ".open .panel{transform:none}",
    ".head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #2e2e3c}",
    ".head b{font-size:15px}",
    ".close{background:none;border:0;color:#aaa;font-size:22px;cursor:pointer;line-height:1;padding:4px 8px}",
    ".close:hover{color:#fff}",
    ".list{overflow-y:auto;flex:1;padding:8px 0 16px}",
    ".grp{margin:12px 16px 4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8a8aa0}",
    "a{color:inherit;text-decoration:none}",
    ".item{display:flex;align-items:center;gap:10px;padding:8px 16px;margin:1px 8px;border-radius:8px}",
    ".item:hover{background:#242431}",
    ".item.cur{background:#2d3b6b;color:#fff;font-weight:600}",
    ".item .e{width:22px;text-align:center}",
    ".pn{display:flex;gap:8px;padding:12px 16px;border-top:1px solid #2e2e3c}",
    ".pn a,.pn span{flex:1;min-width:0;padding:9px 10px;border-radius:8px;background:#242431;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".pn a:hover{background:#30304a}",
    ".pn span{opacity:.35}",
    ".pn .nx{text-align:right}",
  ].join("");

  var html = '<nav aria-label="Danh sách bài học A1">' +
    '<button class="fab" type="button" aria-expanded="false" aria-controls="a1panel">☰ Bài học' +
    (idx >= 0 ? ' <small style="opacity:.6">' + (idx + 1) + "/" + flat.length + "</small>" : "") + "</button>" +
    '<div class="overlay"></div>' +
    '<div class="panel" id="a1panel" role="dialog" aria-label="Bài học A1">' +
    '<div class="head"><b>📘 Bài học A1</b><button class="close" type="button" aria-label="Đóng">×</button></div>' +
    '<div class="list">' +
    '<a class="item' + (here.toLowerCase() === "index.html" ? " cur" : "") + '" href="index.html"><span class="e">🏠</span>Trang chủ A1</a>' +
    PAGES.map(function (g) {
      return '<div class="grp">' + esc(g.group) + "</div>" + g.items.map(function (p) {
        var cur = flat[idx] === p;
        return '<a class="item' + (cur ? " cur" : "") + '" href="' + encodeURI(p[0]) + '"' +
          (cur ? ' aria-current="page"' : "") + '><span class="e">' + p[1] + "</span>" + esc(p[2]) + "</a>";
      }).join("");
    }).join("") +
    "</div>" +
    '<div class="pn">' +
    (prev ? '<a href="' + encodeURI(prev[0]) + '">← ' + esc(prev[2]) + "</a>" : "<span>← Bài trước</span>") +
    (next ? '<a class="nx" href="' + encodeURI(next[0]) + '">' + esc(next[2]) + " →</a>" : '<span class="nx">Bài sau →</span>') +
    "</div></div></nav>";

  function mount() {
    if (document.getElementById("a1-site-nav")) return;
    var host = document.createElement("div");
    host.id = "a1-site-nav";
    var root = host.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + css + "</style>" + html;
    document.body.appendChild(host);

    var nav = root.querySelector("nav");
    var fab = root.querySelector(".fab");
    function toggle(on) {
      nav.classList.toggle("open", on);
      fab.setAttribute("aria-expanded", on ? "true" : "false");
      if (on) { var c = root.querySelector(".item.cur"); if (c) c.scrollIntoView({ block: "center" }); }
    }
    fab.addEventListener("click", function () { toggle(true); });
    root.querySelector(".close").addEventListener("click", function () { toggle(false); });
    root.querySelector(".overlay").addEventListener("click", function () { toggle(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggle(false);
      var t = e.target && e.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA" || (e.target && e.target.isContentEditable)) return;
      if (e.altKey && e.key === "ArrowLeft" && prev) location.href = encodeURI(prev[0]);
      if (e.altKey && e.key === "ArrowRight" && next) location.href = encodeURI(next[0]);
    });
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);

  window.A1_PAGES = PAGES;
})();
