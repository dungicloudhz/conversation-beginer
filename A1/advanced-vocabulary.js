/* Logic trang Advanced-Vocabulary.html: hiển thị thẻ từ, 3 chế độ học (Học / Điền từ / Che nghĩa),
   lưu tiến độ, thanh điều hướng và Thử thách nói.
   Dữ liệu nằm ở vocab-data/advanced-vocabulary.js (window.A1_ADV_VOCAB). */
var DATA = window.A1_ADV_VOCAB.topics;
var NOTES = window.A1_ADV_VOCAB.notes;
(function(){
var KEY='a1-adv-vocab-v1';
var store={};try{store=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
store.done=store.done||{};store.own=store.own||{};
function save(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}

/* ---- chuẩn hoá dữ liệu: mỗi từ = {id,w,vi,ex} ---- */
var topics=DATA.map(function(t,ti){
  var n=0;
  t.sub.forEach(function(s,si){
    if(s.k!=='table')return;
    var up=s.h[0]==='Từ cơ bản',sent=s.h[0]==='Câu cơ bản';
    s.items=s.r.map(function(r,ri){
      var o=sent?{w:r[1],vi:r[2]+' (thay cho “'+r[0]+'”)',ex:r[1],sent:1}:up?{w:r[1],vi:'thay cho “'+r[0]+'”',ex:r[2]}:{w:r[0],vi:r[1],ex:r[2]};
      o.id=ti+'.'+si+'.'+ri;o.g=NOTES[o.id]||'';n++;return o;
    });
  });
  t.idx=ti;t.count=n;return t;
});
var total=topics.reduce(function(a,t){return a+t.count},0);
var phrTotal=topics.reduce(function(a,t){return a+t.sub.filter(function(s){return s.k==='phr'}).reduce(function(b,s){return b+s.r.length},0)},0);
document.getElementById('stats').innerHTML='<div class="stat"><b>'+topics.length+'</b>chủ đề</div><div class="stat"><b>'+total+'</b>từ / cụm từ</div><div class="stat"><b>'+phrTotal+'</b>câu giao tiếp tự nhiên</div>';

/* ---- tìm phần từ trong câu ví dụ ---- */
var STOP={someone:1,'someone’s':1,a:1,an:1,the:1,be:1,to:1,up:0,'(with)':1};
function alts(w){return w.replace(/\(.*?\)/g,'').split(/\s*\/\s*/).map(function(x){return x.trim()}).filter(Boolean)}
function findSpans(w,ex){
  var res=[],a=alts(w),i,m;
  for(i=0;i<a.length;i++){
    m=new RegExp('(^|[^\\w])('+rx(a[i].replace(/^(a|an|the|be)\s+/i,''))+'\\w*)','i').exec(ex);
    if(m){var st=m.index+m[1].length;res.push([st,st+m[2].length]);}
  }
  if(res.length)return {spans:res,exact:true};
  /* gần đúng: động từ bất quy tắc / chia thì */
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
function mergeSpans(sp){
  sp.sort(function(a,b){return a[0]-b[0]});var out=[];
  sp.forEach(function(s){var l=out[out.length-1];if(l&&s[0]<=l[1]+0)l[1]=Math.max(l[1],s[1]);else out.push(s.slice())});
  return out;
}
function hl(ex,spans){
  var sp=mergeSpans(spans.slice()),o='',p=0;
  sp.forEach(function(s){o+=esc(ex.slice(p,s[0]))+'<mark>'+esc(ex.slice(s[0],s[1]))+'</mark>';p=s[1]});
  return o+esc(ex.slice(p));
}
function cloze(it){
  if(it.sent)return null;
  var f=findSpans(it.w,it.ex);var sp=mergeSpans(f.spans.slice());
  if(!sp.length)return null;
  var o='',p=0,ans=[];
  sp.forEach(function(s,i){o+=esc(it.ex.slice(p,s[0]));ans.push(it.ex.slice(s[0],s[1]));o+='<input type="text" data-i="'+i+'" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Điền từ còn thiếu">';p=s[1]});
  o+=esc(it.ex.slice(p));
  return {html:o,ans:ans};
}

/* ---- audio ---- */
var S=window.speechSynthesis,st={acc:'en-GB',rate:.85},curEl=null;
function voice(){if(!S)return null;var v=S.getVoices().filter(function(x){return x.lang.replace('_','-').toLowerCase()===st.acc.toLowerCase()});return v.find(function(x){return /google|natural|premium|enhanced/i.test(x.name)})||v[0]||null}
function say(el,text){
  if(curEl)curEl.classList.remove('playing');
  if(!S)return;S.cancel();
  var t=(text||el.textContent).replace(/\s+/g,' ').replace(/\s*\/\s*/g,'. ').replace(/\bOOO\b/,'out of office').trim();
  var u=new SpeechSynthesisUtterance(t);u.lang=st.acc;u.rate=st.rate;var v=voice();if(v)u.voice=v;
  if(el){curEl=el;el.classList.add('playing');u.onend=u.onerror=function(){el.classList.remove('playing')};}
  S.speak(u);
}
document.addEventListener('click',function(e){var el=e.target.closest('.say');if(el)say(el)});
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('say')){e.preventDefault();say(e.target)}});
document.querySelectorAll('.audio button').forEach(function(b){b.addEventListener('click',function(){
  var attr=b.dataset.a?'a':'r';
  b.parentElement.querySelectorAll('button['+(attr==='a'?'data-a':'data-r')+']').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
  if(attr==='a')st.acc=b.dataset.a;else st.rate=parseFloat(b.dataset.r);
})});

/* ---- render ---- */
var mode='learn',query='',group='';
function tpl(it){
  var mt=mode==='cloze'?cloze(it):null,exHtml,hasClz=!!mt;
  var f=it.sent?{spans:[]}:findSpans(it.w,it.ex);
  if(mode==='cloze'){
    exHtml=hasClz?mt.html:esc(it.ex);
  }else exHtml='<span class="say">'+hl(it.ex,f.spans)+'</span>';
  if(it.sent)exHtml='<span class="say">'+esc(it.ex)+'</span>';
  var own=store.own[it.id]||'',done=!!store.done[it.id];
  var wordHtml=mode==='cloze'&&hasClz?'<span class="wd">?</span>':'<span class="wd say">'+esc(it.w)+'</span>';
  if(it.sent)wordHtml='<span class="wd" style="font-size:13.5px">Nâng cấp câu</span>';
  var viCls=mode==='recall'?'vi h':'vi';
  var act='<button class="btn sm" data-a="own">✍️ Câu của tôi</button><button class="btn sm alt" data-a="done">'+(done?'✔ Đã thuộc':'Đã thuộc')+'</button>';
  if(mode==='cloze'&&hasClz)act='<button class="btn sm" data-a="check">Kiểm tra</button><button class="btn sm" data-a="reveal">Xem đáp án</button>'+act;
  if(mode==='recall')act='<button class="btn sm" data-a="show">Hiện nghĩa</button>'+act;
  var hint=mode==='cloze'&&!hasClz&&!it.sent?'<div class="hint">Từ này đổi dạng trong câu, hãy đoán từ theo nghĩa: <span class="say">'+esc(it.w)+'</span></div>':'';
  return '<div class="w'+(done?' done':'')+(own?' open':'')+'" data-id="'+it.id+'"'+(hasClz?' data-ans="'+esc(JSON.stringify(mt.ans))+'"':'')+'>'+
    '<div class="top">'+wordHtml+'<span class="'+viCls+'">'+esc(it.vi)+'</span></div>'+
    '<div class="ex">'+exHtml+'</div>'+
    (it.g?'<div class="gm'+(mode==='cloze'&&hasClz?' hid':'')+'"><b>NGỮ PHÁP</b>'+esc(it.g)+'</div>':'')+hint+
    '<div class="own"><textarea placeholder="Viết 1 câu về chính bạn với từ này…" aria-label="Câu của tôi">'+esc(own)+'</textarea><div class="hint">Gợi ý: đổi chủ ngữ, thêm because / but / so.</div></div>'+
    '<div class="act">'+act+'</div></div>';
}
function matches(t,it){
  if(!query)return true;
  var q=query.toLowerCase();
  return (it.w+' '+it.vi+' '+it.ex+' '+it.g).toLowerCase().indexOf(q)>-1;
}
function render(){
  var out='',shown=0,doneCount=0,q=query.toLowerCase();
  document.body.classList.toggle('hide-vi',mode==='recall');
  topics.forEach(function(t){
    if(group&&t.g!==group)return;
    var topicHit=q&&(t.n+' '+t.sec).toLowerCase().indexOf(q)>-1;
    var body='',n=0;
    t.sub.forEach(function(s){
      if(s.k==='table'){
        var items=s.items.filter(function(it){return topicHit||matches(t,it)});
        if(!items.length)return;
        n+=items.length;
        body+='<div class="sub">'+esc(s.t)+'</div><div class="cards">'+items.map(tpl).join('')+'</div>';
      }else{
        var rows=s.r.filter(function(r){return !q||topicHit||(r[0]+' '+r[1]).toLowerCase().indexOf(q)>-1});
        if(!rows.length)return;
        body+='<div class="sub">'+esc(s.t)+'</div><div class="phr">'+rows.map(function(r){return '<div class="pr"><span class="en say">'+esc(r[0])+'</span><span class="vi">'+esc(r[1])+'</span></div>'}).join('')+'</div>';
      }
    });
    if(!body)return;
    shown+=n;
    if(t.bad)body+='<div class="cmp"><div class="bad"><b>❌ NGHE CỨNG</b><div>'+esc(t.bad)+'</div></div><div class="good"><b>✔ TỰ NHIÊN HƠN</b><div class="say">'+esc(t.good)+'</div></div></div>';
    if(t.tip)body+='<div class="tip">💡 '+esc(t.tip)+'</div>';
    body+='<div class="src">↗ <a href="'+encodeURI(t.f)+'#s8">Mở phần Nâng cao trong bài “'+esc(t.n)+'”</a></div>';
    var d=0;t.sub.forEach(function(s){if(s.items)s.items.forEach(function(it){if(store.done[it.id])d++})});
    out+='<details class="tp" id="t'+t.idx+'"'+((q||opened[t.idx])?' open':'')+'><summary><span class="ti">'+t.e+'</span><div><div class="tn">'+esc(t.n)+'</div><div class="ts">'+esc(t.sec)+'</div></div><span class="tc">'+d+'/'+t.count+' đã thuộc</span></summary><div class="tb">'+body+'</div></details>';
  });
  document.getElementById('list').innerHTML=out||'<div class="empty">Không tìm thấy kết quả.</div>';
  Object.keys(store.done).forEach(function(){doneCount++});
  document.getElementById('prog').innerHTML='Đã thuộc <b>'+doneCount+'</b>/'+total;
}
var opened={};
function buildNav(){
  var sb='',tn='<a href="#how">Cách dùng</a><a href="#lab-h">Thử thách</a>',lastG='';
  topics.forEach(function(t){
    if(t.g!==lastG){sb+='<div class="nav-label">'+esc(t.g)+'</div>';lastG=t.g}
    sb+='<a class="nav-link" href="#t'+t.idx+'" data-t="'+t.idx+'">'+t.e+' '+esc(t.n)+'</a>';
    tn+='<a href="#t'+t.idx+'" data-t="'+t.idx+'">'+esc(t.n)+'</a>';
  });
  document.getElementById('sbTopics').innerHTML=sb;
  document.getElementById('topnav').innerHTML=tn;
}
buildNav();
function goTopic(idx){
  if(group||query){group='';query='';document.getElementById('grp').value='';document.getElementById('q').value='';opened[idx]=true;render();}
  var d=document.getElementById('t'+idx);if(d){d.open=true;opened[idx]=true;d.scrollIntoView({behavior:'smooth',block:'start'})}
}
document.addEventListener('click',function(e){
  var a=e.target.closest('.nav-link[data-t],.topnav a[data-t]');
  if(!a)return;e.preventDefault();goTopic(a.dataset.t);
});
var navLinks=function(){return document.querySelectorAll('.nav-link,.topnav a')};
function setActive(href){navLinks().forEach(function(l){l.classList.toggle('active',l.getAttribute('href')===href)});
  var act=document.querySelector('.topnav a.active');if(act&&act.scrollIntoView&&document.querySelector('.topnav').offsetParent!==null)act.scrollIntoView({inline:'center',block:'nearest'})}
var io=null;
function observe(){
  if(!('IntersectionObserver' in window))return;
  if(io)io.disconnect();
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)setActive('#'+e.target.id)})},{rootMargin:'-20% 0px -70% 0px'});
  document.querySelectorAll('#how,#lab-h,details.tp').forEach(function(x){io.observe(x)});
}
var pbar=document.getElementById('pbar'),doc=document.documentElement;
addEventListener('scroll',function(){pbar.style.width=(doc.scrollTop/Math.max(1,doc.scrollHeight-doc.clientHeight)*100)+'%'});
document.getElementById('list').addEventListener('toggle',function(e){var d=e.target;if(d.id&&d.id.charAt(0)==='t')opened[d.id.slice(1)]=d.open},true);

var list=document.getElementById('list');
list.addEventListener('click',function(e){
  var b=e.target.closest('button[data-a]');if(!b)return;
  var card=b.closest('.w'),id=card.dataset.id,a=b.dataset.a;
  if(a==='own'){card.classList.toggle('open');if(card.classList.contains('open'))card.querySelector('textarea').focus();return}
  if(a==='done'){if(store.done[id])delete store.done[id];else store.done[id]=1;save();
    card.classList.toggle('done',!!store.done[id]);b.textContent=store.done[id]?'✔ Đã thuộc':'Đã thuộc';
    var det=card.closest('details'),t=topics[det.id.slice(1)],d=0;t.sub.forEach(function(s){if(s.items)s.items.forEach(function(it){if(store.done[it.id])d++})});
    det.querySelector('.tc').textContent=d+'/'+t.count+' đã thuộc';
    document.getElementById('prog').innerHTML='Đã thuộc <b>'+Object.keys(store.done).length+'</b>/'+total;return}
  if(a==='show'){card.querySelector('.vi').classList.add('show');return}
  if(a==='check'||a==='reveal'){
    var ans=JSON.parse(card.dataset.ans),ins=card.querySelectorAll('.ex input');
    ins.forEach(function(inp,i){
      var want=(ans[i]||'').toLowerCase().replace(/[’']/g,"'"),got=inp.value.trim().toLowerCase().replace(/[’']/g,"'");
      if(a==='reveal'){inp.value=ans[i];inp.className='ok';return}
      var stem=want.slice(0,Math.max(3,want.length-3));
      inp.className=(got===want||(got.length>=3&&want.indexOf(got)===0&&got.length>=want.length-3)||got===stem)?'ok':'no';
    });
    if(a==='reveal'){var w=card.querySelector('.wd');w.textContent=DATA_W(id);w.classList.add('say')}
    var gm=card.querySelector('.gm.hid');if(gm&&(a==='reveal'||card.querySelectorAll('.ex input.ok').length===ins.length))gm.classList.remove('hid');
  }
});
function DATA_W(id){var p=id.split('.').map(Number);return topics[p[0]].sub[p[1]].items[p[2]].w}
list.addEventListener('input',function(e){
  if(e.target.tagName==='TEXTAREA'){var id=e.target.closest('.w').dataset.id;if(e.target.value.trim())store.own[id]=e.target.value;else delete store.own[id];save()}
});

document.getElementById('q').addEventListener('input',function(e){query=e.target.value.trim();render()});
var gs=document.getElementById('grp'),groups=[];
topics.forEach(function(t){if(groups.indexOf(t.g)<0)groups.push(t.g)});
gs.innerHTML='<option value="">Tất cả nhóm</option>'+groups.map(function(g){return '<option>'+esc(g)+'</option>'}).join('');
gs.addEventListener('change',function(){group=gs.value;render()});
document.querySelectorAll('.seg button').forEach(function(b){b.addEventListener('click',function(){
  document.querySelectorAll('.seg button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');mode=b.dataset.m;render()})});
document.getElementById('openAll').onclick=function(){document.querySelectorAll('details.tp').forEach(function(d){d.open=true})};
document.getElementById('closeAll').onclick=function(){document.querySelectorAll('details.tp').forEach(function(d){d.open=false})};

/* ---- Thử thách nói ---- */
var lt=document.getElementById('labTopic');
lt.innerHTML='<option value="all">Tất cả chủ đề</option>'+topics.map(function(t,i){return '<option value="'+i+'">'+t.e+' '+esc(t.n)+'</option>'}).join('');
var cur=null,go=document.getElementById('labGo'),sh=document.getElementById('labShow'),out=document.getElementById('labOut');
function pick(){
  var pool=[];
  topics.forEach(function(t,i){if(lt.value!=='all'&&String(i)!==lt.value)return;t.sub.forEach(function(s){if(s.items)pool=pool.concat(s.items)})});
  return pool[Math.floor(Math.random()*pool.length)];
}
go.onclick=function(){
  cur=pick();sh.disabled=false;
  out.innerHTML='<div class="big">'+esc(cur.w)+'</div><div class="m">'+esc(cur.vi)+'</div>'+
  '<ol><li><b>Nói 1:</b> dùng từ này để nói về <b>chính bạn</b> (bắt đầu bằng <em>I…</em>).</li><li><b>Nói 2:</b> thêm lý do bằng <em>because</em>, hoặc nối ý bằng <em>but / so</em>.</li><li><b>Nói 3:</b> hỏi lại bạn trò chuyện: <em>What about you?</em></li></ol>';
};
sh.onclick=function(){
  if(!cur)return;
  out.insertAdjacentHTML('beforeend','<div class="model">Câu mẫu: <span class="say">'+hl(cur.ex,cur.sent?[]:findSpans(cur.w,cur.ex).spans)+'</span></div>');sh.disabled=true;
};
render();observe();
var _r=render;render=function(){_r();observe()};
})();
