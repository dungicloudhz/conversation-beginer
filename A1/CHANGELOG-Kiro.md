# Tổng hợp thay đổi — bộ bài Tiếng Anh A1

Tài liệu này ghi lại toàn bộ thay đổi Kiro đã thực hiện trong thư mục `A1`, kèm code chi tiết.

- **Ngày:** 26/11/2026
- **Thư mục:** `/Users/apw.dungnd/english/en-v2/A1`
- **Sao lưu:** `/tmp/gen/backup/` (4 bài chủ đề) và `/tmp/gen/backup2/` (3 trang tổng hợp)

> **Mức độ kiểm tra:** mọi file JS đều qua `node --check`. Hai trang từ vựng được chạy thử trên DOM giả qua cả 3 chế độ học, đối chiếu kết quả hiển thị trước và sau khi tách file (giống hệt từng ký tự). **Chưa mở thử trong trình duyệt thật** — bạn nên mở nhanh để xác nhận.

---

## Mục lục

1. [Tóm tắt](#1-tóm-tắt)
2. [Trang mới: Advanced-Vocabulary.html](#2-trang-mới-advanced-vocabularyhtml)
3. [Trang mới: Master-Vocabulary.html](#3-trang-mới-master-vocabularyhtml)
4. [Lấp chỗ chưa đồng đều ở 4 bài chủ đề](#4-lấp-chỗ-chưa-đồng-đều-ở-4-bài-chủ-đề)
5. [Cập nhật `extra-data` và `cheatsheet-data`](#5-cập-nhật-extra-data-và-cheatsheet-data)
6. [Tách JS và dữ liệu ra file riêng](#6-tách-js-và-dữ-liệu-ra-file-riêng)
7. [Cập nhật `nav.js`](#7-cập-nhật-navjs)
8. [Cấu trúc dữ liệu](#8-cấu-trúc-dữ-liệu)
9. [Code đáng chú ý](#9-code-đáng-chú-ý)
10. [Cách bảo trì](#10-cách-bảo-trì)
11. [Việc còn lại](#11-việc-còn-lại)

---

## 1. Tóm tắt

| Nhóm việc | Kết quả |
|---|---|
| Trang mới | `Advanced-Vocabulary.html` (37 chủ đề, 531 từ), `Master-Vocabulary.html` (31 chủ đề, 367 mục) |
| Ghi chú ngữ pháp | 898 ghi chú viết mới (531 + 367), mỗi mục một ghi chú dưới câu ví dụ |
| Lấp chỗ thiếu | 2 bài được thêm mục "Từ vựng nâng cao", 1 bài được viết lại theo mẫu chuẩn, 1 bài được thêm phiên âm |
| Phiên âm IPA | 61 mục mới trong `extra-data`, đạt 100% ở cả 37 bài có mục nâng cao |
| Cheat sheet | 24 từ, 4 dòng lỗi hay gặp, 3 mẹo thêm vào `cheatsheet-data` |
| Tách file | 3 trang HTML giảm từ 480 KB xuống 139 KB, sinh 6 file JS mới |
| Điều hướng | 2 mục mới trong `nav.js` |

### File mới

```
A1/
├── Advanced-Vocabulary.html          ← trang mới
├── Master-Vocabulary.html            ← trang mới
├── advanced-vocabulary.js            ← logic (tách từ HTML)
├── master-vocabulary.js              ← logic (tách từ HTML)
├── master-cheat-sheet.js             ← logic (tách từ HTML)
├── CHANGELOG-Kiro.md                 ← file này
└── vocab-data/                       ← thư mục mới
    ├── advanced-vocabulary.js        ← dữ liệu 37 chủ đề
    ├── master-vocabulary.js          ← dữ liệu 31 chủ đề
    └── master-cheat-sheet-ipa.js     ← bảng phiên âm
```

### File đã sửa

```
nav.js                                           (+2 dòng)
introduce-yourself-beginer.html                  (+ mục #s8)
english-communication-toolkit.html               (+ mục #s9)
restaurant-cafe.html                             (viết lại #s9)
family-english-beginner.html                     (không đổi HTML)
Master-Cheat-Sheet.html                          (chỉ tách script)
extra-data/{4 bài}.js                            (+61 mục IPA)
cheatsheet-data/{4 bài}.js                       (+24 từ, +4 lỗi, +3 mẹo)
```

---

## 2. Trang mới: `Advanced-Vocabulary.html`

### Mục đích

Gom mục "Từ vựng nâng cao" (`#s8` hoặc `#s9`) của **37 bài chủ đề** vào một trang, thêm khả năng luyện tập và giải thích ngữ pháp.

### Số liệu

| Chỉ số | Giá trị |
|---|---|
| Chủ đề | 37 |
| Từ và cụm từ | 531 |
| Câu giao tiếp tự nhiên | 254 |
| Ghi chú ngữ pháp | 531 (100%) |
| Ô điền từ sinh ra ở chế độ Điền từ | 531 |

### Tính năng

**Ba chế độ học**, chuyển bằng thanh `.seg`:

| Chế độ | Hành vi |
|---|---|
| 📖 Học | Hiện đủ từ, nghĩa, câu ví dụ có tô đậm từ, và khối NGỮ PHÁP |
| ✏️ Điền từ | Khoét từ trong câu ví dụ thành ô nhập. Khối NGỮ PHÁP ẩn đến khi trả lời đúng hoặc bấm "Xem đáp án" |
| 🙈 Che nghĩa | Ẩn nghĩa tiếng Việt, có nút "Hiện nghĩa" |

**Bốn cách dùng từ** ở đầu trang: thay từ cơ bản, thêm lý do, dùng cụm cố định nguyên khối, chuỗi 3 câu.

**Thử thách nói:** bốc ngẫu nhiên một từ theo chủ đề, gợi ý 3 bước nói, rồi hiện câu mẫu.

**Khác:** nghe giọng UK/US với 3 mức tốc độ, ô "Câu của tôi", nút "Đã thuộc" lưu vào `localStorage`, tìm kiếm (gồm cả nội dung ghi chú ngữ pháp), lọc theo nhóm, sidebar + thanh ngang trên điện thoại, link về bài gốc.

### HTML của một thẻ từ (chế độ Học)

```html
<div class="w" data-id="35.0.0">
  <div class="top">
    <span class="wd say">director</span>
    <span class="vi">đạo diễn</span>
  </div>
  <div class="ex">
    <span class="say">The <mark>director</mark> is famous for sci-fi movies.</span>
  </div>
  <div class="gm">
    <b>NGỮ PHÁP</b>“The director is famous for sci-fi movies” = famous for + danh từ. “director” số ít nên is.
  </div>
  <div class="own">
    <textarea placeholder="Viết 1 câu về chính bạn với từ này…" aria-label="Câu của tôi"></textarea>
    <div class="hint">Gợi ý: đổi chủ ngữ, thêm because / but / so.</div>
  </div>
  <div class="act">
    <button class="btn sm" data-a="own">✍️ Câu của tôi</button>
    <button class="btn sm alt" data-a="done">Đã thuộc</button>
  </div>
</div>
```

### HTML cùng thẻ đó ở chế độ Điền từ

```html
<div class="w" data-id="35.0.0" data-ans="[&quot;director&quot;]">
  <div class="top"><span class="wd">?</span><span class="vi">đạo diễn</span></div>
  <div class="ex">The <input type="text" data-i="0" autocomplete="off" autocapitalize="off"
       spellcheck="false" aria-label="Điền từ còn thiếu"> is famous for sci-fi movies.</div>
  <div class="gm hid"><b>NGỮ PHÁP</b>…</div>
  …
  <div class="act">
    <button class="btn sm" data-a="check">Kiểm tra</button>
    <button class="btn sm" data-a="reveal">Xem đáp án</button>
    …
  </div>
</div>
```

### CSS của khối ghi chú ngữ pháp

```css
.gm{font-size:12px;line-height:1.55;color:#9fe9dc;background:rgba(48,216,192,.07);
    border-left:2px solid var(--teal);padding:6px 10px;border-radius:0 6px 6px 0}
.gm b{color:var(--teal);font-family:var(--mono);font-size:10.5px;
      letter-spacing:.4px;margin-right:4px}
.gm.hid{display:none}
```

### Lưu ý

- 11 từ đổi dạng trong câu (`fall out` → `fell out`) nên ở chế độ Điền từ chỉ hiện gợi ý, không có ô trống.
- Dữ liệu trích một lần. Sửa bài gốc sẽ không tự cập nhật trang này.

---

## 3. Trang mới: `Master-Vocabulary.html`

### Mục đích

Lấy phần **từ vựng và mẫu câu** của 31 chủ đề trong `Master-Cheat-Sheet.html`, dựng lại theo cấu trúc của `Advanced-Vocabulary.html`. **`Master-Cheat-Sheet.html` giữ nguyên nội dung**, chỉ đọc để trích.

### Số liệu

| Chỉ số | Giá trị |
|---|---|
| Chủ đề | 31 |
| Từ và cụm từ có câu ví dụ | 223 |
| Mẫu câu giao tiếp | 144 |
| Ghi chú ngữ pháp | 367 (100%) |
| Ô điền từ sinh ra ở chế độ Điền từ | 295 |
| Bảng tham khảo giữ nguyên | 2 |

### Khác biệt so với `Advanced-Vocabulary.html`

Master Cheat Sheet có 3 loại nội dung, nên trang này xử lý 3 kiểu khối:

| `k` | Nguồn | Hiển thị |
|---|---|---|
| `v` | thẻ `.vc` (từ + nghĩa) | Thẻ từ. Câu ví dụ do Kiro viết thêm, nằm ở `notes[id].e` |
| `p` | dòng `.pr` (mẫu câu + nghĩa) | Thẻ câu, viền trái xanh. Chế độ Điền từ hiện nghĩa tiếng Việt để tự nói |
| `t` | bảng có cột "Ví dụ" | Thẻ từ, nhãn cột thay cho "Nghĩa" |
| `plain` | bảng không có cột "Ví dụ" | Giữ nguyên dạng bảng |

**Bốn bước học** ở đầu trang: nghe và nói theo, đặt vào khung câu, đổi thành chuyện của bạn, hỏi và đáp hai lượt.

### HTML của một thẻ mẫu câu

```html
<div class="w sent" data-id="0.p0">
  <div class="top">
    <span class="wd sentw say" data-en="Hi, I'm Linh. What's your name?">Hi, I'm Linh. What's your name?</span>
  </div>
  <div class="vi">Chào, mình là Linh. Bạn tên gì?</div>
  <div class="gm"><b>NGỮ PHÁP</b>Câu 1: I'm = I am. Câu 2: What's = What is, dùng hỏi thông tin. “your” là tính từ sở hữu của you.</div>
  …
</div>
```

Ở chế độ Điền từ, thẻ này đổi thành:

```html
<div class="top"><span class="wd sentw" data-en="Hi, I'm Linh…">🇻🇳 Chào, mình là Linh. Bạn tên gì?</span></div>
<div class="ex" style="display:none"></div>
<div class="gm hid">…</div>
…
<button class="btn sm" data-a="speak">👀 Xem câu tiếng Anh</button>
```

### CSS riêng cho thẻ câu

```css
.w.sent .wd.sentw{font-size:15px;color:var(--text);font-weight:700}
.w.sent .vi{color:var(--muted);font-size:13px}
.w.sent{border-left:3px solid var(--oc)}
.pt{overflow-x:auto}
.tbl{width:100%;border-collapse:collapse;font-size:13px;margin:6px 0 12px}
.tbl th{background:var(--s3);padding:9px 14px;text-align:left;font-size:11px;
        color:var(--muted);border-bottom:1px solid var(--border2);white-space:nowrap}
.tbl td{padding:9px 14px;border-bottom:1px solid var(--line);color:var(--muted)}
.tbl td:first-child{color:var(--text);font-weight:600}
```

### Lưu ý

- Phần lớn mục trong Master chỉ có từ và nghĩa. Kiro **tự viết thêm 223 câu ví dụ**. Nên đọc lướt để chỉnh.
- 2 mục không khoét được ô trống vì dạng từ đổi trong câu: `14.t1` (`will + V`) và `14.t2` (`am/is/are + V-ing`). Hai mục này chỉ hiện gợi ý "Đoán từ theo nghĩa".
- Không lấy hộp ngữ pháp tổng quát (📐 NGỮ PHÁP, ❌/✔) của Master.

---

## 4. Lấp chỗ chưa đồng đều ở 4 bài chủ đề

### Kết quả quét toàn bộ

Script quét 37 bài có mục "Từ vựng nâng cao", đối chiếu từ trong bảng với phiên âm trong `extra-data`:

```
family-english-beginner.html     0/24   ← thiếu toàn bộ phiên âm
restaurant-cafe.html             4/15   ← thiếu phiên âm + thiếu mục chuẩn
(33 bài còn lại)                 100%
introduce-yourself-beginer.html  — không có mục nâng cao
english-communication-toolkit.html — không có mục nâng cao
```

> **Đính chính:** ở lượt trao đổi trước Kiro nói `accupation.html`, `drinking.html` và `at-a-restaurant.html` "chia theo cách khác". Quét lại cho thấy **cả ba đều đúng chuẩn**. Chỗ thiếu thật sự chỉ ở 4 bài trên.

### Việc đã làm

| Bài | Trước | Sau |
|---|---|---|
| `family-english-beginner` | Mục nâng cao đúng chuẩn, 0/24 từ có phiên âm | Thêm 24 mục phiên âm vào `extra-data` |
| `restaurant-cafe` | Mục `#s9` thiếu cụm giao tiếp, thiếu cặp nghe cứng/tự nhiên, thiếu mẹo, thiếu dòng tự kiểm tra. 4/15 phiên âm | Viết lại theo mẫu chuẩn, giữ cả 3 bảng cũ. Thêm 11 phiên âm, 1 dòng tự kiểm tra |
| `introduce-yourself-beginer` | Không có mục nâng cao | Thêm mục `#s8` (14 từ), cập nhật sidebar + topnav + chip + tự kiểm tra. Thêm 14 phiên âm |
| `english-communication-toolkit` | Không có mục nâng cao | Thêm mục `#s9` (14 cụm), cập nhật điều hướng tương tự. Thêm 14 phiên âm |

### Nội dung 2 mục mới

**Giới thiệu bản thân** (`#s8`) — 14 từ, 2 bảng:

| Bảng | Từ |
|---|---|
| Quê quán, công việc và thời gian rảnh | originally from, be based in, work as, work for, in my free time, fresh graduate, currently |
| Tính cách và mục tiêu | easygoing, ambitious, hard-working, curious, passionate about, aim to, look forward to |

**Bộ công cụ giao tiếp** (`#s9`) — 14 cụm, 2 bảng. Đã loại các cụm bài này đã có (`by the way`, `in my opinion`, `on the other hand`, `for example`, `I mean`, `you know`):

| Bảng | Cụm |
|---|---|
| Làm mềm câu và nêu ý kiến | to be honest, actually, I guess, kind of, probably, as far as I know, it depends |
| Chuyển ý và phản hồi | speaking of, anyway, that makes sense, fair enough, good point, no worries, in the end |

### Code mục nâng cao mới (toolkit `#s9`, trích)

```html
<section class="section" id="s9">
  <div class="sec-head"><span class="sec-tag t5">NÂNG CAO</span><div>
    <div class="sec-title">Từ vựng mới để nói chuyện tự nhiên hơn</div>
    <div class="sec-sub">Thêm vài cụm này, câu nói của bạn sẽ mềm mại và giống người bản xứ hơn</div>
  </div></div>

  <div class="sub-title">Làm mềm câu và nêu ý kiến</div>
  <table class="tbl"><thead><tr><th>Từ / cụm</th><th>Nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
  <tr><td class="say">to be honest</td><td>thành thật mà nói</td>
      <td><span class="say">To be honest, I prefer tea to coffee.</span></td></tr>
  <tr><td class="say">actually</td><td>thật ra</td>
      <td><span class="say">Actually, I’m not from Hanoi.</span></td></tr>
  <tr><td class="say">I guess</td><td>tôi đoán là</td>
      <td><span class="say">I guess it’s going to rain.</span></td></tr>
  <tr><td class="say">kind of</td><td>hơi, khá là (nói thân mật)</td>
      <td><span class="say">I’m kind of tired today.</span></td></tr>
  <tr><td class="say">probably</td><td>có lẽ, nhiều khả năng</td>
      <td><span class="say">I’ll probably be late.</span></td></tr>
  <tr><td class="say">as far as I know</td><td>theo như tôi biết</td>
      <td><span class="say">As far as I know, the shop opens at nine.</span></td></tr>
  <tr><td class="say">it depends</td><td>tùy tình hình</td>
      <td><span class="say">It depends on the weather.</span></td></tr></tbody></table>

  <div class="sub-title">Chuyển ý và phản hồi</div>
  <table class="tbl">…</table>

  <div class="sub-title">Cụm giúp cuộc trò chuyện trôi chảy</div>
  <div class="ex-box"><div class="ex-head">LÀM CHO HỘI THOẠI TỰ NHIÊN<span class="ex-tag t5">Nâng cao</span></div><div class="ex-body">
    <div class="ex-row"><span class="ex-en say">Sorry, I didn’t catch that. Could you say it again?</span>
                        <span class="ex-vn">Xin lỗi, tôi nghe chưa rõ. Bạn nói lại được không?</span></div>
    …
  </div></div>

  <div class="cmp">
    <div class="bad"><b>❌ NGHE CỨNG</b><div>No. You are wrong. I don’t agree.</div></div>
    <div class="good"><b>✔ TỰ NHIÊN HƠN</b>
      <div class="say">Good point, but to be honest, I see it a bit differently.</div></div>
  </div>

  <div class="info i-tip"><span>💡</span><span><strong>Mẹo:</strong> học <strong>1 cụm mỗi ngày</strong>
    và dùng ngay trong một cuộc trò chuyện thật. Các cụm này không thay nội dung câu,
    chúng chỉ làm câu nghe lịch sự và tự nhiên hơn.</span></div>
</section>
```

### Điều hướng kèm theo

Mỗi mục mới cần 4 chỗ cập nhật:

```html
<!-- 1. Sidebar -->
<a class="nav-link" href="#s9">🚀 Từ vựng nâng cao</a>

<!-- 2. Thanh ngang trên điện thoại -->
<a href="#s9">9 Nâng cao</a>

<!-- 3. Chip đầu trang -->
<span class="chip c1">Từ vựng nâng cao</span>

<!-- 4. Danh sách tự kiểm tra -->
<li><label><input type="checkbox">Tôi dùng được ít nhất 5 cụm nâng cao ở
    <strong>Bài 9</strong> để làm mềm câu và chuyển ý</label></li>
```

### Kiểm tra sau khi sửa

- Thẻ HTML cân bằng (kiểm bằng `html.parser`), không thẻ hở.
- Sidebar và topnav khớp đúng danh sách `id` của các mục.
- 4 file `extra-data` qua `node --check`.
- 100% từ trong bảng nâng cao của cả 37 bài có phiên âm.

---

## 5. Cập nhật `extra-data` và `cheatsheet-data`

### 5.1 `extra-data/*.js` — thêm 61 mục phiên âm

`extra.js` đọc `window.A1_EXTRA.vocab` rồi chèn IPA và loại từ xuống dưới mỗi từ trên trang.

```javascript
// extra-data/introduce-yourself-beginer.js — 14 mục mới (trích)
window.A1_EXTRA = {
  vocab: {
    …,
    "originally from": ["/əˈrɪdʒ.ən.əl.i frɒm/", "cụm từ cố định"],
    "be based in": ["/bi ˈbeɪst ɪn/", "cụm động từ"],
    "work as": ["/ˈwɜːk æz/", "cụm động từ"],
    "in my free time": ["/ɪn maɪ ˈfriː taɪm/", "cụm từ cố định"],
    "fresh graduate": ["/ˌfreʃ ˈɡrædʒ.u.ət/", "cụm danh từ"],
    "currently": ["/ˈkʌr.ənt.li/", "trạng từ"],
    "ambitious": ["/æmˈbɪʃ.əs/", "tính từ"],
    "curious": ["/ˈkjʊə.ri.əs/", "tính từ"],
    "passionate about": ["/ˈpæʃ.ən.ət əˈbaʊt/", "cụm tính từ"],
    "aim to": ["/ˈeɪm tuː/", "cụm động từ"],
    "look forward to": ["/ˌlʊk ˈfɔː.wəd tuː/", "cụm động từ"]
  },
  grammar: [ … ]   // không đổi
};
```

Phân bổ: `family-english-beginner` 24 mục, `introduce-yourself-beginer` 12, `english-communication-toolkit` 14, `restaurant-cafe` 11.

### 5.2 `cheatsheet-data/*.js` — thêm từ, lỗi và mẹo

Mỗi bài tăng từ **24 lên 30 từ vựng** (chia hết cho cả bố cục 3 cột và 2 cột), **7 lên 8 dòng lỗi hay gặp**. Ba bài được thêm 1 mẹo.

```javascript
// cheatsheet-data/introduce-yourself-beginer.js
  mistakes: [
    …,
    ["My name Lan. I 24. I from Hanoi. I like read.",
     "Hi, I’m Lan. I’m twenty-four and I’m originally from Hue, but I’m based in Hanoi now. In my free time, I like reading.",
     "Đủ chủ ngữ và **be**, dùng **originally from / be based in** cho quê và nơi ở, và **like + V-ing** cho sở thích."]
  ],
  vocab: [
    …,
    ["originally from", "gốc ở, quê gốc ở"], ["be based in", "đang sống và làm việc ở"], ["work as", "làm nghề gì"],
    ["fresh graduate", "sinh viên mới tốt nghiệp"], ["ambitious", "có hoài bão"], ["look forward to", "mong chờ"]
  ],
  tips: [
    …,
    "Thêm **2 cụm nâng cao** vào bài 30 giây, ví dụ **originally from** và **in my free time**; thêm quá nhiều từ mới cùng lúc sẽ làm bạn vấp."
  ]
```

**Từ thêm vào từng bài:**

| Bài | 6 từ mới |
|---|---|
| Giới thiệu bản thân | originally from, be based in, work as, fresh graduate, ambitious, look forward to |
| Bộ công cụ giao tiếp | to be honest, actually, I guess, as far as I know, it depends, fair enough |
| Gia đình | sibling, relatives, in-laws, strict, stubborn, look up to |
| Nhà hàng & Cafe | savory, greasy, refreshing, mouth-watering, cozy, leftovers |

Kiểm tra bằng Node: cả 30 từ của mỗi bài đều có phiên âm trong `extra-data`, không có từ trùng.

---

## 6. Tách JS và dữ liệu ra file riêng

### Lý do

Ba trang tổng hợp có JS và dữ liệu JSON viết thẳng vào HTML, khiến file rất dài và khó sửa.

### Kết quả

| Trang | Trước | Sau | Giảm |
|---|---|---|---|
| `Advanced-Vocabulary.html` | 200 869 B | 16 388 B | 92% |
| `Master-Vocabulary.html` | 135 112 B | 17 296 B | 87% |
| `Master-Cheat-Sheet.html` | 144 145 B | 105 088 B | 27% |
| **Tổng** | **480 126 B** | **138 772 B** | **71%** |

`Master-Cheat-Sheet.html` còn 105 KB vì phần lớn là nội dung thẻ từ vựng viết trực tiếp trong HTML. Chỉ script và bảng phiên âm được tách.

### File sinh ra

| File | Dung lượng | Dòng | Nội dung |
|---|---|---|---|
| `vocab-data/advanced-vocabulary.js` | 196 KB | 2 524 | 37 chủ đề + 531 ghi chú |
| `vocab-data/master-vocabulary.js` | 118 KB | 1 470 | 31 chủ đề + 367 ghi chú |
| `vocab-data/master-cheat-sheet-ipa.js` | 29 KB | 764 | 506 từ + 221 cụm + 26 chữ cái |
| `advanced-vocabulary.js` | 16 KB | 243 | Logic trang nâng cao |
| `master-vocabulary.js` | 17 KB | 260 | Logic trang Master Vocabulary |
| `master-cheat-sheet.js` | 11 KB | 243 | Logic Master Cheat Sheet |

### Thẻ script sau khi tách

```html
<!-- Advanced-Vocabulary.html -->
<script src="vocab-data/advanced-vocabulary.js" defer></script>
<script src="advanced-vocabulary.js" defer></script>
<script src="nav.js" defer></script>

<!-- Master-Vocabulary.html -->
<script src="vocab-data/master-vocabulary.js" defer></script>
<script src="master-vocabulary.js" defer></script>
<script src="nav.js" defer></script>

<!-- Master-Cheat-Sheet.html -->
<script src="vocab-data/master-cheat-sheet-ipa.js" defer></script>
<script src="master-cheat-sheet.js" defer></script>
<script src="nav.js" defer></script>
```

Thứ tự quan trọng: file dữ liệu phải nạp **trước** file logic. Cả hai dùng `defer` nên chạy theo đúng thứ tự khai báo.

### Vì sao dữ liệu là `.js` chứ không phải `.json`

Trình duyệt chặn `fetch()` khi mở trang bằng `file://`. File `.json` sẽ không tải được. Mỗi file dữ liệu gán vào `window.A1_...`, giống cách `cheatsheet-data` và `extra-data` đang làm.

```javascript
/* Dữ liệu trang Từ vựng nâng cao theo chủ đề.
   "topics": các chủ đề (bảng từ, cụm giao tiếp, cặp nghe cứng/tự nhiên).
   "notes": ghi chú ngữ pháp theo id "chủ đề.bảng.dòng".
   Được nạp trước advanced-vocabulary.js (xem Advanced-Vocabulary.html).
   Dữ liệu ở dạng JSON gán vào window để mở trực tiếp bằng file:// vẫn chạy
   (fetch() bị trình duyệt chặn). */
window.A1_ADV_VOCAB = {
  "topics": [ … ],
  "notes": { … }
};
```

Đầu mỗi file logic chỉ thêm vài dòng lấy dữ liệu:

```javascript
/* Logic trang Advanced-Vocabulary.html: hiển thị thẻ từ, 3 chế độ học
   (Học / Điền từ / Che nghĩa), lưu tiến độ, thanh điều hướng và Thử thách nói.
   Dữ liệu nằm ở vocab-data/advanced-vocabulary.js (window.A1_ADV_VOCAB). */
var DATA = window.A1_ADV_VOCAB.topics;
var NOTES = window.A1_ADV_VOCAB.notes;
```

```javascript
/* Logic trang Master-Cheat-Sheet.html: dựng thẻ từ (mỗi từ một dòng + phiên âm + nghĩa),
   đọc bằng Web Speech API, thanh công cụ (đọc chậm / phiên âm / che nghĩa),
   điều hướng và thanh tiến độ.
   Bảng phiên âm nằm ở vocab-data/master-cheat-sheet-ipa.js (window.A1_IPA). */
var IPA = window.A1_IPA.word;
var IPA_PHRASE = window.A1_IPA.phrase;
var LETTER = window.A1_IPA.letter;
```

Ba bảng phiên âm cũ (`IPA`, `IPA_EXTRA`, `IPA_FIX` và `IPA_PHRASE`, `LETTER`) đã được **gộp sẵn** vào 3 khóa `word` / `phrase` / `letter`, nên file logic không còn vòng lặp ghi đè.

### Cách đối chiếu trước và sau

Tôi chạy cả hai phiên bản trên một DOM giả rồi băm kết quả hiển thị:

```javascript
/* /tmp/gen/h.js — so sánh bản inline cũ và bản tách file mới */
const els = {}, segs = [];
function mk(o) {
  return Object.assign({
    innerHTML: '', value: 'all', dataset: {}, style: {}, textContent: '',
    classList: { toggle() {}, add() {}, remove() {} },
    addEventListener(t, f) { (this.h = this.h || {})[t] = f; },
    querySelectorAll() { return []; }
  }, o);
}
function el(id) { return els[id] || (els[id] = mk({ id })); }
['learn', 'cloze', 'recall'].forEach(m => segs.push(mk({ dataset: { m } })));
global.document = {
  getElementById: el, querySelector: () => null,
  querySelectorAll: q => q === '.seg button' ? segs : [],
  addEventListener() {}, body: { classList: { toggle() {} } }, documentElement: {}
};
// … nạp bản cũ hoặc bản mới …
const out = [];
const snap = () => out.push(els.list.innerHTML, els.stats.innerHTML,
                            els.sbTopics.innerHTML, els.topnav.innerHTML, els.prog.innerHTML);
snap();
segs[1].h.click(); snap();   // chế độ Điền từ
segs[2].h.click(); snap();   // chế độ Che nghĩa
segs[0].h.click(); snap();   // về chế độ Học
console.log(crypto.createHash('sha256').update(out.join('\n--\n')).digest('hex'));
```

**Kết quả:**

```
== Advanced-Vocabulary.html
old 1945079 ef9268938bcfdf8b1a0d22386641d37e99bd1e1a1c0c51a731db542f87fc3bd4
new 1945079 ef9268938bcfdf8b1a0d22386641d37e99bd1e1a1c0c51a731db542f87fc3bd4

== Master-Vocabulary.html
old 1194268 efe4d3fcb8d7163362329a1a2ba2201a6cec8505eacc425ae00d7b10e676c69a
new 1194268 efe4d3fcb8d7163362329a1a2ba2201a6cec8505eacc425ae00d7b10e676c69a

== Master-Cheat-Sheet.html (343 chuỗi trên trang, qua ipaPart)
old texts 343 with ipa 197  83b7f2d2f05f127b1c76ab3339fc1403f3e8925d7c7b2675cba30c4792dad5b8
new texts 343 with ipa 197  83b7f2d2f05f127b1c76ab3339fc1403f3e8925d7c7b2675cba30c4792dad5b8
```

Băm giống nhau nghĩa là nội dung hiển thị không đổi một ký tự. Phần logic của Master Cheat Sheet cũng được xác nhận giữ nguyên từng dòng:

```
logic tail identical: True
```

---

## 7. Cập nhật `nav.js`

Thêm 2 mục vào nhóm "Tổng hợp & Luyện viết". Hai trang mới hiện trong menu ☰ của mọi bài và trong `index.html` (trang chủ tự sinh danh sách từ `window.A1_PAGES`).

```javascript
    { group: "Tổng hợp & Luyện viết", items: [
      ["Master-Cheat-Sheet.html", "🗂", "Master Cheat Sheet – Tổng hợp A1"],
      ["Master-Vocabulary.html", "📖", "Từ vựng A1 theo chủ đề"],          // ← mới
      ["Advanced-Vocabulary.html", "🚀", "Từ vựng nâng cao theo chủ đề"],  // ← mới
      ["Cheat-Sheet.html", "📋", "Cheat sheet toàn khóa"],
      ["Writing-Paragraphs.html", "✍", "Viết đoạn văn theo chủ đề"],
    ]},
```

---

## 8. Cấu trúc dữ liệu

### 8.1 `vocab-data/advanced-vocabulary.js`

```javascript
window.A1_ADV_VOCAB = {
  "topics": [
    {
      "f": "Movies.html",                 // link về bài gốc
      "e": "🎬",                           // emoji
      "n": "Movies",                       // tên chủ đề
      "g": "Sở thích & Giải trí",          // nhóm (dùng cho sidebar + bộ lọc)
      "sec": "Thêm vài từ này, bạn sẽ bàn phim như một người mê điện ảnh",
      "sub": [
        {
          "t": "Thế giới điện ảnh",        // tên bảng con
          "k": "table",                    // "table" = bảng từ · "phr" = cụm giao tiếp
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["director", "đạo diễn", "The director is famous for sci-fi movies."]
          ]
        }
      ],
      "bad":  "Film good. I like. Very interesting I am.",
      "good": "I really enjoyed it. The plot twist was amazing, and it kept me on the edge of my seat.",
      "tip":  "💡Mẹo: xem phim với phụ đề tiếng Anh…"
    }
  ],
  "notes": {
    // khóa = "chỉ số chủ đề . chỉ số bảng . chỉ số dòng"
    "0.0.0": "“I’m originally from + nơi” = quê gốc ở. I’m = I am; originally là trạng từ đứng giữa be và from…"
  }
};
```

Ba kiểu bảng được nhận diện qua `h[0]`:

| `h[0]` | Ý nghĩa | Cách đọc 1 dòng `r` |
|---|---|---|
| `Từ / cụm` | bảng thường | `w = r[0]`, `vi = r[1]`, `ex = r[2]` |
| `Từ cơ bản` | bảng nâng cấp từ | `w = r[1]`, `vi = "thay cho r[0]"`, `ex = r[2]` |
| `Câu cơ bản` | bảng nâng cấp câu | `w = r[1]`, `ex = r[1]` (chính nó là câu) |

### 8.2 `vocab-data/master-vocabulary.js`

```javascript
window.A1_MASTER_VOCAB = {
  "topics": [
    {
      "sid": "t1",                                   // id mục trong Master Cheat Sheet
      "e": "👋",
      "n": "Giới thiệu bản thân",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "introduce-yourself-beginer.html",
      "blocks": [
        { "k": "v", "sub": "", "items": [
            { "id": "0.v0", "w": "Hello / Hi / Hey", "vi": "Xin chào / Chào bạn / Chào (thân mật)" }
        ]},
        { "k": "p", "sub": "", "items": [
            { "id": "0.p0", "w": "Hi, I'm Linh. What's your name?", "vi": "Chào, mình là Linh. Bạn tên gì?" }
        ]},
        { "k": "t", "sub": "", "head": ["Giới từ", "Dùng với", "Ví dụ"], "items": [
            { "id": "7.t0", "w": "at", "vi": "giờ cụ thể, at night/noon",
              "ex": "at 7 p.m. / at night", "viLabel": "Dùng với" }
        ]},
        { "k": "plain", "sub": "Quốc gia & Quốc tịch",
          "head": ["Quốc gia", "Quốc tịch", "Quốc gia", "Quốc tịch"],
          "rows": [["Vietnam", "Vietnamese", "Japan", "Japanese"]] }
      ],
      "info": ""                                      // hộp mẹo của chủ đề
    }
  ],
  "notes": {
    "0.v2": { "e": "", "g": "I'm = I am. “be from + nơi” = đến từ đâu…" },   // v: e = câu ví dụ Kiro viết
    "0.p0": { "g": "Câu 1: I'm = I am. Câu 2: What's = What is…" }           // p/t: chỉ có g
  }
};
```

Khi `notes[id].e` rỗng, bản thân mục đã là câu hoàn chỉnh (ví dụ *I'm from Vietnam*) nên trang coi nó là thẻ câu:

```javascript
if(b.k==='p'){ it.kind='sent'; it.ex=it.w }
else if(b.k==='v'){ it.ex=n.e||''; it.kind=it.ex?'word':'sent'; if(!it.ex)it.ex=it.w }
else { it.kind='word' }
```

### 8.3 `vocab-data/master-cheat-sheet-ipa.js`

```javascript
window.A1_IPA = {
  "word":   { "hello": "/həˈloʊ/", "student": "/ˈstjuːdənt/", … },        // 506 mục
  "phrase": { "t-shirt": "/ˈtiːʃɜːrt/", "air conditioner": "/er kənˈdɪʃənər/", … },  // 221 mục
  "letter": { "a": "eɪ", "b": "biː", … }                                  // 26 mục
};
```

---

## 9. Code đáng chú ý

### 9.1 Tìm vị trí từ trong câu ví dụ

Dùng cho cả việc tô đậm (chế độ Học) và khoét ô trống (chế độ Điền từ). Thử khớp chính xác trước, nếu không được thì khớp theo gốc từ để bắt các dạng chia thì.

```javascript
var STOP={someone:1,'someone’s':1,a:1,an:1,the:1,be:1,to:1,up:0,'(with)':1};

function alts(w){
  return w.replace(/\(.*?\)/g,'')          // bỏ phần trong ngoặc
          .split(/\s*\/\s*/)                // tách các biến thể: "buddy / mate"
          .map(function(x){return x.trim()}).filter(Boolean);
}

function findSpans(w,ex){
  var res=[],a=alts(w),i,m;
  // 1) khớp chính xác (bỏ mạo từ đứng đầu)
  for(i=0;i<a.length;i++){
    m=new RegExp('(^|[^\\w])('+rx(a[i].replace(/^(a|an|the|be)\s+/i,''))+'\\w*)','i').exec(ex);
    if(m){var st=m.index+m[1].length;res.push([st,st+m[2].length]);}
  }
  if(res.length)return {spans:res,exact:true};

  // 2) khớp gần đúng: động từ bất quy tắc hoặc chia thì (fall out → fell out)
  a.forEach(function(p){
    p.toLowerCase().split(/\s+/).forEach(function(tok){
      if(STOP[tok]||tok.length<4)return;
      var stem=tok.length<=4?tok.slice(0,tok.length-1):tok.slice(0,tok.length-2);
      var re=new RegExp('(^|[^\\w])('+rx(stem)+'\\w*)','ig'),mm;
      while((mm=re.exec(ex))){var s=mm.index+mm[1].length;res.push([s,s+mm[2].length]);}
    });
  });
  return {spans:res,exact:false};
}

function mergeSpans(sp){           // gộp các đoạn chồng nhau
  sp.sort(function(a,b){return a[0]-b[0]});var out=[];
  sp.forEach(function(s){
    var l=out[out.length-1];
    if(l&&s[0]<=l[1])l[1]=Math.max(l[1],s[1]);else out.push(s.slice());
  });
  return out;
}
```

### 9.2 Sinh ô điền từ

```javascript
function cloze(it){
  if(it.sent)return null;                           // thẻ câu không khoét ô
  var f=findSpans(it.w,it.ex), sp=mergeSpans(f.spans.slice());
  if(!sp.length)return null;                        // không tìm được → chỉ hiện gợi ý
  var o='',p=0,ans=[];
  sp.forEach(function(s,i){
    o+=esc(it.ex.slice(p,s[0]));
    ans.push(it.ex.slice(s[0],s[1]));
    o+='<input type="text" data-i="'+i+'" autocomplete="off" autocapitalize="off" '
      +'spellcheck="false" aria-label="Điền từ còn thiếu">';
    p=s[1];
  });
  o+=esc(it.ex.slice(p));
  return {html:o,ans:ans};
}
```

### 9.3 Chấm bài có dung sai

Chấp nhận thiếu đuôi chia thì để người học không bị chấm sai oan:

```javascript
ins.forEach(function(inp,i){
  var want=(ans[i]||'').toLowerCase().replace(/[’']/g,"'");
  var got =inp.value.trim().toLowerCase().replace(/[’']/g,"'");
  if(a==='reveal'){inp.value=ans[i];inp.className='ok';return}
  var stem=want.slice(0,Math.max(3,want.length-3));
  inp.className=(got===want
              || (got.length>=3 && want.indexOf(got)===0 && got.length>=want.length-3)
              || got===stem) ? 'ok' : 'no';
});
// hiện khối NGỮ PHÁP khi đã trả lời xong
var gm=card.querySelector('.gm.hid');
if(gm&&(a==='reveal'||card.querySelectorAll('.ex input.ok').length===ins.length))
  gm.classList.remove('hid');
```

### 9.4 Ẩn hoặc hiện khối ngữ pháp

```javascript
function gmHtml(it,hidden){
  return it.g ? '<div class="gm'+(hidden?' hid':'')+'"><b>NGỮ PHÁP</b>'+esc(it.g)+'</div>' : '';
}
// gọi với hidden = true khi đang ở chế độ Điền từ và thẻ có ô trống
```

### 9.5 Dựng sidebar và thanh ngang từ dữ liệu

```javascript
function buildNav(){
  var sb='', tn='<a href="#how">Cách dùng</a><a href="#lab-h">Thử thách</a>', lastG='';
  topics.forEach(function(t){
    if(t.g!==lastG){                       // nhãn nhóm mới
      sb+='<div class="nav-label">'+esc(t.g.replace(/^📌\s*/,''))+'</div>';
      lastG=t.g;
    }
    sb+='<a class="nav-link" href="#t'+t.idx+'" data-t="'+t.idx+'">'+t.e+' '+esc(t.n)+'</a>';
    tn+='<a href="#t'+t.idx+'" data-t="'+t.idx+'">'+esc(t.n)+'</a>';
  });
  document.getElementById('sbTopics').innerHTML=sb;
  document.getElementById('topnav').innerHTML=tn;
}
```

Bấm vào mục trong sidebar sẽ bỏ bộ lọc đang bật rồi mở và cuộn tới chủ đề:

```javascript
function goTopic(idx){
  if(group||query){                        // đang lọc hoặc tìm kiếm thì bỏ bộ lọc
    group='';query='';
    document.getElementById('grp').value='';
    document.getElementById('q').value='';
    opened[idx]=true; render();
  }
  var d=document.getElementById('t'+idx);
  if(d){d.open=true;opened[idx]=true;d.scrollIntoView({behavior:'smooth',block:'start'})}
}
```

### 9.6 Đọc câu bằng Web Speech API

```javascript
var S=window.speechSynthesis, st={acc:'en-GB',rate:.85}, curEl=null;

function voice(){
  if(!S)return null;
  var v=S.getVoices().filter(function(x){
    return x.lang.replace('_','-').toLowerCase()===st.acc.toLowerCase();
  });
  return v.find(function(x){return /google|natural|premium|enhanced/i.test(x.name)})||v[0]||null;
}

function say(el,text){
  if(curEl)curEl.classList.remove('playing');
  if(!S)return;
  S.cancel();
  var t=(text||el.textContent)
        .replace(/\s+/g,' ')
        .replace(/\s*\/\s*/g,'. ')        // "buddy / mate" → đọc tách hai từ
        .replace(/___/g,'blank')
        .replace(/\([^)]*\)/g,'')          // bỏ chú thích trong ngoặc
        .trim();
  var u=new SpeechSynthesisUtterance(t);
  u.lang=st.acc; u.rate=st.rate;
  var v=voice(); if(v)u.voice=v;
  if(el){curEl=el;el.classList.add('playing');
         u.onend=u.onerror=function(){el.classList.remove('playing')}}
  S.speak(u);
}
```

### 9.7 Lưu tiến độ

```javascript
var KEY='a1-adv-vocab-v1';             // Master-Vocabulary dùng 'a1-master-vocab-v1'
var store={};
try{store=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
store.done=store.done||{};             // { "35.0.0": 1, … }  — đã thuộc
store.own =store.own ||{};             // { "35.0.0": "câu người học tự viết" }
function save(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
```

Hai trang dùng khóa `localStorage` khác nhau nên tiến độ không lẫn vào nhau.

---

## 10. Cách bảo trì

### Sửa nội dung từ vựng hoặc ghi chú ngữ pháp

Sửa trực tiếp trong `vocab-data/`. Dữ liệu đã định dạng gọn, mỗi mục một dòng.

```javascript
// vocab-data/advanced-vocabulary.js
"notes": {
  "35.0.0": "sửa nội dung ghi chú ở đây",
  …
}
```

Sau khi sửa, kiểm tra cú pháp:

```bash
cd /Users/apw.dungnd/english/en-v2/A1
node --check vocab-data/advanced-vocabulary.js
```

### Thêm một chủ đề mới

Thêm một phần tử vào `topics`, rồi thêm ghi chú với khóa `"<chỉ số chủ đề>.<chỉ số bảng>.<chỉ số dòng>"` (trang nâng cao) hoặc `"<chỉ số>.v<n>"` (trang Master Vocabulary). Sidebar và thanh ngang tự sinh lại, không cần sửa HTML.

### Thêm mục "Từ vựng nâng cao" cho bài còn thiếu

1. Thêm `<section class="section" id="sN">` theo mẫu ở [mục 4](#code-mục-nâng-cao-mới-toolkit-s9-trích).
2. Cập nhật 4 chỗ: sidebar, topnav, chip đầu trang, danh sách tự kiểm tra.
3. Thêm phiên âm vào `extra-data/<tên bài>.js`.
4. Chạy lại script quét để xác nhận 100% từ có phiên âm.

### Lệnh kiểm tra nhanh

```bash
cd /Users/apw.dungnd/english/en-v2/A1

# cú pháp toàn bộ JS
for f in *.js vocab-data/*.js extra-data/*.js cheatsheet-data/*.js; do node --check "$f" || echo "LỖI: $f"; done

# đếm chủ đề và ghi chú
node -e 'require("./vocab-data/advanced-vocabulary.js");' 2>/dev/null || \
node -e 'global.window={};eval(require("fs").readFileSync("vocab-data/advanced-vocabulary.js","utf8"));
         const d=window.A1_ADV_VOCAB;
         console.log("chủ đề:",d.topics.length,"ghi chú:",Object.keys(d.notes).length);'
```

### Cảnh báo

Các script trong `/tmp/gen/` (`build.py`, `build3.py`, `split_assets.py`…) **ghi dữ liệu thẳng vào HTML**. Đừng chạy lại chúng cho ba trang này, vì sẽ làm mất kết quả tách file. Từ giờ sửa trực tiếp trong `vocab-data/`.

---

## 11. Việc còn lại

### Cần rà soát

1. **898 ghi chú ngữ pháp và 223 câu ví dụ do Kiro tự viết.** Nên có người bản ngữ hoặc giáo viên đọc lại một lượt.
2. **61 mục phiên âm IPA mới.** Nên đối chiếu với từ điển Cambridge hoặc Oxford.
3. **Mở thử 3 trang trong trình duyệt.** Mọi kiểm tra đến giờ chỉ dùng DOM giả.

### Chênh lệch nhỏ còn lại

- 4 bài được cập nhật cheat sheet giờ có **30 từ và 8 dòng lỗi**, trong khi 33 bài còn lại có **24 từ và 7 dòng lỗi**. Giao diện vẫn hiển thị bình thường. Muốn đồng đều tuyệt đối thì cần bớt từ hoặc thay từ cũ.
- 11 từ ở trang nâng cao và 2 mục ở trang Master Vocabulary không khoét được ô trống vì dạng từ đổi trong câu.
- `Master-Cheat-Sheet.html` còn 105 KB. Có thể hạ tiếp bằng cách đưa nội dung thẻ từ vựng vào file dữ liệu, nhưng việc này sẽ thay đổi cấu trúc trang nhiều hơn.

### Gợi ý nâng cấp tiếp (chưa làm)

**Luyện nói**
1. Ghi âm và nghe lại giọng mình, xen kẽ với giọng chuẩn. Chạy offline, không cần máy chủ.
2. Chấm câu nói bằng nhận dạng giọng, tô đỏ từ sai hoặc thiếu. Cần Chrome hoặc Safari, và mở qua `http://localhost` vì `file://` chặn mic.
3. Hội thoại nhập vai: máy đọc lượt người kia, người học nói lượt của mình.

**Ghi nhớ**

4. Ôn cách quãng: hỏi lại mỗi từ sau 1, 3, 7 và 14 ngày, thay cho nút "Đã thuộc" một lần.
5. Trắc nghiệm nhanh: nghe rồi chọn câu đúng, hoặc chọn từ điền chỗ trống.

**Nội dung**

6. Thêm IPA và khung "Người Việt hay sai" cho từng chủ đề: nuốt âm cuối `-s` `-ed` `-t`, âm `th`, `r/l`, trọng âm từ như *comfortable*.
7. Mở rộng mục "Nghe cứng và tự nhiên hơn" từ 1 lên 4–5 cặp mỗi bài.
8. Hội thoại có nhánh: thêm các tình huống "nếu người kia nói khác".
9. Đoạn đọc ngắn 50–80 từ kèm 3 câu hỏi cho mỗi chủ đề.
10. Khối "Ngữ pháp liên quan" cuối mỗi chủ đề, trỏ tới đúng trang `Grammar-*.html`.

---

*Tài liệu do Kiro tạo ngày 26/11/2026. Mọi số liệu lấy từ file thực tế trong thư mục `A1`.*
