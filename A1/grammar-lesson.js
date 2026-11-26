/* A1 Ngữ pháp nền tảng — dựng cả trang ngữ pháp từ window.A1_GRAMMAR (grammar-data/<Tên trang>.js).
   Trang HTML chỉ là khung: nạp grammar-lesson.css, dữ liệu, tệp này, rồi nav.js / review.js / cheatsheet.js.
   Cấu trúc dữ liệu (xem grammar-data/Grammar-Pronouns.js):
   { icon, short, hero: [dòng 1, dòng 2], desc, chips: [], goal: [],
     sections: [ { nav, title, sub, intro: [đoạn], table: { head: [], rows: [[ô]], say: [chỉ số cột đọc được] },
                   formulas: [ { f, mean, parts: [[từ, giải thích]], use, note, ex: [[Anh, Việt]] } ],
                   mistakes: [[câu sai, câu đúng, vì sao]], talk: { title, turns: [["A", Anh, Việt]] }, tip } ],
     speak: [ { q, vi, hint, answers: [[Anh, Việt]] } ],
     exercises: [ { title, items: [ { q, a: [đáp án chấp nhận], hint } hoặc { q, options: [], a: chỉ số, why } ] } ],
     vocab: [[Anh, Việt]], tips: [] }
   Ngoài ra tạo window.A1_CHEAT để cheatsheet.js hiện cheat sheet cuối trang, và A1G.toCheat cho trang Cheat-Sheet.html. */
(function () {
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
  function say(en) { return '<span class="say">' + esc(en) + "</span>"; }

  /* Cheat sheet sinh từ dữ liệu ngữ pháp */
  function toCheat(D) {
    var mistakes = [], phrases = [];
    (D.sections || []).forEach(function (s) {
      (s.mistakes || []).forEach(function (m) { mistakes.push(m); });
      var rows = [];
      (s.formulas || []).forEach(function (f) { (f.ex || []).slice(0, 2).forEach(function (e) { rows.push([e[0], e[1]]); }); });
      if (rows.length) phrases.push({ h: s.nav.replace(/^\S+\s+/, ""), rows: rows.slice(0, 5) });
    });
    return {
      goal: D.goal || [],
      phrases: phrases,
      grammar: (D.sections || []).filter(function (s) { return s.formulas && s.formulas.length; }).map(function (s) {
        return { h: s.title, f: s.formulas.map(function (f) { return f.f; }), items: s.formulas, p: s.intro || [], ex: [] };
      }),
      mistakes: mistakes,
      vocab: D.vocab || [],
      tips: D.tips || []
    };
  }
  window.A1G = { toCheat: toCheat };

  var D = window.A1_GRAMMAR, app = document.getElementById("app");
  if (!D || !app) return;
  window.A1_CHEAT = toCheat(D);

  var TAGS = ["t1", "t2", "t3", "t4", "t5"];
  function exBox(head, rows, tag) {
    return '<div class="ex-box"><div class="ex-head">' + esc(head) + (tag ? '<span class="ex-tag t2">' + esc(tag) + "</span>" : "") + '</div><div class="ex-body">' +
      rows.map(function (r) { return '<div class="ex-row"><span class="ex-en say">' + esc(r[0]) + '</span><span class="ex-vn">' + esc(r[1]) + "</span></div>"; }).join("") +
      "</div></div>";
  }
  function formula(f, k) {
    return '<div class="fx"><div class="fx-h"><span class="fx-n">Công thức ' + (k + 1) + '</span><span class="fx-f">' + esc(f.f) + "</span></div>" +
      (f.mean ? '<div class="fx-line"><b>Nghĩa:</b> ' + fmt(f.mean) + "</div>" : "") +
      (f.parts && f.parts.length ? '<div class="fx-parts">' + f.parts.map(function (p) {
        return '<div><span class="fx-pw">' + esc(p[0]) + '</span><span class="fx-pm">' + fmt(p[1]) + "</span></div>";
      }).join("") + "</div>" : "") +
      (f.use ? '<div class="fx-line"><b>Dùng khi:</b> ' + fmt(f.use) + "</div>" : "") +
      (f.note ? '<div class="fx-line fx-warn"><b>Lưu ý:</b> ' + fmt(f.note) + "</div>" : "") +
      (f.ex && f.ex.length ? '<div class="fx-sub">Câu mẫu</div>' + exBox("BẤM VÀO CÂU ĐỂ NGHE", f.ex) : "") + "</div>";
  }
  function table(t) {
    var sayCols = t.say || [];
    return '<table class="tbl g-tbl"><thead><tr>' + t.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t.rows.map(function (r) {
        return "<tr>" + r.map(function (c, i) { return sayCols.indexOf(i) >= 0 && c && c.charAt(0) !== "(" ? '<td><span class="say">' + esc(c) + "</span></td>" : "<td>" + fmt(c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table>";
  }

  var secs = D.sections || [];
  var side = '<aside class="sidebar"><div class="sb-logo"><div class="sb-brand"><div class="logo-icon">' + D.icon + '</div><div class="logo-text"><h2>' + esc(D.short) +
    '</h2><p>📘 Ngữ pháp nền tảng</p></div></div><div class="prog-wrap"><div class="prog-bar" id="pbar"></div></div></div>' +
    '<div class="nav-label">NGỮ PHÁP</div>' +
    secs.map(function (s, i) { return '<a class="nav-link" href="#s' + (i + 1) + '">' + esc(s.nav) + "</a>"; }).join("") +
    '<div class="nav-label">THỰC HÀNH GIAO TIẾP</div>' +
    (D.speak && D.speak.length ? '<a class="nav-link" href="#noi">🎤 Luyện nói</a>' : "") +
    (D.exercises && D.exercises.length ? '<a class="nav-link" href="#bai-tap">✍️ Bài tập</a>' : "") + "</aside>";
  var top = '<nav class="topnav">' + secs.map(function (s, i) { return '<a href="#s' + (i + 1) + '">' + (i + 1) + " " + esc(s.nav.replace(/^\S+\s+/, "")) + "</a>"; }).join("") +
    (D.speak && D.speak.length ? '<a href="#noi">🎤 Nói</a>' : "") + (D.exercises && D.exercises.length ? '<a href="#bai-tap">✍️ Bài tập</a>' : "") + "</nav>";
  var hero = '<header class="hero"><div class="eyebrow"><i></i>📘 Ngữ pháp nền tảng · Học để nói được</div><h1>' + esc(D.hero[0]) + '<br><span class="grad">' + esc(D.hero[1]) + "</span></h1>" +
    '<p class="hero-desc">' + fmt(D.desc) + '</p><div class="chips">' + (D.chips || []).map(function (c, i) { return '<span class="chip c' + (i % 5 + 1) + '">' + esc(c) + "</span>"; }).join("") + "</div></header>";

  var body = "";
  if (D.goal && D.goal.length) body += '<div class="info i-ok" style="margin-bottom:40px"><span>🎯</span><span><strong>Học xong bài này, bạn có thể:</strong><br>' + D.goal.map(function (g) { return "• " + fmt(g); }).join("<br>") + "</span></div>";
  secs.forEach(function (s, i) {
    body += '<section class="section" id="s' + (i + 1) + '"><div class="sec-head"><span class="sec-tag ' + TAGS[i % 5] + '">PHẦN ' + (i + 1) + '</span><div><div class="sec-title">' + esc(s.title) + '</div><div class="sec-sub">' + esc(s.sub || "") + "</div></div></div>";
    (s.intro || []).forEach(function (p) { body += '<p class="t">' + fmt(p) + "</p>"; });
    if (s.table) body += table(s.table);
    (s.formulas || []).forEach(function (f, k) { body += formula(f, k); });
    if (s.mistakes && s.mistakes.length) {
      body += '<div class="sub-title">Lỗi người Việt hay mắc</div>' + s.mistakes.map(function (m) {
        return '<div class="cmpw"><div class="cmp"><div class="bad"><b>❌ SAI</b><div>' + esc(m[0]) + '</div></div><div class="good"><b>✔ ĐÚNG</b><div class="say">' + esc(m[1]) + '</div></div></div><div class="why"><b>Vì sao:</b> ' + fmt(m[2]) + "</div></div>";
      }).join("");
    }
    if (s.talk) {
      body += '<div class="sub-title">💬 Dùng trong hội thoại</div><div class="dlg"><div class="dlg-t">' + esc(s.talk.title) + "</div>" + s.talk.turns.map(function (t) {
        return '<div class="turn"><span class="who ' + (t[0] === "A" ? "wa" : "wb") + '">' + esc(t[0]) + '</span><div><span class="say">' + esc(t[1]) + "</span><small>" + esc(t[2]) + "</small></div></div>";
      }).join("") + "</div>";
    }
    if (s.tip) body += '<div class="info i-tip"><span>💡</span><span><strong>Mẹo nhớ nhanh:</strong> ' + fmt(s.tip) + "</span></div>";
    body += "</section>";
  });

  /* Luyện nói */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (D.speak && D.speak.length) {
    body += '<section class="section" id="noi"><div class="sec-head"><span class="sec-tag t5">LUYỆN NÓI</span><div><div class="sec-title">🎤 Luyện nói giao tiếp</div><div class="sec-sub">Nghe câu hỏi, tự trả lời to bằng câu đầy đủ, rồi so với câu trả lời mẫu</div></div></div>' +
      '<div class="info i-ok"><span>✅</span><span><strong>Cách luyện:</strong> bấm 🔊 để nghe câu hỏi như đang nói chuyện thật. Trả lời to về <strong>chính bạn</strong>, dùng đúng ngữ pháp trong gợi ý. ' +
      (SR ? "Bấm 🎤 để máy ghi lại câu bạn nói và xem máy nghe được gì; nếu máy nghe sai từ nào, hãy luyện lại từ đó. " : "Trình duyệt này chưa hỗ trợ nhận giọng nói (hãy dùng Chrome), bạn vẫn luyện được bằng cách nói to rồi tự so sánh. ") +
      "Cuối cùng mở câu trả lời mẫu để học thêm cách nói.</span></div>" +
      D.speak.map(function (q, i) {
        return '<div class="sp" data-sp="' + i + '"><div class="sp-top">Câu hỏi ' + (i + 1) + "/" + D.speak.length + '</div><div class="sp-q">' + esc(q.q) + '</div><div class="sp-vi">' + esc(q.vi) + "</div>" +
          (q.hint ? '<div class="sp-hint">💡 ' + fmt(q.hint) + "</div>" : "") +
          '<div class="sp-row"><button class="btn" type="button" data-act="ask">🔊 Nghe câu hỏi</button>' +
          (SR ? '<button class="btn rec" type="button" data-act="rec">🎤 Trả lời bằng giọng nói</button>' : "") +
          '<button class="btn alt" type="button" data-act="ans">👁 Xem câu trả lời mẫu</button></div>' +
          '<div class="sp-heard" aria-live="polite"></div><div class="sp-ans">' + exBox("CÂU TRẢ LỜI MẪU", q.answers) + "</div></div>";
      }).join("") + "</section>";
  }

  /* Bài tập */
  if (D.exercises && D.exercises.length) {
    var qn = 0;
    body += '<section class="section" id="bai-tap"><div class="sec-head"><span class="sec-tag t2">BÀI TẬP</span><div><div class="sec-title">✍️ Bài tập</div><div class="sec-sub">Làm hết rồi bấm Kiểm tra. Không phân biệt chữ hoa, chữ thường.</div></div></div><div id="qz">' +
      D.exercises.map(function (g) {
        return '<div class="qz-sec">' + esc(g.title) + "</div>" + g.items.map(function (it) {
          qn++;
          var h = '<div class="qz" data-q="' + qn + '"><div class="qz-q">' + qn + ". " + fmt(it.q) + (it.hint ? "<small>(" + esc(it.hint) + ")</small>" : "") + "</div>";
          if (it.options) h += '<div class="qz-opts">' + it.options.map(function (o, k) { return '<button class="qz-opt" type="button" data-k="' + k + '">' + esc(o) + "</button>"; }).join("") + "</div>";
          else h += '<input type="text" autocomplete="off" spellcheck="false" lang="en" aria-label="Câu ' + qn + '">';
          return h + '<div class="qz-key"></div></div>';
        }).join("");
      }).join("") + "</div>" +
      '<div class="btns" style="margin-top:14px"><button class="btn" type="button" id="qz-check">Kiểm tra đáp án</button><button class="btn alt" type="button" id="qz-show">Xem đáp án</button><button class="btn alt" type="button" id="qz-reset">Làm lại</button></div>' +
      '<div class="out" id="qz-out" style="min-height:0" aria-live="polite"></div></section>';
  }

  app.outerHTML = side + '<div class="main">' + top + hero + '<div class="content">' + body + "</div>" +
    '<div class="footer">' + D.icon + " Ngữ pháp nền tảng: " + esc(D.short) + " · Dành cho người mới bắt đầu · 2026</div></div>";
  document.title = "Ngữ pháp: " + D.short;

  /* ---------- Tương tác ---------- */
  var doc = document.documentElement, bar = document.getElementById("pbar");
  addEventListener("scroll", function () { bar.style.width = (doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight) * 100) + "%"; }, { passive: true });
  var links = document.querySelectorAll(".nav-link,.topnav a");
  if ("IntersectionObserver" in window) document.querySelectorAll(".section[id]").forEach(function (s) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (!e.isIntersecting) return; links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id); }); });
    }, { rootMargin: "-20% 0px -70% 0px" }).observe(s);
  });

  /* Audio */
  var S = window.speechSynthesis, st = { acc: "en-GB", rate: 0.85 }, cur = null;
  function voice() {
    if (!S) return null;
    var v = S.getVoices().filter(function (x) { return x.lang.replace("_", "-").toLowerCase() === st.acc.toLowerCase(); });
    return v.find(function (x) { return /google|natural|premium|enhanced/i.test(x.name); }) || v[0] || null;
  }
  function speak(text, el) {
    if (cur) cur.classList.remove("playing");
    cur = null;
    if (!S) { if (el) el.title = "Trình duyệt này không hỗ trợ đọc audio"; return; }
    S.cancel();
    if (el) { cur = el; el.classList.add("playing"); }
    var u = new SpeechSynthesisUtterance(text.replace(/\s+/g, " ").replace(/\s*\/\s*/g, ". ").trim());
    u.lang = st.acc; u.rate = st.rate;
    var v = voice(); if (v) u.voice = v;
    u.onend = u.onerror = function () { if (el) el.classList.remove("playing"); };
    S.speak(u);
  }
  document.querySelectorAll(".say").forEach(function (e) { e.tabIndex = 0; e.setAttribute("role", "button"); });
  document.addEventListener("click", function (e) { var el = e.target.closest(".say"); if (el) speak(el.textContent, el); });
  document.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("say")) { e.preventDefault(); speak(e.target.textContent, e.target); }
  });
  document.querySelectorAll(".audio-bar button").forEach(function (b) {
    b.addEventListener("click", function () {
      b.parentElement.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      if (b.dataset.acc) st.acc = b.dataset.acc;
      if (b.dataset.rate) st.rate = +b.dataset.rate;
    });
  });

  /* Luyện nói: nghe câu hỏi, ghi âm nhận giọng, xem câu mẫu */
  var recog = null;
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".sp [data-act]");
    if (!b) return;
    var card = b.closest(".sp"), q = D.speak[+card.dataset.sp], heard = card.querySelector(".sp-heard");
    if (b.dataset.act === "ask") speak(q.q, card.querySelector(".sp-q"));
    else if (b.dataset.act === "ans") card.querySelector(".sp-ans").classList.toggle("on");
    else if (b.dataset.act === "rec") {
      if (recog) { recog.stop(); return; }
      try {
        recog = new SR();
        recog.lang = st.acc; recog.interimResults = true; recog.maxAlternatives = 1;
        b.classList.add("live"); b.textContent = "⏹ Dừng ghi";
        heard.classList.add("on"); heard.innerHTML = "<b>Đang nghe…</b> hãy nói câu trả lời của bạn.";
        var finalText = "";
        recog.onresult = function (ev) {
          var t = "";
          for (var i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript;
          finalText = t;
          heard.innerHTML = "<b>Máy nghe được:</b> " + esc(t);
        };
        recog.onerror = function (ev) {
          heard.innerHTML = "<b>Không ghi được:</b> " + (ev.error === "not-allowed" ? "trình duyệt chưa cho phép dùng micro. Hãy cho phép micro, hoặc mở trang qua http://localhost thay vì mở tệp trực tiếp." : esc(ev.error)) +
            " Bạn vẫn có thể nói to rồi tự so sánh với câu mẫu.";
        };
        recog.onend = function () {
          b.classList.remove("live"); b.textContent = "🎤 Trả lời bằng giọng nói"; recog = null;
          if (finalText) heard.innerHTML = "<b>Máy nghe được:</b> " + esc(finalText) + '<br><span style="color:var(--muted);font-size:12.5px">Nếu câu máy nghe khác ý bạn, hãy nói chậm và rõ hơn ở chỗ đó. Mở câu trả lời mẫu để so sánh ngữ pháp.</span>';
        };
        recog.start();
      } catch (err) {
        recog = null;
        heard.classList.add("on");
        heard.innerHTML = "<b>Không dùng được micro trên trình duyệt này.</b> Hãy nói to rồi tự so sánh với câu mẫu.";
      }
    }
  });

  /* Bài tập */
  var qz = document.getElementById("qz");
  if (qz) {
    var all = [];
    D.exercises.forEach(function (g) { g.items.forEach(function (it) { all.push(it); }); });
    var norm = function (s) { return s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[.!?,]+/g, " ").replace(/\s+/g, " ").trim(); };
    qz.addEventListener("click", function (e) {
      var o = e.target.closest(".qz-opt");
      if (!o) return;
      o.parentElement.querySelectorAll(".qz-opt").forEach(function (x) { x.classList.remove("sel", "ok", "no"); });
      o.classList.add("sel");
    });
    var out = document.getElementById("qz-out");
    var key = function (it) {
      return it.options ? it.options[it.a] : it.a[0];
    };
    document.getElementById("qz-check").addEventListener("click", function () {
      var ok = 0;
      qz.querySelectorAll(".qz").forEach(function (row, i) {
        var it = all[i], good;
        if (it.options) {
          var sel = row.querySelector(".qz-opt.sel");
          good = !!sel && +sel.dataset.k === it.a;
          row.querySelectorAll(".qz-opt").forEach(function (x) { x.classList.remove("ok", "no"); });
          if (sel) sel.classList.add(good ? "ok" : "no");
        } else {
          var inp = row.querySelector("input");
          good = it.a.some(function (a) { return norm(a) === norm(inp.value); });
          inp.classList.remove("ok", "no"); inp.classList.add(good ? "ok" : "no");
        }
        if (good) ok++;
      });
      out.style.minHeight = "";
      out.textContent = ok === all.length ? "🎉 Chính xác " + ok + "/" + all.length + ". Bạn nắm chắc ngữ pháp bài này rồi, giờ hãy dùng nó ở phần Luyện nói!" :
        "Đúng " + ok + "/" + all.length + ". Các câu viền đỏ cần xem lại; bấm “Xem đáp án” để đọc giải thích.";
    });
    document.getElementById("qz-show").addEventListener("click", function () {
      qz.querySelectorAll(".qz").forEach(function (row, i) {
        var it = all[i], k = row.querySelector(".qz-key");
        k.innerHTML = "Đáp án: <b>" + esc(key(it)) + "</b>" + (it.why ? " · " + fmt(it.why) : "");
        k.classList.add("on");
        if (it.options) row.querySelectorAll(".qz-opt").forEach(function (x) { if (+x.dataset.k === it.a) x.classList.add("ok"); });
      });
    });
    document.getElementById("qz-reset").addEventListener("click", function () {
      qz.querySelectorAll("input").forEach(function (x) { x.value = ""; x.classList.remove("ok", "no"); });
      qz.querySelectorAll(".qz-opt").forEach(function (x) { x.classList.remove("sel", "ok", "no"); });
      qz.querySelectorAll(".qz-key").forEach(function (x) { x.classList.remove("on"); });
      out.textContent = ""; out.style.minHeight = "0";
    });
  }
  if (location.hash) { var t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView({ behavior: "instant" }); }
})();