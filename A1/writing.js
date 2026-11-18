/* A1 luyện viết — cần writing-data.js nạp trước.
   - Trên trang bài học: tự chèn mục "Luyện viết đoạn văn" vào cuối .content, thêm link vào sidebar và topnav.
   - Trên Writing-Paragraphs.html: trang gọi A1W.html(T) để dựng từng chủ đề.
   Bài viết của người học lưu ở localStorage với khóa "a1-writing:<id>", dùng chung giữa hai nơi. */
(function () {
  var DATA = window.A1_WRITING || [];
  var BY = {};
  DATA.forEach(function (G) { G.t.forEach(function (T) { BY[T.id] = T; }); });

  var CSS = [
    ".wp-model{background:var(--s1);border:1px solid var(--border2);border-radius:12px;overflow:hidden;margin-top:6px}",
    ".wp-head{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:9px 14px;background:var(--s2);border-bottom:1px solid var(--border)}",
    ".wp-lbl{font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:10px;font-weight:600;color:var(--muted);letter-spacing:.5px;margin-right:auto}",
    ".wp-tg{background:var(--s3);color:var(--muted);border:1px solid var(--border2);border-radius:7px;padding:4px 10px;font:inherit;font-size:11.5px;font-weight:700;cursor:pointer}",
    ".wp-tg:hover{color:var(--text)}",
    ".wp-tg[aria-pressed=true]{background:var(--acc-dim);color:var(--acc);border-color:var(--acc)}",
    ".wp-para{padding:16px 20px;font-size:15.5px;line-height:1.95;color:var(--text);max-width:75ch;transition:background .2s}",
    ".wp-para.wp-playing{background:var(--ins-dim)}",
    ".wp-para .say{border-bottom:none}.wp-para .say::after{content:none}",
    ".wp-vn{display:none}",
    ".wp-showvn .wp-sn{display:block;padding:6px 0;border-bottom:1px solid var(--line,rgba(255,255,255,.05));line-height:1.6}",
    ".wp-showvn .wp-sn:last-child{border-bottom:none}",
    ".wp-showvn .wp-vn{display:block;color:var(--muted);font-size:13px}",
    ".wp-para mark{background:none;color:var(--acc);font-weight:700}",
    ".wp-hidek mark{color:transparent;background:var(--s3);border-radius:4px;cursor:help}",
    ".wp-hidek mark.wp-rv{color:var(--acc);background:none}",
    ".wp-gr{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 0}",
    ".wp-fm{display:inline-block;font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:12px;background:var(--code-bg);color:var(--teal);padding:3px 9px;border-radius:6px}",
    ".wp-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:14px;margin-top:14px}",
    ".wp-frame,.wp-write{background:var(--s1);border:1px solid var(--border);border-radius:12px;padding:14px 16px;min-width:0}",
    ".wp-write{display:flex;flex-direction:column;gap:10px}",
    ".wp-h4{font-size:12px;font-weight:800;letter-spacing:.5px;color:var(--acc);margin:0 0 8px}",
    ".wp-frame ol{padding-left:20px;margin:0;font-size:13.5px;color:var(--text)}",
    ".wp-frame li{padding:3px 0}",
    ".wp-frame li::marker{color:var(--faint);font-size:11px}",
    ".wp-write textarea{width:100%;min-height:170px;resize:vertical;background:var(--code-bg);border:1px solid var(--border2);border-radius:9px;padding:12px 14px;color:var(--text);font:inherit;font-size:14px;line-height:1.7;box-sizing:border-box}",
    ".wp-write textarea:focus-visible,.wp-tg:focus-visible,.wp-btn:focus-visible{outline:2px solid var(--acc);outline-offset:2px}",
    ".wp-need{list-style:none;display:flex;flex-wrap:wrap;gap:6px;margin:0;padding:0}",
    ".wp-need li{font-size:11.5px;font-weight:600;padding:3px 10px;border-radius:100px;border:1px solid var(--border2);color:var(--muted)}",
    ".wp-need li::before{content:'○ '}",
    ".wp-need li.wp-hit{border-color:var(--ins);color:var(--ins);background:var(--ins-dim)}",
    ".wp-need li.wp-hit::before{content:'✓ '}",
    ".wp-wbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:12px;color:var(--muted)}",
    ".wp-wc{font-family:var(--mono,ui-monospace,Menlo,monospace);font-variant-numeric:tabular-nums;margin-right:auto}",
    ".wp-wc.wp-ok{color:var(--ins)}",
    ".wp-btn{background:var(--acc-dim);color:var(--acc);border:1px solid var(--acc);border-radius:8px;padding:6px 12px;font:inherit;font-weight:700;font-size:12px;cursor:pointer}",
    ".wp-btn.wp-alt{background:var(--s3);color:var(--muted);border-color:var(--border2)}",
    ".wp-more{font-size:12.5px;color:var(--muted);margin-top:12px}",
    ".wp-more a{color:var(--oc);text-decoration:none;border-bottom:1px dotted var(--oc)}",
    ".wp-tag{color:var(--acc);background:var(--acc-dim)}",
    "@media(max-width:900px){.wp-two{grid-template-columns:1fr}.wp-para{padding:14px 16px;font-size:15px}}"
  ].join("");
  var st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<mark>$1</mark>").replace(/\*(.+?)\*/g, "<i>$1</i>"); }
  function plain(s) { return s.replace(/\*+/g, ""); }
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Khối luyện viết của một chủ đề (không gồm tiêu đề section) */
  function html(T) {
    return '<div class="wp-box" data-topic="' + T.id + '">' +
      '<div class="wp-model"><div class="wp-head"><span class="wp-lbl">ĐOẠN VĂN MẪU</span>' +
      '<button class="wp-tg" type="button" data-wp="play">🔊 Nghe cả đoạn</button>' +
      '<button class="wp-tg" type="button" data-wp="vn" aria-pressed="false">Bản dịch</button>' +
      '<button class="wp-tg" type="button" data-wp="hide" aria-pressed="false">Che từ khóa</button></div>' +
      '<div class="wp-para">' + T.s.map(function (p) {
        return '<span class="wp-sn"><span class="say" tabindex="0" role="button">' + fmt(p[0]) + '</span> <span class="wp-vn">' + esc(p[1]) + "</span></span>";
      }).join(" ") + "</div></div>" +
      '<div class="wp-gr">' + T.gr.map(function (g) { return '<span class="wp-fm">' + esc(g) + "</span>"; }).join("") + "</div>" +
      '<div class="wp-two"><div class="wp-frame"><div class="wp-h4">KHUNG VIẾT</div><ol>' +
      T.f.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>" +
      '<div class="wp-write"><div class="wp-h4">ĐẾN LƯỢT BẠN</div>' +
      '<textarea aria-label="Đoạn văn của bạn: ' + esc(T.vi) + '" placeholder="Viết 60–100 từ về chính bạn, theo khung bên cạnh…" spellcheck="true" lang="en"></textarea>' +
      '<ul class="wp-need" aria-label="Cấu trúc nên dùng">' + T.k.map(function (k, i) { return '<li data-k="' + i + '">' + esc(k[0]) + "</li>"; }).join("") + "</ul>" +
      '<div class="wp-wbar"><span class="wp-wc">0 từ</span><button class="wp-btn" type="button" data-wp="mine">🔊 Nghe bài của tôi</button><button class="wp-btn wp-alt" type="button" data-wp="clear">Xóa</button></div>' +
      "</div></div></div>";
  }

  function norm(s) { return s.toLowerCase().replace(/[’‘`]/g, "'"); }
  function check(box) {
    var T = BY[box.dataset.topic], ta = box.querySelector("textarea"), txt = ta.value, t = norm(txt), hit = 0;
    box.querySelectorAll(".wp-need li").forEach(function (li) {
      var ok = T.k[+li.dataset.k][1].test(t);
      li.classList.toggle("wp-hit", ok);
      if (ok) hit++;
    });
    var w = (txt.trim().match(/\S+/g) || []).length, wc = box.querySelector(".wp-wc");
    wc.textContent = w + " từ" + (w >= 60 ? " ✓" : " / mục tiêu 60");
    wc.classList.toggle("wp-ok", w >= 60);
    var done = w >= 60 && hit === T.k.length;
    document.querySelectorAll('[data-dn="' + T.id + '"]').forEach(function (d) { d.textContent = done ? "✓" : ""; });
  }
  /* Gắn lưu nháp + kiểm tra cho các khối trong root */
  function bind(root) {
    root.querySelectorAll(".wp-box").forEach(function (box) {
      if (box.dataset.bound) return;
      box.dataset.bound = "1";
      var ta = box.querySelector("textarea"), key = "a1-writing:" + box.dataset.topic, saved = store.get(key);
      if (saved) ta.value = saved;
      check(box);
      ta.addEventListener("input", function () { store.set(key, ta.value); check(box); });
    });
  }

  /* Đọc cả đoạn: theo giọng và tốc độ đang chọn ở thanh audio của trang */
  var S = window.speechSynthesis, cur = null;
  function opts() {
    var a = document.querySelector(".audio-bar [data-acc].on"), r = document.querySelector(".audio-bar [data-rate].on");
    return { acc: a ? a.dataset.acc : "en-GB", rate: r ? +r.dataset.rate : 0.85 };
  }
  function speak(text, el) {
    if (cur) cur.classList.remove("wp-playing");
    cur = null;
    if (!S || !text.trim()) return;
    S.cancel();
    var o = opts(), u = new SpeechSynthesisUtterance(text.replace(/\s+/g, " ").trim());
    u.lang = o.acc; u.rate = o.rate;
    var v = S.getVoices().filter(function (x) { return x.lang.replace("_", "-").toLowerCase() === o.acc.toLowerCase(); });
    v = v.find(function (x) { return /google|natural|premium|enhanced/i.test(x.name); }) || v[0];
    if (v) u.voice = v;
    if (el) { cur = el; el.classList.add("wp-playing"); }
    u.onend = u.onerror = function () { if (el) el.classList.remove("wp-playing"); };
    S.speak(u);
  }

  /* Chữ đang bị che: bấm để hiện, không phát âm (chặn trước handler .say của trang) */
  document.addEventListener("click", function (e) {
    var m = e.target.closest && e.target.closest(".wp-hidek mark");
    if (m && !m.classList.contains("wp-rv")) { m.classList.add("wp-rv"); e.stopPropagation(); e.preventDefault(); }
  }, true);

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-wp]");
    if (!b) return;
    var box = b.closest(".wp-box"), T = BY[box.dataset.topic], act = b.dataset.wp, para = box.querySelector(".wp-para");
    if (act === "play") speak(T.s.map(function (p) { return plain(p[0]); }).join(" "), para);
    else if (act === "vn" || act === "hide") {
      var on = b.getAttribute("aria-pressed") !== "true";
      b.setAttribute("aria-pressed", on ? "true" : "false");
      para.classList.toggle(act === "vn" ? "wp-showvn" : "wp-hidek", on);
      if (act === "hide") para.querySelectorAll("mark.wp-rv").forEach(function (x) { x.classList.remove("wp-rv"); });
    } else if (act === "mine") speak(box.querySelector("textarea").value, null);
    else if (act === "clear") {
      var ta = box.querySelector("textarea");
      if (ta.value && confirm("Xóa đoạn văn bạn đã viết cho chủ đề này?")) {
        ta.value = "";
        store.set("a1-writing:" + T.id, "");
        check(box);
      }
    }
  });

  window.A1W = { html: html, bind: bind, byId: BY, esc: esc };

  /* Trang bài học: chèn mục luyện viết của đúng chủ đề */
  function inject() {
    var here = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase();
    var T = null;
    DATA.forEach(function (G) { G.t.forEach(function (x) {
      x.l.forEach(function (l) { if (l[0].toLowerCase() === here) T = T || x; });
    }); });
    var content = document.querySelector(".content");
    if (!T || !content || document.getElementById("luyen-viet")) return;

    var secs = content.querySelectorAll(".section");
    var others = T.l.filter(function (l) { return l[0].toLowerCase() !== here; })
      .map(function (l) { return '<a href="' + encodeURI(l[0]) + '">' + esc(l[1]) + "</a>"; });
    var sec = document.createElement("section");
    sec.className = "section";
    sec.id = "luyen-viet";
    sec.innerHTML =
      '<div class="sec-head"><span class="sec-tag wp-tag">LUYỆN VIẾT</span><div>' +
      '<div class="sec-title">Viết đoạn văn: ' + T.e + " " + esc(T.en) + "</div>" +
      '<div class="sec-sub">' + esc(T.vi) + " · Gom từ vựng và ngữ pháp của cả bài vào một đoạn văn, rồi tự viết về bạn</div></div></div>" +
      html(T) +
      '<p class="wp-more">Bài viết được lưu trên trình duyệt này' +
      (others.length ? " và dùng chung với bài " + others.join(", ") : "") +
      '. Xem thêm <a href="Writing-Paragraphs.html#' + T.id + '">' + (Object.keys(BY).length - 1) + ' chủ đề luyện viết khác</a>.</p>';
    if (secs.length) secs[secs.length - 1].after(sec); else content.appendChild(sec);
    bind(sec);

    var side = document.querySelector(".sidebar");
    if (side) {
      side.insertAdjacentHTML("beforeend",
        '<div class="nav-label">LUYỆN VIẾT</div><a class="nav-link" href="#luyen-viet">✍️ Viết đoạn văn <span data-dn="' + T.id + '" style="margin-left:auto;color:var(--ins);font-size:10px"></span></a>');
      check(sec.querySelector(".wp-box"));
    }
    var topnav = document.querySelector(".topnav");
    if (topnav) topnav.insertAdjacentHTML("beforeend", '<a href="#luyen-viet">✍️ Viết</a>');

    /* Đánh dấu link đang xem cho mục mới (script của trang chỉ biết các mục có sẵn) */
    var mine = document.querySelectorAll('a[href="#luyen-viet"]');
    var all = document.querySelectorAll(".nav-link,.topnav a");
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
    if (location.hash === "#luyen-viet") sec.scrollIntoView({ behavior: "instant" });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
