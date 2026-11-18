/* A1 ôn tập toàn bài — thêm <script src="review.js" defer></script> sau nav.js (và sau writing.js nếu có).
   Tự gom mọi cặp Anh–Việt có trên trang (mẫu câu, từ vựng, hội thoại, bảng có cột "Nghĩa", đoạn văn luyện viết)
   và các cặp câu sai/đúng, rồi cho ôn bằng thẻ ghi nhớ, trắc nghiệm, nghe – gõ, dịch, chọn câu đúng.
   Lặp lại ngắt quãng kiểu Leitner: trả lời đúng thì câu lùi lịch 1 → 2 → 4 → 8 → 16… ngày, sai thì ôn lại ngay.
   Tiến độ lưu ở localStorage: "a1-review:<tên trang>" và "a1-review-days" (chuỗi ngày học). */
(function () {
  var content = document.querySelector(".content");
  if (!content || document.getElementById("on-tap")) return;

  var PAGE = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase();
  var KEY = "a1-review:" + PAGE, DAYS_KEY = "a1-review-days";
  var DAY = 864e5, IV = [0, 1, 2, 4, 8, 16, 32, 64], MASTER = 4;
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var db = store.get(KEY) || {};

  /* ---------- Gom nội dung của trang ---------- */
  function txt(el) { return el ? el.textContent.replace(/\s+/g, " ").trim() : ""; }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function norm(s) {
    return s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/[-–—]/g, " ")
      .replace(/[^a-z0-9à-ỹđ' ]/gi, " ").replace(/\s+/g, " ").trim();
  }
  var items = [], seen = {}, sections = [];
  function navName(id, fallback) {
    var a = document.querySelector('.sidebar a[href="#' + id + '"]');
    return a ? txt(a).replace(/\s*✓$/, "") : fallback;
  }
  function add(enEl, vnEl, sec) {
    var en = txt(enEl), vn = txt(vnEl);
    if (!en || !vn || en.length > 170 || !/[a-z]/i.test(en)) return;
    var k = norm(en);
    if (!k || seen[k]) return;
    seen[k] = 1;
    items.push({ id: hash(k), kind: "pair", en: en, vn: vn, sec: sec.id });
  }
  content.querySelectorAll(".section[id]").forEach(function (sec) {
    var before = items.length;
    sec.querySelectorAll(".ex-row").forEach(function (r) { add(r.querySelector(".ex-en"), r.querySelector(".ex-vn"), sec); });
    sec.querySelectorAll(".turn").forEach(function (t) { add(t.querySelector(".say"), t.querySelector("small"), sec); });
    sec.querySelectorAll(".card").forEach(function (c) { add(c.querySelector(".card-title.say,.card-title .say"), c.querySelector(".card-desc"), sec); });
    sec.querySelectorAll(".tl").forEach(function (t) { add(t.querySelector(".say"), t.querySelector("small"), sec); });
    sec.querySelectorAll(".wp-sn").forEach(function (t) { add(t.querySelector(".say"), t.querySelector(".wp-vn"), sec); });
    sec.querySelectorAll("table").forEach(function (tb) {
      var ths = Array.prototype.map.call(tb.querySelectorAll("thead th"), txt);
      var vi = ths.findIndex(function (h) { return /nghĩa|dịch|tiếng việt/i.test(h); });
      if (vi < 0) return;
      tb.querySelectorAll("tbody tr").forEach(function (tr) {
        var tds = tr.children, en = null;
        for (var i = 0; i < tds.length && i < vi; i++) {
          if (tds[i].classList.contains("say")) { en = tds[i]; break; }
          var s = tds[i].querySelectorAll(".say");
          if (s.length === 1) { en = s[0]; break; }
        }
        if (en && tds[vi]) add(en, tds[vi], sec);
      });
    });
    sec.querySelectorAll(".cmp").forEach(function (c) {
      var bad = txt(c.querySelector(".bad div")), good = txt(c.querySelector(".good div"));
      if (!bad || !good || bad === good || /→/.test(bad + good)) return;
      var k = "cmp " + norm(good);
      if (seen[k]) return;
      seen[k] = 1;
      items.push({ id: hash(k), kind: "cmp", en: good, bad: bad, sec: sec.id });
    });
    if (items.length > before) {
      var t = txt(sec.querySelector(".sec-title"));
      sections.push({ id: sec.id, name: navName(sec.id, t || sec.id) });
    }
  });
  var pairs = items.filter(function (x) { return x.kind === "pair"; });
  if (pairs.length < 4) return;

  function typable(it) {
    return it.kind === "pair" && !/[…\/→(_]|\.\.\./.test(it.en) && !/→/.test(it.vn) && it.en.split(/\s+/).length <= 14;
  }

  /* ---------- Giao diện ---------- */
  var CSS = [
    ".rv-tag{color:var(--ins);background:var(--ins-dim)}",
    ".rv-stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:6px 0 14px}",
    ".rv-tile{background:var(--s1);border:1px solid var(--border);border-radius:11px;padding:12px 14px;min-width:0}",
    ".rv-tile b{display:block;font-size:24px;font-weight:800;line-height:1.2;font-variant-numeric:tabular-nums;color:var(--c,var(--text))}",
    ".rv-tile span{font-size:11.5px;color:var(--muted)}",
    ".rv-secs{display:grid;gap:6px;margin:0 0 16px;background:var(--s1);border:1px solid var(--border);border-radius:11px;padding:12px 16px}",
    ".rv-sec{display:grid;grid-template-columns:minmax(0,220px) 1fr 52px;gap:12px;align-items:center;font-size:12.5px;color:var(--muted)}",
    ".rv-sec>span:first-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".rv-sec>span:last-child{text-align:right;font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:11px;font-variant-numeric:tabular-nums}",
    ".rv-track{height:7px;background:var(--s3);border-radius:4px;overflow:hidden;display:flex}",
    ".rv-track i{display:block;height:100%}",
    ".rv-ctrl{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end;margin-bottom:14px}",
    ".rv-ctrl label{font-size:11.5px;color:var(--muted);font-weight:600;display:grid;gap:4px;min-width:0;flex:1 1 160px}",
    ".rv-ctrl select{background:var(--code-bg);border:1px solid var(--border2);border-radius:8px;padding:9px 12px;color:var(--text);font:inherit;font-size:13px;width:100%}",
    ".rv-btn{background:var(--acc-dim);color:var(--acc);border:1px solid var(--acc);border-radius:8px;padding:9px 16px;font:inherit;font-weight:700;font-size:13px;cursor:pointer}",
    ".rv-btn.rv-alt{background:var(--s3);color:var(--muted);border-color:var(--border2)}",
    ".rv-btn.rv-go{background:var(--ins-dim);color:var(--ins);border-color:var(--ins)}",
    ".rv-btn:disabled{opacity:.4;cursor:default}",
    ".rv-stage{background:var(--s1);border:1px solid var(--border2);border-radius:14px;padding:20px 22px;min-height:240px;outline:none}",
    ".rv-top{display:flex;align-items:center;gap:10px;font-size:11.5px;color:var(--muted);margin-bottom:14px}",
    ".rv-top .rv-bar{flex:1;height:5px;background:var(--s3);border-radius:3px;overflow:hidden}",
    ".rv-top .rv-bar i{display:block;height:100%;background:var(--ins);transition:width .3s}",
    ".rv-kind{font-size:10.5px;font-weight:800;letter-spacing:.6px;color:var(--acc);text-transform:uppercase}",
    ".rv-q{font-size:20px;font-weight:700;line-height:1.5;margin:6px 0 4px;color:var(--text);text-wrap:balance}",
    ".rv-sub{font-size:13px;color:var(--muted)}",
    ".rv-ico{background:var(--s3);border:1px solid var(--border2);color:var(--text);border-radius:8px;padding:5px 10px;font:inherit;font-size:12px;font-weight:700;cursor:pointer;margin:6px 6px 0 0}",
    ".rv-opts{display:grid;gap:8px;margin-top:16px}",
    ".rv-opt{display:flex;gap:10px;align-items:baseline;text-align:left;background:var(--s2);border:1px solid var(--border2);border-radius:10px;padding:10px 14px;color:var(--text);font:inherit;font-size:14px;cursor:pointer}",
    ".rv-opt:hover:not(:disabled){border-color:var(--acc)}",
    ".rv-opt kbd{font-family:var(--mono,ui-monospace,Menlo,monospace);font-size:10.5px;color:var(--muted);border:1px solid var(--border2);border-radius:4px;padding:0 5px;flex-shrink:0}",
    ".rv-opt.rv-ok{border-color:var(--ins);background:var(--ins-dim);color:var(--ins)}",
    ".rv-opt.rv-no{border-color:var(--au,#ff6584);background:rgba(255,101,132,.12);color:var(--au,#ff6584)}",
    ".rv-opt:disabled{cursor:default}",
    ".rv-in{width:100%;margin-top:16px;background:var(--code-bg);border:1px solid var(--border2);border-radius:9px;padding:11px 14px;color:var(--text);font:inherit;font-size:15px}",
    ".rv-in:focus-visible,.rv-btn:focus-visible,.rv-opt:focus-visible,.rv-ico:focus-visible,.rv-ctrl select:focus-visible{outline:2px solid var(--acc);outline-offset:2px}",
    ".rv-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;align-items:center}",
    ".rv-fb{margin-top:14px;padding:12px 14px;border-radius:10px;font-size:13.5px;line-height:1.7}",
    ".rv-fb.rv-good{background:var(--ins-dim);color:var(--ins)}",
    ".rv-fb.rv-bad{background:rgba(255,101,132,.10);color:var(--au,#ff6584)}",
    ".rv-fb .rv-en{color:var(--text);font-weight:600;display:block}",
    ".rv-fb .rv-vn{color:var(--muted);display:block}",
    ".rv-fb mark{background:rgba(255,101,132,.22);color:var(--text);border-radius:3px;padding:0 2px}",
    ".rv-back{margin-top:14px;padding-top:14px;border-top:1px dashed var(--border2)}",
    ".rv-hint{font-size:11.5px;color:var(--faint);margin-top:12px}",
    ".rv-end h3{font-size:20px;margin-bottom:4px}",
    ".rv-miss{list-style:none;margin:12px 0 0;padding:0;display:grid;gap:6px}",
    ".rv-miss li{font-size:13px;color:var(--muted);border-bottom:1px solid var(--line,rgba(255,255,255,.05));padding:6px 0}",
    ".rv-miss li b{color:var(--text);display:block}",
    ".rv-tip{font-size:12.5px;color:var(--muted);margin-top:12px}",
    "@media(max-width:900px){.rv-stats{grid-template-columns:repeat(3,1fr)}.rv-sec{grid-template-columns:minmax(0,1fr) 80px 44px}.rv-stage{padding:16px}.rv-q{font-size:18px}}",
    "@media(max-width:480px){.rv-stats{grid-template-columns:repeat(2,1fr)}}"
  ].join("");
  var st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  var sec = document.createElement("section");
  sec.className = "section";
  sec.id = "on-tap";
  var cmpCount = items.length - pairs.length;
  sec.innerHTML =
    '<div class="sec-head"><span class="sec-tag rv-tag">ÔN TẬP</span><div>' +
    '<div class="sec-title">🧠 Ôn tập toàn bài</div>' +
    '<div class="sec-sub">Gom ' + pairs.length + " từ và câu" + (cmpCount ? " cùng " + cmpCount + " cặp câu sai / đúng" : "") +
    " của cả bài. Ôn ngắt quãng: câu nhớ rồi sẽ hẹn lại sau vài ngày, câu quên sẽ gặp lại ngay.</div></div></div>" +
    '<div class="rv-stats" id="rv-stats"></div>' +
    '<div class="rv-secs" id="rv-secs" aria-label="Tiến độ từng phần"></div>' +
    '<div class="rv-ctrl">' +
    '<label>Phạm vi<select id="rv-scope"><option value="">Cả bài</option>' +
    sections.map(function (s) { return '<option value="' + s.id + '">' + esc(s.name) + "</option>"; }).join("") + "</select></label>" +
    '<label>Cách ôn<select id="rv-mode">' +
    '<option value="mix">🔀 Trộn theo mức nhớ (khuyên dùng)</option>' +
    '<option value="flash">🃏 Thẻ ghi nhớ</option>' +
    '<option value="mc">✅ Trắc nghiệm nghĩa</option>' +
    '<option value="dict">🎧 Nghe và gõ lại</option>' +
    '<option value="trans">✍️ Dịch Việt → Anh</option>' +
    (cmpCount ? '<option value="cmp">⚖️ Chọn câu đúng</option>' : "") +
    "</select></label>" +
    '<label style="flex:0 1 110px">Số câu<select id="rv-n"><option>10</option><option selected>15</option><option>20</option><option>30</option></select></label>' +
    '<button class="rv-btn rv-go" type="button" id="rv-start">▶ Bắt đầu ôn</button></div>' +
    '<div class="rv-stage" id="rv-stage" tabindex="-1" aria-live="polite"></div>' +
    '<p class="rv-tip">💡 Ôn mỗi ngày 5–10 phút. Câu trả lời đúng sẽ được hẹn lại sau 1, 2, 4, 8, 16 ngày. Đúng liên tiếp 4 lần là <b>đã thuộc</b>. Phím tắt: <kbd>1</kbd>–<kbd>4</kbd> để chọn, <kbd>Space</kbd> để lật thẻ, <kbd>Enter</kbd> để sang câu tiếp.</p>';
  content.appendChild(sec);
  var stage = sec.querySelector("#rv-stage");

  var side = document.querySelector(".sidebar");
  if (side) side.insertAdjacentHTML("beforeend", '<div class="nav-label">ÔN TẬP</div><a class="nav-link" href="#on-tap">🧠 Ôn tập toàn bài <span id="rv-due-badge" style="margin-left:auto;font-size:10px;color:var(--ins)"></span></a>');
  var topnav = document.querySelector(".topnav");
  if (topnav) topnav.insertAdjacentHTML("beforeend", '<a href="#on-tap">🧠 Ôn tập</a>');

  /* ---------- Audio (theo thanh audio của trang) ---------- */
  var S = window.speechSynthesis;
  function speak(text) {
    if (!S) return;
    var a = document.querySelector(".audio-bar [data-acc].on"), r = document.querySelector(".audio-bar [data-rate].on");
    var acc = a ? a.dataset.acc : "en-GB", rate = r ? +r.dataset.rate : 0.85;
    S.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/…|\.\.\./g, " ").replace(/\s*\/\s*/g, ". ").replace(/→/g, ". "));
    u.lang = acc; u.rate = rate;
    var v = S.getVoices().filter(function (x) { return x.lang.replace("_", "-").toLowerCase() === acc.toLowerCase(); });
    v = v.find(function (x) { return /google|natural|premium|enhanced/i.test(x.name); }) || v[0];
    if (v) u.voice = v;
    S.speak(u);
  }

  /* ---------- Thống kê ---------- */
  function now() { return Date.now(); }
  function status(it) {
    var r = db[it.id];
    if (!r) return "new";
    return r.b >= MASTER ? "done" : "learn";
  }
  function isDue(it) { var r = db[it.id]; return !!r && r.d <= now(); }
  function today() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function streak() {
    var days = store.get(DAYS_KEY) || [], set = {}, n = 0, d = new Date();
    days.forEach(function (x) { set[x] = 1; });
    var key = function (x) { return x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate(); };
    if (!set[key(d)]) d.setDate(d.getDate() - 1);
    while (set[key(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function renderStats() {
    var c = { "new": 0, learn: 0, done: 0 }, due = 0;
    items.forEach(function (it) { c[status(it)]++; if (isDue(it)) due++; });
    var pct = Math.round(c.done / items.length * 100);
    sec.querySelector("#rv-stats").innerHTML =
      '<div class="rv-tile"><b>' + c["new"] + "</b><span>Chưa học</span></div>" +
      '<div class="rv-tile" style="--c:var(--acc)"><b>' + c.learn + "</b><span>Đang nhớ</span></div>" +
      '<div class="rv-tile" style="--c:var(--ins)"><b>' + c.done + "</b><span>Đã thuộc · " + pct + "%</span></div>" +
      '<div class="rv-tile" style="--c:var(--au,#ff6584)"><b>' + due + "</b><span>Đến hạn ôn</span></div>" +
      '<div class="rv-tile" style="--c:var(--teal)"><b>🔥 ' + streak() + "</b><span>Ngày ôn liên tiếp</span></div>";
    sec.querySelector("#rv-secs").innerHTML = sections.map(function (s) {
      var list = items.filter(function (it) { return it.sec === s.id; }), d = 0, l = 0;
      list.forEach(function (it) { var x = status(it); if (x === "done") d++; else if (x === "learn") l++; });
      return '<div class="rv-sec"><span>' + esc(s.name) + '</span><span class="rv-track" title="Xanh: đã thuộc, tím: đang nhớ">' +
        '<i style="width:' + (d / list.length * 100) + '%;background:var(--ins)"></i><i style="width:' + (l / list.length * 100) + '%;background:var(--acc)"></i></span>' +
        "<span>" + d + "/" + list.length + "</span></div>";
    }).join("");
    var b = document.getElementById("rv-due-badge");
    if (b) b.textContent = due ? due + " cần ôn" : "";
  }

  /* ---------- Lịch ôn (Leitner) ---------- */
  function grade(it, ok, soft) {
    var r = db[it.id] || { b: 0, w: 0 };
    if (!ok) { r.b = 0; r.w = (r.w || 0) + 1; }
    else if (soft) r.b = Math.max(1, r.b);
    else r.b = Math.min(r.b + 1, IV.length - 1);
    r.d = now() + IV[r.b] * DAY - 36e5; /* trừ 1 giờ để ôn cùng giờ hôm sau vẫn kịp đến hạn */
    if (r.b === 0) r.d = now();
    db[it.id] = r;
    store.set(KEY, db);
  }

  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  function buildQueue(scope, mode, n) {
    var c = items.filter(function (it) {
      if (scope && it.sec !== scope) return false;
      if (mode === "cmp") return it.kind === "cmp";
      if (mode === "dict" || mode === "trans") return typable(it);
      if (mode === "flash" || mode === "mc") return it.kind === "pair";
      return true;
    });
    var due = c.filter(isDue).sort(function (a, b) { return db[a.id].b - db[b.id].b || db[a.id].d - db[b.id].d; });
    var fresh = c.filter(function (it) { return !db[it.id]; });
    var later = c.filter(function (it) { return db[it.id] && !isDue(it); }).sort(function (a, b) { return db[a.id].d - db[b.id].d; });
    return shuffle(due.concat(fresh, later).slice(0, n));
  }

  /* Dạng câu hỏi: câu mới → thẻ; vừa quên → trắc nghiệm; nhớ dần → nghe hiểu; nhớ chắc → tự gõ */
  function modeFor(it, mode) {
    if (it.kind === "cmp") return "cmp";
    if (mode === "mc") return pick(["vn2en", "en2vn"]);
    if (mode !== "mix") return mode;
    var r = db[it.id];
    if (!r) return "flash";
    if (r.b === 0) return "vn2en";
    if (r.b < 3) return pick(["vn2en", "en2vn"]);
    return typable(it) ? pick(["trans", "dict"]) : "en2vn";
  }

  function distract(it, field) {
    var pool = pairs.filter(function (x) { return x !== it && norm(x[field]) !== norm(it[field]); });
    pool.sort(function (a, b) {
      return Math.abs(a[field].length - it[field].length) - Math.abs(b[field].length - it[field].length) + (a.sec === it.sec ? -8 : 0) - (b.sec === it.sec ? -8 : 0);
    });
    var out = [], used = {};
    used[norm(it[field])] = 1;
    shuffle(pool.slice(0, 12)).forEach(function (x) { var k = norm(x[field]); if (out.length < 3 && !used[k]) { used[k] = 1; out.push(x[field]); } });
    return out;
  }

  /* ---------- So sánh câu gõ ---------- */
  function expand(s) {
    return " " + norm(s) + " ";
  }
  function words(s) {
    return expand(s).replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not")
      .replace(/n't\b/g, " not").replace(/'re\b/g, " are").replace(/'m\b/g, " am").replace(/'ll\b/g, " will")
      .replace(/'ve\b/g, " have").replace(/'d\b/g, " would").replace(/'s\b/g, " is").replace(/\bim\b/g, "i am")
      .trim().split(/\s+/).filter(Boolean);
  }
  function lcs(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d.push(new Array(n + 1).fill(0)); }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) d[i][j] = a[i] === b[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
    var hit = {}; i = 0; j = 0;
    while (i < m && j < n) { if (a[i] === b[j]) { hit[i] = 1; i++; j++; } else if (d[i + 1][j] >= d[i][j + 1]) i++; else j++; }
    return { n: d[0][0], hit: hit };
  }
  function score(expect, got) {
    var a = words(expect), b = words(got);
    if (!b.length) return 0;
    return lcs(a, b).n / Math.max(a.length, b.length);
  }
  /* Câu đúng, tô những từ người học bỏ sót / gõ sai (so theo dạng đầy đủ: it’s = it is) */
  function diffHTML(expect, got) {
    var raw = expect.split(/\s+/), flat = [], owner = [];
    raw.forEach(function (w, i) { words(w).forEach(function (t) { flat.push(t); owner.push(i); }); });
    var res = lcs(flat, words(got)), bad = {};
    flat.forEach(function (t, j) { if (!res.hit[j]) bad[owner[j]] = 1; });
    return raw.map(function (w, i) { return bad[i] ? "<mark>" + esc(w) + "</mark>" : esc(w); }).join(" ");
  }

  /* ---------- Phiên ôn ---------- */
  var S0 = null; /* trạng thái phiên */

  function start(queue, mode) {
    if (!queue.length) {
      stage.innerHTML = '<p class="rv-sub">Không có câu nào phù hợp với lựa chọn này. Hãy đổi phạm vi hoặc cách ôn.</p>';
      return;
    }
    S0 = { q: queue, i: 0, right: 0, total: queue.length, miss: [], mode: mode, answered: false, onKey: null };
    show();
    stage.scrollIntoView({ block: "nearest" });
  }

  function head(label) {
    var p = Math.round(S0.i / S0.q.length * 100);
    return '<div class="rv-top"><span class="rv-kind">' + label + '</span><span class="rv-bar"><i style="width:' + p + '%"></i></span><span>' + (S0.i + 1) + "/" + S0.q.length + "</span></div>";
  }
  function nextRow(extra) {
    return '<div class="rv-row">' + (extra || "") + '<button class="rv-btn" type="button" data-rv="next">Tiếp →</button></div>';
  }
  function answerBox(it, ok, note) {
    return '<div class="rv-fb ' + (ok ? "rv-good" : "rv-bad") + '">' + (note || (ok ? "✔ Chính xác!" : "✘ Chưa đúng.")) +
      '<span class="rv-en">' + esc(it.en) + '</span>' + (it.vn ? '<span class="rv-vn">' + esc(it.vn) + "</span>" : "") + "</div>";
  }
  function done(it, ok, soft) {
    if (S0.answered) return;
    S0.answered = true;
    grade(it, ok, soft);
    if (ok) S0.right++;
    else {
      if (S0.miss.indexOf(it) < 0) S0.miss.push(it);
      /* Sai thì gặp lại câu này cuối phiên một lần nữa */
      if (!it._again) { it._again = 1; S0.q.push(it); }
    }
    renderStats();
  }

  function show() {
    if (S0.i >= S0.q.length) return finish();
    var it = S0.q[S0.i], m = modeFor(it, S0.mode);
    S0.answered = false;
    S0.onKey = null;
    if (m === "flash") flash(it);
    else if (m === "vn2en" || m === "en2vn") mc(it, m);
    else if (m === "dict" || m === "trans") typing(it, m);
    else if (m === "cmp") cmp(it);
    try { stage.focus({ preventScroll: true }); } catch (e) {}
    var inp = stage.querySelector(".rv-in");
    if (inp) try { inp.focus({ preventScroll: true }); } catch (e) {}
  }
  function next() { S0.i++; show(); }

  function flash(it) {
    var en1 = Math.random() < 0.6, front = en1 ? it.en : it.vn, back = en1 ? it.vn : it.en;
    stage.innerHTML = head("🃏 Thẻ ghi nhớ") +
      '<div class="rv-sub">' + (en1 ? "Câu này nghĩa là gì?" : "Nói câu này bằng tiếng Anh") + "</div>" +
      '<div class="rv-q">' + esc(front) + "</div>" +
      (en1 ? '<button class="rv-ico" type="button" data-rv="say">🔊 Nghe</button>' : "") +
      '<div class="rv-row"><button class="rv-btn" type="button" data-rv="flip">Lật thẻ (Space)</button></div>' +
      '<div class="rv-back" hidden><div class="rv-q" style="font-size:17px">' + esc(back) + "</div>" +
      (en1 ? "" : '<button class="rv-ico" type="button" data-rv="say">🔊 Nghe</button>') +
      '<div class="rv-sub" style="margin-top:12px">Bạn nhớ được đến đâu?</div>' +
      '<div class="rv-row"><button class="rv-btn rv-alt" type="button" data-rate="0">1 · 😵 Quên</button>' +
      '<button class="rv-btn" type="button" data-rate="1">2 · 🤔 Nhớ mờ</button>' +
      '<button class="rv-btn rv-go" type="button" data-rate="2">3 · 😎 Nhớ rõ</button></div></div>';
    if (en1) speak(it.en);
    function flip() {
      var b = stage.querySelector(".rv-back");
      if (!b.hidden) return;
      b.hidden = false;
      stage.querySelector('[data-rv="flip"]').parentElement.remove();
      if (!en1) speak(it.en);
    }
    function rate(v) {
      if (stage.querySelector(".rv-back").hidden) return;
      done(it, v > 0, v === 1);
      next();
    }
    S0.onKey = function (k) {
      if (k === " ") { flip(); return true; }
      if (k === "1" || k === "2" || k === "3") { rate(+k - 1); return true; }
    };
    S0.flip = flip; S0.rate = rate;
  }

  function mc(it, m) {
    var en2vn = m === "en2vn", right = en2vn ? it.vn : it.en;
    var opts = shuffle(distract(it, en2vn ? "vn" : "en").concat([right]));
    stage.innerHTML = head(en2vn ? "🎧 Nghe và chọn nghĩa" : "✅ Chọn câu tiếng Anh") +
      '<div class="rv-sub">' + (en2vn ? "Nghe câu tiếng Anh rồi chọn nghĩa đúng." : "Câu nào có nghĩa là:") + "</div>" +
      (en2vn ? '<div class="rv-q rv-hidden-en" hidden>' + esc(it.en) + '</div><button class="rv-ico" type="button" data-rv="say">🔊 Nghe lại</button><button class="rv-ico" type="button" data-rv="reveal">👁 Hiện chữ</button>'
        : '<div class="rv-q">' + esc(it.vn) + "</div>") +
      '<div class="rv-opts">' + opts.map(function (o, i) {
        return '<button class="rv-opt" type="button" data-opt="' + i + '"><kbd>' + (i + 1) + "</kbd><span>" + esc(o) + "</span></button>";
      }).join("") + "</div><div class=\"rv-after\"></div>";
    if (en2vn) speak(it.en);
    function choose(i) {
      if (S0.answered || i >= opts.length) return;
      var ok = opts[i] === right;
      stage.querySelectorAll(".rv-opt").forEach(function (b, j) {
        b.disabled = true;
        if (opts[j] === right) b.classList.add("rv-ok");
        else if (j === i) b.classList.add("rv-no");
      });
      done(it, ok);
      var h = stage.querySelector(".rv-hidden-en");
      if (h) h.hidden = false;
      stage.querySelector(".rv-after").innerHTML = answerBox(it, ok) + nextRow('<button class="rv-ico" type="button" data-rv="say">🔊 Nghe</button>');
      if (!en2vn) speak(it.en);
      stage.querySelector('[data-rv="next"]').focus({ preventScroll: true });
    }
    S0.onKey = function (k) { if (/^[1-4]$/.test(k)) { choose(+k - 1); return true; } };
    S0.choose = choose;
  }

  function typing(it, m) {
    var dict = m === "dict";
    stage.innerHTML = head(dict ? "🎧 Nghe và gõ lại" : "✍️ Dịch sang tiếng Anh") +
      '<div class="rv-sub">' + (dict ? "Nghe rồi gõ lại đúng câu tiếng Anh." : "Viết câu này bằng tiếng Anh:") + "</div>" +
      (dict ? '<button class="rv-ico" type="button" data-rv="say">🔊 Nghe lại</button><button class="rv-ico" type="button" data-rv="slow">🐢 Nghe chậm</button>'
        : '<div class="rv-q">' + esc(it.vn) + "</div>") +
      '<input class="rv-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" lang="en" aria-label="Câu trả lời của bạn" placeholder="Gõ câu tiếng Anh rồi nhấn Enter">' +
      '<div class="rv-row"><button class="rv-btn rv-go" type="button" data-rv="check">Kiểm tra</button><button class="rv-btn rv-alt" type="button" data-rv="giveup">Không biết</button></div>' +
      '<div class="rv-after"></div><div class="rv-hint">Không phân biệt chữ hoa, dấu câu; I’m = I am.</div>';
    if (dict) speak(it.en);
    function check(giveup) {
      if (S0.answered) return;
      var inp = stage.querySelector(".rv-in"), got = inp.value;
      if (!giveup && !got.trim()) { inp.focus(); return; }
      var sc = giveup ? 0 : score(it.en, got), ok = sc >= 0.85;
      var note = sc === 1 ? "✔ Chính xác!" : ok ? "✔ Gần đúng! Xem lại phần tô màu:" : giveup ? "Đáp án:" : "✘ Chưa đúng. Phần tô màu là chỗ bạn thiếu hoặc sai:";
      done(it, ok);
      inp.disabled = true;
      stage.querySelector('[data-rv="check"]').parentElement.remove();
      var fb = '<div class="rv-fb ' + (ok ? "rv-good" : "rv-bad") + '">' + note +
        '<span class="rv-en">' + (sc === 1 ? esc(it.en) : diffHTML(it.en, got)) + '</span><span class="rv-vn">' + esc(it.vn) + "</span></div>";
      stage.querySelector(".rv-after").innerHTML = fb + nextRow('<button class="rv-ico" type="button" data-rv="say">🔊 Nghe</button>');
      speak(it.en);
      stage.querySelector('[data-rv="next"]').focus({ preventScroll: true });
    }
    stage.querySelector(".rv-in").addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); check(false); }
    });
    S0.check = check;
  }

  function cmp(it) {
    var opts = shuffle([it.en, it.bad]);
    stage.innerHTML = head("⚖️ Chọn câu đúng") +
      '<div class="rv-sub">Câu nào đúng ngữ pháp và tự nhiên hơn?</div>' +
      '<div class="rv-opts">' + opts.map(function (o, i) {
        return '<button class="rv-opt" type="button" data-opt="' + i + '"><kbd>' + (i + 1) + "</kbd><span>" + esc(o) + "</span></button>";
      }).join("") + '</div><div class="rv-after"></div>';
    function choose(i) {
      if (S0.answered || i > 1) return;
      var ok = opts[i] === it.en;
      stage.querySelectorAll(".rv-opt").forEach(function (b, j) {
        b.disabled = true;
        b.classList.add(opts[j] === it.en ? "rv-ok" : "rv-no");
      });
      done(it, ok);
      stage.querySelector(".rv-after").innerHTML =
        '<div class="rv-fb ' + (ok ? "rv-good" : "rv-bad") + '">' + (ok ? "✔ Đúng rồi!" : "✘ Câu kia mới đúng.") +
        '<span class="rv-vn">❌ ' + esc(it.bad) + '</span><span class="rv-en">✔ ' + esc(it.en) + "</span></div>" +
        nextRow('<button class="rv-ico" type="button" data-rv="say">🔊 Nghe câu đúng</button>');
      speak(it.en);
      stage.querySelector('[data-rv="next"]').focus({ preventScroll: true });
    }
    S0.onKey = function (k) { if (k === "1" || k === "2") { choose(+k - 1); return true; } };
    S0.choose = choose;
  }

  function finish() {
    var days = store.get(DAYS_KEY) || [], t = today();
    if (days.indexOf(t) < 0) { days.push(t); store.set(DAYS_KEY, days.slice(-400)); }
    renderStats();
    var pct = Math.round(S0.right / Math.max(1, S0.q.length) * 100);
    var due = items.filter(isDue).length;
    S0.onKey = null;
    stage.innerHTML = '<div class="rv-end"><h3>' + (S0.miss.length ? "💪 Xong phiên ôn!" : "🎉 Tuyệt vời, không sai câu nào!") + "</h3>" +
      '<div class="rv-sub">Trả lời đúng ' + S0.right + " lượt (" + pct + "%). " +
      (due ? "Còn " + due + " câu đến hạn ôn." : "Bạn đã ôn hết các câu đến hạn hôm nay. Quay lại vào ngày mai nhé!") + "</div>" +
      (S0.miss.length ? '<div class="rv-sub" style="margin-top:14px;color:var(--text);font-weight:700">Những câu cần chú ý:</div><ul class="rv-miss">' +
        S0.miss.map(function (it, i) {
          return '<li><b><button class="rv-ico" type="button" data-say-i="' + i + '" style="margin:0 6px 0 0">🔊</button>' + esc(it.en) + "</b>" + esc(it.vn || "❌ " + it.bad) + "</li>";
        }).join("") + "</ul>" : "") +
      '<div class="rv-row">' + (S0.miss.length ? '<button class="rv-btn" type="button" data-rv="again">🔁 Ôn lại câu sai</button>' : "") +
      '<button class="rv-btn rv-go" type="button" data-rv="more">▶ Ôn tiếp</button></div></div>';
  }

  /* ---------- Sự kiện ---------- */
  sec.querySelector("#rv-start").addEventListener("click", function () {
    var mode = sec.querySelector("#rv-mode").value;
    start(buildQueue(sec.querySelector("#rv-scope").value, mode, +sec.querySelector("#rv-n").value), mode);
  });
  stage.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b || !S0) return;
    var it = S0.q[S0.i], a = b.dataset.rv;
    if (b.dataset.sayI != null) { speak(S0.miss[+b.dataset.sayI].en); return; }
    if (b.dataset.opt != null) { S0.choose(+b.dataset.opt); return; }
    if (b.dataset.rate != null) { S0.rate(+b.dataset.rate); return; }
    if (a === "say") speak(it.en);
    else if (a === "slow") {
      var r = document.querySelector(".audio-bar [data-rate].on"), old = r;
      var slow = document.querySelector('.audio-bar [data-rate="0.6"]');
      if (slow && old) { old.classList.remove("on"); slow.classList.add("on"); speak(it.en); slow.classList.remove("on"); old.classList.add("on"); }
      else speak(it.en);
    }
    else if (a === "reveal") { var h = stage.querySelector(".rv-hidden-en"); if (h) h.hidden = false; }
    else if (a === "flip") S0.flip();
    else if (a === "check") S0.check(false);
    else if (a === "giveup") S0.check(true);
    else if (a === "next") next();
    else if (a === "again") {
      var miss = S0.miss.slice();
      miss.forEach(function (x) { delete x._again; });
      start(shuffle(miss), S0.mode);
    } else if (a === "more") sec.querySelector("#rv-start").click();
  });
  document.addEventListener("keydown", function (e) {
    if (!S0 || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (!sec.contains(t) && t !== document.body) return;
    if (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA") return;
    if (S0.onKey && S0.onKey(e.key)) { e.preventDefault(); return; }
    if (e.key === "Enter" && S0.answered && t.tagName !== "BUTTON") { e.preventDefault(); next(); }
  });

  /* Link đang xem cho mục mới */
  var mine = document.querySelectorAll('a[href="#on-tap"]'), all = document.querySelectorAll(".nav-link,.topnav a");
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

  renderStats();
  stage.innerHTML = '<div class="rv-sub">Chọn phạm vi và cách ôn rồi bấm <b>▶ Bắt đầu ôn</b>. Lần đầu nên dùng chế độ <b>Trộn</b>: câu mới sẽ hiện dạng thẻ, và càng nhớ thì bài càng khó dần (trắc nghiệm → nghe hiểu → tự gõ).</div>';
  if (location.hash === "#on-tap") sec.scrollIntoView({ behavior: "instant" });
})();
