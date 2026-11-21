/* A1 cheat sheet — tóm tắt toàn bài ở cuối mỗi trang.
   Mỗi trang nạp dữ liệu của riêng nó rồi mới nạp tệp này:
     <script src="cheatsheet-data/<Tên trang>.js" defer></script>
     <script src="cheatsheet.js" defer></script>
   Tệp dữ liệu gán: window.A1_CHEAT = { goal, phrases, grammar, mistakes, vocab, tips } (xem cheatsheet-data/Weather.js).
   Cheat-Sheet.html dùng lại A1CS.body(D) để gom cheat sheet của tất cả các bài. */
(function () {
  if (window.A1CS) return;

  var CSS = [
    ".cs-tag{color:var(--sk,#a07af4);background:var(--sk-dim,rgba(160,122,244,.12))}",
    ".cs-goal{background:var(--s1);border:1px solid var(--border2);border-left:3px solid var(--acc);border-radius:10px;padding:14px 18px;font-size:14px;line-height:1.75;color:var(--text);margin-bottom:8px}",
    ".cs-goal ul{margin:6px 0 0;padding-left:20px}.cs-goal li{margin:2px 0}",
    ".cs-h{font-size:15px;font-weight:800;margin:30px 0 12px;display:flex;align-items:center;gap:10px;color:var(--text)}",
    ".cs-h::after{content:'';flex:1;height:1px;background:var(--border)}",
    ".cs-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}",
    ".cs-box{background:var(--s1);border:1px solid var(--border);border-radius:11px;padding:14px 16px;min-width:0}",
    ".cs-box h4{font-size:12.5px;font-weight:800;color:var(--acc);margin:0 0 6px;letter-spacing:.2px}",
    ".cs-ph{padding:7px 0;border-bottom:1px solid var(--line,rgba(255,255,255,.05));font-size:13.5px;line-height:1.6}",
    ".cs-ph:last-child{border-bottom:none}",
    ".cs-ph .say{font-weight:600;color:var(--text)}",
    ".cs-ph .cs-vi{display:block;color:var(--muted);font-size:12.5px}",
    ".cs-ph .cs-note{display:block;color:var(--tip-fg,#8ab8f0);font-size:12px}",
    ".cs-gr{background:var(--s1);border:1px solid var(--border);border-radius:11px;padding:16px 18px;margin-bottom:12px}",
    ".cs-gr h4{font-size:14px;font-weight:800;margin:0 0 8px;color:var(--text)}",
    ".cs-fm{display:inline-block;font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:12.5px;background:var(--code-bg);color:var(--teal);padding:4px 10px;border-radius:6px;margin:0 6px 8px 0;line-height:1.5}",
    ".cs-gr p{font-size:13.5px;color:var(--muted);line-height:1.75;margin:4px 0 8px;max-width:78ch}",
    ".cs-gr p b{color:var(--text)}",
    ".cs-ex{list-style:none;margin:6px 0 0;padding:0}",
    ".cs-it{background:var(--s2);border:1px solid var(--border);border-left:3px solid var(--acc);border-radius:10px;padding:12px 14px;margin:10px 0}",
    ".cs-it-h{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:6px}",
    ".cs-it-h .cs-fm{margin:0}",
    ".cs-it-n{font-size:10.5px;font-weight:800;letter-spacing:.5px;color:var(--acc);text-transform:uppercase}",
    ".cs-line{font-size:13.5px;color:var(--muted);line-height:1.7;margin:4px 0;max-width:80ch}",
    ".cs-line b{color:var(--text)}",
    ".cs-warn{color:var(--warn-fg,#e0bc58)}",
    ".cs-parts{display:grid;gap:4px;margin:8px 0;padding:8px 12px;background:var(--code-bg);border-radius:8px}",
    ".cs-parts div{display:grid;grid-template-columns:minmax(90px,max-content) 1fr;gap:12px;font-size:13px;align-items:baseline}",
    ".cs-pw{font-family:var(--mono,ui-monospace,Menlo,monospace);color:var(--teal);font-weight:600}",
    ".cs-pm{color:var(--muted)}.cs-pm b{color:var(--text)}",
    ".cs-it-sub{font-size:11px;font-weight:800;letter-spacing:.5px;color:var(--text);margin:10px 0 0;text-transform:uppercase}",
    ".cs-gen{margin-top:16px}",
    ".cs-ex li{font-size:13.5px;padding:5px 0 5px 14px;position:relative;line-height:1.6}",
    ".cs-ex li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:50%;background:var(--acc)}",
    ".cs-ex .cs-vi{color:var(--muted);font-size:12.5px;display:block}",
    ".cs-tbl{width:100%;border-collapse:collapse;font-size:13px}",
    ".cs-tblw{overflow-x:auto;border:1px solid var(--border);border-radius:11px}",
    ".cs-tbl th{background:var(--s3);padding:9px 12px;text-align:left;font-size:10.5px;color:var(--muted);letter-spacing:.5px;border-bottom:1px solid var(--border2)}",
    ".cs-tbl td{padding:9px 12px;border-bottom:1px solid var(--line,rgba(255,255,255,.05));vertical-align:top;color:var(--muted);line-height:1.6}",
    ".cs-tbl tr:last-child td{border-bottom:none}",
    ".cs-tbl td.cs-bad{color:var(--au,#ff6584);text-decoration:line-through;text-decoration-color:rgba(255,101,132,.5);min-width:150px}",
    ".cs-tbl td.cs-good{color:var(--ins);font-weight:600;min-width:150px}",
    ".cs-voc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px 14px}",
    ".cs-voc div{font-size:13px;padding:5px 0;border-bottom:1px dashed var(--border);min-width:0}",
    ".cs-voc .say{font-weight:700;color:var(--text)}",
    ".cs-voc span.cs-vi{color:var(--muted)}",
    ".cs-tips{margin:0;padding-left:20px;font-size:13.5px;color:var(--muted);line-height:1.75}",
    ".cs-tips li{margin-bottom:6px}.cs-tips b{color:var(--text)}",
    ".cs-bar{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}",
    ".cs-btn{background:var(--s3);color:var(--muted);border:1px solid var(--border2);border-radius:8px;padding:7px 14px;font:inherit;font-weight:700;font-size:12.5px;cursor:pointer}",
    ".cs-btn:hover{color:var(--text)}",
    ".cs-btn[aria-pressed=true]{background:var(--acc-dim);color:var(--acc);border-color:var(--acc)}",
    ".cs-btn:focus-visible{outline:2px solid var(--acc);outline-offset:2px}",
    ".cs-hidevi .cs-vi{visibility:hidden}",
    ".cs-more{font-size:12.5px;color:var(--muted);margin-top:18px}.cs-more a{color:var(--oc);text-decoration:none;border-bottom:1px dotted var(--oc)}",
    "@media(max-width:900px){.cs-grid{grid-template-columns:1fr}.cs-voc{grid-template-columns:repeat(2,minmax(0,1fr))}}",
    "@media(max-width:480px){.cs-voc{grid-template-columns:1fr}}",
    /* In: chỉ in cheat sheet, nền trắng chữ đen */
    "@media print{body.cs-printing *{visibility:hidden}body.cs-printing #cheat-sheet,body.cs-printing #cheat-sheet *{visibility:visible}",
    "body.cs-printing #cheat-sheet{position:absolute;left:0;top:0;width:100%;padding:0 8mm;color:#000}",
    "body.cs-printing{background:#fff!important}body.cs-printing .cs-bar{display:none}",
    "body.cs-printing #cheat-sheet .cs-box,body.cs-printing #cheat-sheet .cs-gr,body.cs-printing #cheat-sheet .cs-goal,body.cs-printing #cheat-sheet .cs-tblw{background:#fff;border-color:#bbb;break-inside:avoid}",
    "body.cs-printing #cheat-sheet *{color:#000!important;background:transparent!important;-webkit-text-fill-color:#000!important}",
    "body.cs-printing #cheat-sheet .cs-fm{border:1px solid #999}body.cs-printing #cheat-sheet .say::after{content:none}}"
  ].join("");
  var st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  /* **chữ đậm** trong phần giải thích */
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
  function say(en) { return '<span class="say" tabindex="0" role="button">' + esc(en) + "</span>"; }

  /* Phần thân cheat sheet; mỗi phần có data-part để trang tổng hợp lọc */
  function bodyHTML(D) {
  var h = "";
  if (D.goal) {
    h += '<div class="cs-goal" data-part="goal"><b>🎯 Học xong bài này, bạn có thể:</b><ul>' +
      D.goal.map(function (g) { return "<li>" + fmt(g) + "</li>"; }).join("") + "</ul></div>";
  }
  if (D.phrases && D.phrases.length) {
    h += '<div data-part="phrases"><div class="cs-h">💬 Mẫu câu theo tình huống</div><div class="cs-grid">' +
      D.phrases.map(function (g) {
        return '<div class="cs-box"><h4>' + esc(g.h) + "</h4>" + g.rows.map(function (r) {
          return '<div class="cs-ph">' + say(r[0]) + '<span class="cs-vi">' + esc(r[1]) + "</span>" +
            (r[2] ? '<span class="cs-note">' + fmt(r[2]) + "</span>" : "") + "</div>";
        }).join("") + "</div>";
      }).join("") + "</div></div>";
  }
  if (D.grammar && D.grammar.length) {
    h += '<div data-part="grammar"><div class="cs-h">📐 Ngữ pháp cần nhớ</div>' + D.grammar.map(function (g, i) {
      var exList = function (ex) {
        return '<ul class="cs-ex">' + ex.map(function (e) {
          return "<li>" + say(e[0]) + '<span class="cs-vi">' + esc(e[1]) + "</span></li>";
        }).join("") + "</ul>";
      };
      /* Có giải thích riêng cho từng công thức (items) thì mỗi công thức một khối; không thì hiện như cũ */
      if (g.items && g.items.length) {
        return '<div class="cs-gr"><h4>' + (i + 1) + ". " + esc(g.h) + "</h4>" +
          g.items.map(function (it, k) {
            return '<div class="cs-it"><div class="cs-it-h"><span class="cs-it-n">Công thức ' + (k + 1) + '</span><span class="cs-fm">' + esc(it.f) + "</span></div>" +
              (it.mean ? '<div class="cs-line"><b>Nghĩa:</b> ' + fmt(it.mean) + "</div>" : "") +
              (it.parts && it.parts.length ? '<div class="cs-parts">' + it.parts.map(function (pt) {
                return '<div><span class="cs-pw">' + esc(pt[0]) + '</span><span class="cs-pm">' + fmt(pt[1]) + "</span></div>";
              }).join("") + "</div>" : "") +
              (it.use ? '<div class="cs-line"><b>Dùng khi:</b> ' + fmt(it.use) + "</div>" : "") +
              (it.note ? '<div class="cs-line cs-warn"><b>Lưu ý:</b> ' + fmt(it.note) + "</div>" : "") +
              (it.ex && it.ex.length ? '<div class="cs-it-sub">Câu mẫu</div>' + exList(it.ex) : "") + "</div>";
          }).join("") +
          (g.p && g.p.length ? '<div class="cs-it-sub cs-gen">Giải thích chung</div>' + g.p.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") : "") +
          (g.ex && g.ex.length ? '<div class="cs-it-sub">Ví dụ kết hợp</div>' + exList(g.ex) : "") + "</div>";
      }
      return '<div class="cs-gr"><h4>' + (i + 1) + ". " + esc(g.h) + "</h4>" +
        (g.f || []).map(function (f) { return '<span class="cs-fm">' + esc(f) + "</span>"; }).join("") +
        (g.p || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") +
        (g.ex && g.ex.length ? exList(g.ex) : "") + "</div>";
    }).join("") + "</div>";
  }
  if (D.mistakes && D.mistakes.length) {
    h += '<div data-part="mistakes"><div class="cs-h">⚠️ Lỗi người Việt hay mắc</div><div class="cs-tblw"><table class="cs-tbl"><thead><tr><th>❌ Câu sai</th><th>✔ Câu đúng</th><th>Vì sao</th></tr></thead><tbody>' +
      D.mistakes.map(function (m) {
        return '<tr><td class="cs-bad">' + esc(m[0]) + '</td><td class="cs-good">' + say(m[1]) + "</td><td>" + fmt(m[2]) + "</td></tr>";
      }).join("") + "</tbody></table></div></div>";
  }
  if (D.vocab && D.vocab.length) {
    h += '<div data-part="vocab"><div class="cs-h">📚 Từ vựng cốt lõi</div><div class="cs-voc">' +
      D.vocab.map(function (v) { return "<div>" + say(v[0]) + ' <span class="cs-vi">: ' + esc(v[1]) + "</span></div>"; }).join("") + "</div></div>";
  }
  if (D.tips && D.tips.length) {
    h += '<div data-part="tips"><div class="cs-h">💡 Mẹo ghi nhớ và luyện tập</div><ul class="cs-tips">' +
      D.tips.map(function (t) { return "<li>" + fmt(t) + "</li>"; }).join("") + "</ul></div>";
  }
  return h;
  }


  window.A1CS = { body: bodyHTML, esc: esc };

  /* Trang bài học: chèn cheat sheet của bài vào cuối .content */
  var D = window.A1_CHEAT, content = document.querySelector(".content");
  if (!D || !content || document.getElementById("cheat-sheet")) return;
  var h = "";
  h += '<div class="sec-head"><span class="sec-tag cs-tag">CHEAT SHEET</span><div>' +
    '<div class="sec-title">📋 Cheat sheet tổng hợp cả bài</div>' +
    '<div class="sec-sub">Toàn bộ những gì cần nhớ của bài này trên một trang: mẫu câu theo tình huống, ngữ pháp có giải thích, lỗi hay gặp, từ vựng cốt lõi và mẹo ghi nhớ.</div></div></div>';
  h += '<div class="cs-bar"><button class="cs-btn" type="button" data-cs="vi" aria-pressed="false">🙈 Che nghĩa tiếng Việt</button>' +
    '<button class="cs-btn" type="button" data-cs="print">🖨️ In hoặc lưu thành PDF</button></div>';

  h += bodyHTML(D);
  h += '<p class="cs-more">Xem cheat sheet của tất cả các bài trên một trang: <a href="Cheat-Sheet.html">📋 Cheat sheet toàn khóa</a>.</p>';

  var sec = document.createElement("section");
  sec.className = "section";
  sec.id = "cheat-sheet";
  sec.innerHTML = h;
  content.appendChild(sec);

  sec.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cs]");
    if (!b) return;
    if (b.dataset.cs === "vi") {
      var on = b.getAttribute("aria-pressed") !== "true";
      b.setAttribute("aria-pressed", on ? "true" : "false");
      sec.classList.toggle("cs-hidevi", on);
    } else if (b.dataset.cs === "print") {
      document.body.classList.add("cs-printing");
      window.print();
    }
  });
  addEventListener("afterprint", function () { document.body.classList.remove("cs-printing"); });

  var side = document.querySelector(".sidebar");
  if (side) side.insertAdjacentHTML("beforeend", '<div class="nav-label">TỔNG HỢP</div><a class="nav-link" href="#cheat-sheet">📋 Cheat sheet cả bài</a>');
  var topnav = document.querySelector(".topnav");
  if (topnav) topnav.insertAdjacentHTML("beforeend", '<a href="#cheat-sheet">📋 Tổng hợp</a>');

  var mine = document.querySelectorAll('a[href="#cheat-sheet"]'), all = document.querySelectorAll(".nav-link,.topnav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var me = en.target === sec;
        if (me) all.forEach(function (l) { l.classList.remove("active"); });
        mine.forEach(function (l) { l.classList.toggle("active", me); });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    content.querySelectorAll(".section[id]").forEach(function (s) { io.observe(s); });
  }
  if (location.hash === "#cheat-sheet") sec.scrollIntoView({ behavior: "instant" });
})();
