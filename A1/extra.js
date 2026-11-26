/* A1 bổ sung cho trang bài học: phiên âm + loại từ cho từ vựng, giải thích + câu mẫu + mẹo nhớ cho hộp ngữ pháp.
   Mỗi trang nạp dữ liệu của riêng nó rồi mới nạp tệp này (đặt sau cheatsheet.js để chú thích cả từ vựng trong cheat sheet):
     <script src="extra-data/<Tên trang>.js" defer></script>
     <script src="extra.js" defer></script>
   Tệp dữ liệu gán: window.A1_EXTRA = {
     vocab:   { "từ viết thường": ["/phiên âm IPA/", "loại từ"] },
     grammar: [ { title, meaning: [đoạn giải thích], examples: [[câu Anh, nghĩa Việt]], tip: "mẹo nhớ" } ]  // theo thứ tự hộp .gr trên trang
   } */
(function () {
  if (window.A1X) return;

  var CSS = [
    ".xv{display:block;margin-top:2px;line-height:1.5}",
    ".xv-ipa{font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:11.5px;color:var(--teal,#30d8c0);font-weight:400;margin-right:6px;white-space:nowrap}",
    ".xv-pos{display:inline-block;font-size:10px;font-weight:700;padding:0 7px;border-radius:100px;border:1px solid currentColor;white-space:nowrap;vertical-align:1px;letter-spacing:.2px}",
    ".xv-n{color:#5ba8ff}.xv-v{color:#40d88e}.xv-a{color:#ffd060}.xv-d{color:#c49bff}.xv-p{color:#ff8fa8}.xv-x{color:#8a8ab8}",
    ".cs-voc .xv{margin-left:0}",
    ".xg{margin-top:14px;border-top:1px dashed var(--border2);padding-top:12px}",
    ".xg h5{font-size:12px;font-weight:800;letter-spacing:.4px;margin:12px 0 6px;color:var(--text)}",
    ".xg h5:first-child{margin-top:0}",
    ".xg p{font-size:13.5px;color:var(--muted);line-height:1.75;margin:0 0 8px;max-width:78ch}",
    ".xg p b{color:var(--text)}",
    ".xg ul{list-style:none;margin:0;padding:0}",
    ".xg li{font-size:13.5px;padding:5px 0 5px 14px;position:relative;line-height:1.55;border-bottom:1px solid var(--line,rgba(255,255,255,.05))}",
    ".xg li:last-child{border-bottom:none}",
    ".xg li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:50%;background:var(--acc)}",
    ".xg li .say{font-weight:600;color:var(--text)}",
    ".xg li small{display:block;color:var(--muted);font-size:12.5px}",
    ".xg-tip{margin-top:10px;background:var(--acc-dim);border:1px solid var(--acc);border-radius:9px;padding:10px 14px;font-size:13px;color:var(--text);line-height:1.65}",
    ".xg-tip b{color:var(--acc)}",
    ".xv-legend{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-size:11.5px;color:var(--muted);margin:0 0 12px}"
  ].join("");
  var st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
  function key(s) { return s.replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim().toLowerCase(); }
  function txt(el) { return el.textContent.replace(/\s+/g, " ").trim(); }

  /* Màu theo loại từ */
  function posClass(p) {
    p = p.toLowerCase();
    if (/^(cụm )?danh từ/.test(p)) return "xv-n";
    if (/^(cụm )?động từ/.test(p)) return "xv-v";
    if (/^(cụm )?tính từ/.test(p)) return "xv-a";
    if (/^(cụm )?trạng từ/.test(p)) return "xv-d";
    if (/giới từ|liên từ|đại từ|thán từ|số từ/.test(p)) return "xv-p";
    return "xv-x";
  }

  /* Các phần tử từ vựng trên trang: thẻ từ, cột đầu của bảng có cột "Nghĩa", từ vựng trong cheat sheet */
  function vocabEls(root) {
    var out = [];
    root.querySelectorAll(".card .card-title.say, .card .card-title .say").forEach(function (el) { out.push(el); });
    root.querySelectorAll("table").forEach(function (tb) {
      if (tb.closest(".gr") || tb.closest(".cs-tbl")) return;
      var ths = Array.prototype.map.call(tb.querySelectorAll("thead th"), txt);
      /* Mỗi cột "Nghĩa" đi với các cột từ đứng trước nó (bảng có thể có nhiều cặp Tiếng Anh | Nghĩa) */
      var cols = [], start = 0;
      ths.forEach(function (h, j) {
        if (!/nghĩa/i.test(h)) return;
        for (var c = start; c < j; c++) cols.push(c);
        start = j + 1;
      });
      if (!cols.length) return;
      tb.querySelectorAll("tbody tr").forEach(function (tr) {
        cols.forEach(function (ci) {
          var c = tr.children[ci];
          if (!c) return;
          var el = c.classList.contains("say") ? c : (c.querySelectorAll(".say").length === 1 ? c.querySelector(".say") : null);
          if (!el) return;
          var t = txt(el);
          if (t.split(" ").length <= 5 && !/[.?!]$/.test(t)) out.push(el);
        });
      });
    });
    root.querySelectorAll(".cs-voc .say").forEach(function (el) { out.push(el); });
    return out;
  }
  function grammarBoxes(root) {
    return Array.prototype.filter.call(root.querySelectorAll(".gr"), function (g) { return g.querySelector(".gr-body"); });
  }

  function annotate(root, vocab) {
    if (!vocab) return 0;
    var n = 0;
    vocabEls(root).forEach(function (el) {
      var host = el.closest(".card-title") || el;
      if (host.nextElementSibling && host.nextElementSibling.classList.contains("xv")) return;
      if (el.parentElement.querySelector(":scope > .xv") || (el.tagName === "TD" && el.querySelector(".xv"))) return;
      var v = vocab[key(txt(el))];
      if (!v) return;
      var s = document.createElement("span");
      s.className = "xv";
      s.innerHTML = (v[0] ? '<span class="xv-ipa">' + esc(v[0]) + "</span>" : "") +
        (v[1] ? '<span class="xv-pos ' + posClass(v[1]) + '">' + esc(v[1]) + "</span>" : "");
      if (el.closest(".card-title")) host.after(s);          /* thẻ: dưới tên từ */
      else if (el.closest(".cs-voc")) el.parentElement.appendChild(s);
      else if (el.tagName === "TD") {
        /* ô bảng tự là .say: bọc chữ vào span.say để khi bấm nghe không đọc cả phiên âm */
        var w = document.createElement("span");
        w.className = "say"; w.tabIndex = 0; w.setAttribute("role", "button");
        while (el.firstChild) w.appendChild(el.firstChild);
        el.classList.remove("say"); el.removeAttribute("tabindex"); el.removeAttribute("role");
        el.appendChild(w); el.appendChild(s);
      }
      else el.after(s);                                      /* span.say trong ô: ngay dưới từ */
      n++;
    });
    return n;
  }

  function explain(root, grammar) {
    if (!grammar) return 0;
    var n = 0;
    grammarBoxes(root).forEach(function (g, i) {
      var G = grammar[i];
      if (!G || g.querySelector(".xg")) return;
      var h = "";
      if (G.meaning && G.meaning.length) h += "<h5>📖 Ý nghĩa của công thức</h5>" + G.meaning.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("");
      if (G.examples && G.examples.length) h += "<h5>🗣️ Câu mẫu</h5><ul>" + G.examples.map(function (e) {
        return '<li><span class="say" tabindex="0" role="button">' + esc(e[0]) + "</span><small>" + esc(e[1]) + "</small></li>";
      }).join("") + "</ul>";
      if (G.tip) h += '<div class="xg-tip"><b>⚡ Mẹo nhớ nhanh:</b> ' + fmt(G.tip) + "</div>";
      var d = document.createElement("div");
      d.className = "xg";
      d.innerHTML = h;
      g.querySelector(".gr-body").appendChild(d);
      n++;
    });
    return n;
  }

  window.A1X = { annotate: annotate, explain: explain, vocabEls: vocabEls, grammarBoxes: grammarBoxes, key: key };

  var X = window.A1_EXTRA, content = document.querySelector(".content");
  if (!X || !content) return;
  annotate(content, X.vocab);
  explain(content, X.grammar);
})();