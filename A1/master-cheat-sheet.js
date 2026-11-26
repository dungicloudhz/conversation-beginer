/* Logic trang Master-Cheat-Sheet.html: dựng thẻ từ (mỗi từ một dòng + phiên âm + nghĩa),
   đọc bằng Web Speech API, thanh công cụ (đọc chậm / phiên âm / che nghĩa), điều hướng và thanh tiến độ.
   Bảng phiên âm nằm ở vocab-data/master-cheat-sheet-ipa.js (window.A1_IPA). */
var IPA = window.A1_IPA.word;
var IPA_PHRASE = window.A1_IPA.phrase;
var LETTER = window.A1_IPA.letter;

/* ═══════════════════════════════════════════════
   2. Tra phiên âm theo từng cụm (không chứa dấu /)
   ═══════════════════════════════════════════════ */
function ipaInner(v){ return v.replace(/^\s*\/|\/\s*$/g,''); }

function ipaToken(tok, missing){
  if(/^[A-Z]$/.test(tok) && tok !== 'I') return LETTER[tok.toLowerCase()];
  var low = tok.toLowerCase();
  if(IPA[low]) return ipaInner(IPA[low]);
  if(/^[A-Z]{2,4}$/.test(tok)) return tok.toLowerCase().split('').map(function(c){return LETTER[c];}).join(' ');
  if(low.indexOf('-') > 0){
    var segs = low.split('-'), out = [];
    for(var i=0;i<segs.length;i++){
      if(!IPA[segs[i]]){ if(missing) missing.push(tok); return null; }
      out.push(ipaInner(IPA[segs[i]]));
    }
    return out.join('');
  }
  if(missing) missing.push(tok);
  return null;
}

function ipaOne(text, missing){
  var t = text.replace(/[’]/g,"'").replace(/\([^)]*\)/g,' ').replace(/…/g,' ').replace(/\s+/g,' ').trim();
  if(!t) return null;
  var low = t.toLowerCase();
  if(IPA_PHRASE[low]) return ipaInner(IPA_PHRASE[low]);
  var toks = t.replace(/[?!.,:;"“”+–]/g,' ').split(/\s+/).filter(Boolean);
  var out = [];
  for(var i=0;i<toks.length;i++){
    var p = ipaToken(toks[i], missing);
    if(p === null || p === undefined) return null;
    out.push(p);
  }
  return out.join(' ');
}

function ipaPart(text, missing){
  var forms = text.split('→'), res = [];
  for(var i=0;i<forms.length;i++){
    var r = ipaOne(forms[i], missing);
    if(!r) return null;
    res.push('/' + r + '/');
  }
  return res.join(' → ');
}

/* ═══════════════════════════════════════════════
   3. TTS – Web Speech API
   ═══════════════════════════════════════════════ */
var synth = window.speechSynthesis;
var curRow = null, curId = 0;
var prefs = {slow:false, ipa:true, hide:false};
try{ var saved = JSON.parse(localStorage.getItem('a1-vocab-prefs')||'{}'); for(var pk in saved){ prefs[pk] = saved[pk]; } }catch(e){}

var abBar  = document.getElementById('audio-bar');
var abWord = document.getElementById('ab-word');
var abStop = document.getElementById('ab-stop');

function clearPlaying(){
  if(curRow){ curRow.classList.remove('playing'); curRow = null; }
  abBar.classList.remove('show');
}
function stopAll(){ curId++; if(synth) synth.cancel(); clearPlaying(); }

function pickVoice(){
  var voices = synth.getVoices();
  return voices.find(function(v){ return /en[-_]US/i.test(v.lang) && !/compact/i.test(v.name); })
      || voices.find(function(v){ return /en[-_]/i.test(v.lang); });
}

function speak(text, row){
  if(!synth || !text) return;
  if(row && row === curRow){ stopAll(); return; }     /* bấm lại = dừng */
  var id = ++curId;
  synth.cancel();
  clearPlaying();
  var utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = prefs.slow ? 0.6 : 0.9;
  var v = pickVoice(); if(v) utt.voice = v;
  curRow = row || null;
  if(row) row.classList.add('playing');
  abWord.textContent = text;
  abBar.classList.add('show');
  utt.onend = utt.onerror = function(){ if(id === curId) clearPlaying(); };
  synth.speak(utt);
}
abStop.addEventListener('click', stopAll);

function cleanSpeak(s){
  return s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D')
          .replace(/[’]/g,"'").replace(/\([^)]*\)/g,' ').replace(/→/g,', ')
          .replace(/[…+]/g,' ').replace(/[^a-zA-Z0-9\s'\-,.?!:]/g,' ')
          .replace(/\s+/g,' ').trim();
}

/* ═══════════════════════════════════════════════
   4. Dựng lại mọi .vc: mỗi từ một dòng
   ═══════════════════════════════════════════════ */
var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

function splitParts(s){ return s.split(/\s+\/\s+/).map(function(x){return x.trim();}).filter(Boolean); }

function el(tag, cls, text){
  var e = document.createElement(tag);
  if(cls) e.className = cls;
  if(text != null) e.textContent = text;
  return e;
}

/* "win (won)" → win + <small>(won)</small> */
function fillEnglish(node, text){
  var re = /\([^)]*\)/g, last = 0, m;
  while((m = re.exec(text))){
    if(m.index > last) node.appendChild(document.createTextNode(text.slice(last, m.index).trim()));
    node.appendChild(el('small', null, m[0]));
    last = m.index + m[0].length;
  }
  if(last < text.length) node.appendChild(document.createTextNode(text.slice(last).trim()));
}

function buildRow(text, meaning, card){
  var say = cleanSpeak(text);
  var row = el('div', 'vr');
  row.tabIndex = 0;
  row.setAttribute('role', 'button');
  row.setAttribute('aria-label', 'Nghe phát âm: ' + say);

  var btn = el('span', 'vb'); btn.innerHTML = ICON;
  var txt = el('div', 'vr-txt');
  var en = el('div', 'vr-en'); fillEnglish(en, text);
  txt.appendChild(en);
  var ipa = ipaPart(text);
  if(ipa) txt.appendChild(el('div', 'vr-ipa', ipa));
  if(meaning) txt.appendChild(el('div', 'vr-vi', meaning));
  row.appendChild(btn); row.appendChild(txt);

  function go(){ row.classList.add('show'); card.classList.add('show'); speak(say, row); }
  row.addEventListener('click', function(e){ e.stopPropagation(); go(); });
  row.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); }
  });
  return row;
}

function enhanceCards(){
  document.querySelectorAll('.vc').forEach(function(card){
    if(card.dataset.enhanced) return;
    var enEl = card.querySelector('.ve');
    if(!enEl) return;
    card.dataset.enhanced = '1';
    var viEl = card.querySelector('.vv'), xEl = card.querySelector('.vx');
    var enParts = splitParts(enEl.textContent);
    var viFull  = viEl ? viEl.textContent.trim() : '';
    var viParts = viFull ? splitParts(viFull) : [];
    var xText   = xEl ? xEl.textContent.trim() : '';
    var single  = enParts.length === 1;
    var paired  = !single && viParts.length === enParts.length;

    card.textContent = '';
    enParts.forEach(function(p, i){
      card.appendChild(buildRow(p, single ? viFull : (paired ? viParts[i] : ''), card));
    });
    if(!single && !paired && viFull) card.appendChild(el('div', 'vc-mean', viFull));
    if(xText) card.appendChild(el('div', 'vc-tag', '💡 ' + xText));
  });
}

/* ═══════════════════════════════════════════════
   5. Thanh công cụ: đọc chậm · phiên âm · che nghĩa
   ═══════════════════════════════════════════════ */
function applyPrefs(){
  document.body.classList.toggle('no-ipa', !prefs.ipa);
  document.body.classList.toggle('hide-vi', prefs.hide);
  document.querySelectorAll('#vtools button').forEach(function(b){
    var key = b.dataset.k;
    b.setAttribute('aria-pressed', String(!!prefs[key]));
  });
  try{ localStorage.setItem('a1-vocab-prefs', JSON.stringify(prefs)); }catch(e){}
}
(function buildTools(){
  var bar = el('div'); bar.id = 'vtools';
  [
    ['slow','🐢','Đọc chậm','Đọc chậm hơn để nghe rõ từng âm'],
    ['ipa','🔤','Phiên âm','Hiện / ẩn phiên âm IPA'],
    ['hide','🙈','Che nghĩa','Che nghĩa tiếng Việt để tự kiểm tra (chạm vào từ để hiện)']
  ].forEach(function(d){
    var b = el('button'); b.type = 'button'; b.dataset.k = d[0]; b.title = d[3];
    b.appendChild(el('span', null, d[1])); b.appendChild(el('span', 'lbl', d[2]));
    b.addEventListener('click', function(){
      prefs[d[0]] = !prefs[d[0]];
      if(d[0] === 'hide'){ document.querySelectorAll('.vr.show,.vc.show').forEach(function(n){ n.classList.remove('show'); }); }
      applyPrefs();
    });
    bar.appendChild(b);
  });
  document.body.appendChild(bar);
  applyPrefs();
})();

/* ═══════════════════════════════════════════════
   4. Click vào mẫu câu (.pe) cũng phát âm
   ═══════════════════════════════════════════════ */
document.addEventListener('click', function(e){
  var el = e.target.closest('.pe');
  if(!el) return;
  speak(el.textContent.trim(), null);
});

/* ═══════════════════════════════════════════════
   5. Active nav + progress bar
   ═══════════════════════════════════════════════ */
var sections = document.querySelectorAll('.ts');
var links = document.querySelectorAll('.nav-link, .topnav a');
var pbar = document.getElementById('pbar');
function update(){
  var active = null;
  sections.forEach(function(s){
    if(s.getBoundingClientRect().top <= 90) active = s.id;
  });
  links.forEach(function(a){
    a.classList.toggle('active', a.getAttribute('href')==='#'+active);
  });
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var h = document.body.scrollHeight - window.innerHeight;
  pbar.style.width = (Math.min(t/h,1)*100)+'%';
}
window.addEventListener('scroll', update, {passive:true});
update();

/* Chạy sau khi DOM sẵn sàng (và sau khi voices load) */
enhanceCards();
if(synth){
  synth.addEventListener('voiceschanged', function(){ enhanceCards(); });
}
