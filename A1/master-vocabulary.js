/* Logic trang Master-Vocabulary.html: hiển thị thẻ từ, 3 chế độ học (Học / Điền từ / Che nghĩa),
   lưu tiến độ, thanh điều hướng và Thử thách nói.
   Dữ liệu nằm ở vocab-data/master-vocabulary.js (window.A1_MASTER_VOCAB). */
var DATA = window.A1_MASTER_VOCAB.topics;
var NOTES = window.A1_MASTER_VOCAB.notes;
(function(){
var KEY='a1-master-vocab-v1';
var store={};try{store=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
store.done=store.done||{};store.own=store.own||{};
function save(){try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}

/* ---- chuẩn hoá dữ liệu ---- */
var byId={},total=0,wordTotal=0,sentTotal=0;
var topics=DATA.map(function(t,ti){
  t.idx=ti;t.count=0;
  t.blocks.forEach(function(b){
    if(b.k==='plain')return;
    b.items.forEach(function(it){
      var n=NOTES[it.id]||{};
      it.g=n.g||'';
      if(b.k==='p'){it.kind='sent';it.ex=it.w}
      else if(b.k==='v'){it.ex=n.e||'';it.kind=it.ex?'word':'sent';if(!it.ex)it.ex=it.w}
      else{it.kind='word'}
      byId[it.id]=it;t.count++;total++;
      if(it.kind==='word')wordTotal++;else sentTotal++;
    });
  });
  return t;
});
document.getElementById('stats').innerHTML='<div class="stat"><b>'+topics.length+'</b>chủ đề</div><div class="stat"><b>'+wordTotal+'</b>từ / cụm từ có câu ví dụ</div><div class="stat"><b>'+sentTotal+'</b>mẫu câu giao tiếp</div><div class="stat"><b>'+total+'</b>ghi chú ngữ pháp</div>';

/* ---- tìm phần từ trong câu ví dụ ---- */
var STOP={someone:1,'someone’s':1,a:1,an:1,the:1,be:1,to:1,'(with)':1};
function alts(w){return w.replace(/\(.*?\)/g,'').replace(/\s*\+.*$/,'').split(/\s*(?:\/|–)\s*/).map(function(x){return x.replace(/[?.!…]+$/,'').trim()}).filter(Boolean)}
function findSpans(w,ex){
  var res=[],a=alts(w),i,m;
  for(i=0;i<a.length;i++){
    var core=a[i].replace(/^(a|an|the|be)\s+/i,'');
    if(!core)continue;
    m=new RegExp('(^|[^\\w])('+rx(core)+'\\w*)','i').exec(ex);
    if(m){var st=m.index+m[1].length;res.push([st,st+m[2].length]);}
  }
  if(res.length)return {spans:res,exact:true};
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
  sp.forEach(function(s){var l=out[out.length-1];if(l&&s[0]<=l[1])l[1]=Math.max(l[1],s[1]);else out.push(s.slice())});
  return out;
}
function hl(ex,spans){
  var sp=mergeSpans(spans.slice()),o='',p=0;
  sp.forEach(function(s){o+=esc(ex.slice(p,s[0]))+'<mark>'+esc(ex.slice(s[0],s[1]))+'</mark>';p=s[1]});
  return o+esc(ex.slice(p));
}
function cloze(it){
  var sp=mergeSpans(findSpans(it.w,it.ex).spans.slice());
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
  var t=(text||el.textContent).replace(/\s+/g,' ').replace(/\s*\/\s*/g,'. ').replace(/___/g,'blank').replace(/\([^)]*\)/g,'').trim();
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

/* ---- render thẻ ---- */
var mode='learn',query='',group='',opened={};
function gmHtml(it,hidden){return it.g?'<div class="gm'+(hidden?' hid':'')+'"><b>NGỮ PHÁP</b>'+esc(it.g)+'</div>':''}
function tpl(it){
  var own=store.own[it.id]||'',done=!!store.done[it.id];
  var cls='w'+(it.kind==='sent'?' sent':'')+(done?' done':'')+(own?' open':'');
  var viCls=mode==='recall'?'vi h':'vi';
  var ownBox='<div class="own"><textarea placeholder="Viết 1 câu về chính bạn…" aria-label="Câu của tôi">'+esc(own)+'</textarea><div class="hint">Gợi ý: đổi chủ ngữ, thêm because / but / so.</div></div>';
  var btnOwn='<button class="btn sm" data-a="own">✍️ Câu của tôi</button>';
  var btnDone='<button class="btn sm alt" data-a="done">'+(done?'✔ Đã thuộc':'Đã thuộc')+'</button>';
  var viHtml='<span class="'+viCls+'">'+esc(it.viLabel&&it.viLabel!=='Nghĩa'?it.viLabel+': '+it.vi:it.vi)+'</span>';
  var hint=it.hint?'<div class="hint">💡 '+esc(it.hint)+'</div>':'';
  if(it.kind==='sent'){
    var hid=mode==='cloze';
    var body='<div class="top"><span class="wd sentw'+(hid?'':' say')+'" data-en="'+esc(it.w)+'">'+(hid?'🇻🇳 '+esc(it.vi):esc(it.w))+'</span></div>'+
      (hid?'<div class="ex" style="display:none"></div>':'<div class="'+viCls+'">'+esc(it.vi)+'</div>')+hint+gmHtml(it,hid);
    var act=(hid?'<button class="btn sm" data-a="speak">👀 Xem câu tiếng Anh</button>':(mode==='recall'?'<button class="btn sm" data-a="show">Hiện nghĩa</button>':''))+btnOwn+btnDone;
    return '<div class="'+cls+'" data-id="'+it.id+'">'+body+ownBox+'<div class="act">'+act+'</div></div>';
  }
  var f=findSpans(it.w,it.ex),cz=mode==='cloze'?cloze(it):null;
  var exHtml=mode==='cloze'?(cz?cz.html:esc(it.ex)):'<span class="say">'+hl(it.ex,f.spans)+'</span>';
  var wordHtml=cz?'<span class="wd">?</span>':'<span class="wd say">'+esc(it.w)+'</span>';
  var act2=btnOwn+btnDone;
  if(cz)act2='<button class="btn sm" data-a="check">Kiểm tra</button><button class="btn sm" data-a="reveal">Xem đáp án</button>'+act2;
  if(mode==='recall')act2='<button class="btn sm" data-a="show">Hiện nghĩa</button>'+act2;
  var hint2=mode==='cloze'&&!cz?'<div class="hint">Đoán từ theo nghĩa: <span class="say">'+esc(it.w)+'</span></div>':'';
  return '<div class="'+cls+'" data-id="'+it.id+'"'+(cz?' data-ans="'+esc(JSON.stringify(cz.ans))+'"':'')+'>'+
    '<div class="top">'+wordHtml+viHtml+'</div>'+
    '<div class="ex">'+exHtml+'</div>'+hint+gmHtml(it,!!cz)+hint2+ownBox+'<div class="act">'+act2+'</div></div>';
}
function matches(it){
  if(!query)return true;
  return (it.w+' '+it.vi+' '+it.ex+' '+it.g).toLowerCase().indexOf(query.toLowerCase())>-1;
}
var BLK={v:'Từ vựng & cụm từ',t:'Cấu trúc & ví dụ',p:'Mẫu câu giao tiếp'};
function doneIn(t){var d=0;t.blocks.forEach(function(b){if(b.items)b.items.forEach(function(it){if(store.done[it.id])d++})});return d}
function render(){
  var out='',q=query.toLowerCase();
  document.body.classList.toggle('hide-vi',mode==='recall');
  topics.forEach(function(t){
    if(group&&t.g!==group)return;
    var topicHit=q&&(t.n+' '+t.f).toLowerCase().indexOf(q)>-1;
    var body='';
    t.blocks.forEach(function(b){
      if(b.k==='plain'){
        if(q&&!topicHit)return;
        body+=(b.sub?'<div class="sub">'+esc(b.sub)+'</div>':'<div class="sub">Bảng tham khảo</div>')+'<div class="pt"><table class="tbl"><thead><tr>'+b.head.map(function(h){return '<th>'+esc(h)+'</th>'}).join('')+'</tr></thead><tbody>'+b.rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+esc(c)+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>';
        return;
      }
      var items=b.items.filter(function(it){return topicHit||matches(it)});
      if(!items.length)return;
      body+='<div class="sub">'+esc(b.sub?b.sub+' · '+BLK[b.k]:BLK[b.k])+'</div><div class="cards">'+items.map(tpl).join('')+'</div>';
    });
    if(!body)return;
    if(t.info)body+='<div class="tip">💡 '+esc(t.info)+'</div>';
    body+='<div class="src">↗ <a href="Master-Cheat-Sheet.html#'+t.sid+'">Mở chủ đề trong Master Cheat Sheet</a> · <a href="'+encodeURI(t.f)+'">Mở bài “'+esc(t.n)+'”</a></div>';
    out+='<details class="tp" id="t'+t.idx+'"'+((q||opened[t.idx])?' open':'')+'><summary><span class="ti">'+t.e+'</span><div><div class="tn">'+esc(t.n)+'</div><div class="ts">'+esc(t.f)+'</div></div><span class="tc">'+doneIn(t)+'/'+t.count+' đã thuộc</span></summary><div class="tb">'+body+'</div></details>';
  });
  document.getElementById('list').innerHTML=out||'<div class="empty">Không tìm thấy kết quả.</div>';
  document.getElementById('prog').innerHTML='Đã thuộc <b>'+Object.keys(store.done).length+'</b>/'+total;
  observe();
}
document.getElementById('list').addEventListener('toggle',function(e){var d=e.target;if(d.id&&d.id.charAt(0)==='t')opened[d.id.slice(1)]=d.open},true);

var list=document.getElementById('list');
list.addEventListener('click',function(e){
  var b=e.target.closest('button[data-a]');if(!b)return;
  var card=b.closest('.w'),id=card.dataset.id,a=b.dataset.a,it=byId[id];
  if(a==='own'){card.classList.toggle('open');if(card.classList.contains('open'))card.querySelector('textarea').focus();return}
  if(a==='done'){
    if(store.done[id])delete store.done[id];else store.done[id]=1;save();
    card.classList.toggle('done',!!store.done[id]);b.textContent=store.done[id]?'✔ Đã thuộc':'Đã thuộc';
    var det=card.closest('details'),t=topics[det.id.slice(1)];
    det.querySelector('.tc').textContent=doneIn(t)+'/'+t.count+' đã thuộc';
    document.getElementById('prog').innerHTML='Đã thuộc <b>'+Object.keys(store.done).length+'</b>/'+total;return}
  if(a==='show'){var v=card.querySelector('.vi');if(v)v.classList.add('show');return}
  if(a==='speak'){
    var w=card.querySelector('.sentw');w.textContent=it.w;w.classList.add('say');
    var gm=card.querySelector('.gm.hid');if(gm)gm.classList.remove('hid');
    b.remove();return}
  if(a==='check'||a==='reveal'){
    var ans=JSON.parse(card.dataset.ans),ins=card.querySelectorAll('.ex input');
    ins.forEach(function(inp,i){
      var want=(ans[i]||'').toLowerCase().replace(/[’']/g,"'"),got=inp.value.trim().toLowerCase().replace(/[’']/g,"'");
      if(a==='reveal'){inp.value=ans[i];inp.className='ok';return}
      var stem=want.slice(0,Math.max(3,want.length-3));
      inp.className=(got===want||(got.length>=3&&want.indexOf(got)===0&&got.length>=want.length-3)||got===stem)?'ok':'no';
    });
    if(a==='reveal'){var w2=card.querySelector('.wd');w2.textContent=it.w;w2.classList.add('say')}
    var gm2=card.querySelector('.gm.hid');
    if(gm2&&(a==='reveal'||card.querySelectorAll('.ex input.ok').length===ins.length))gm2.classList.remove('hid');
  }
});
list.addEventListener('input',function(e){
  if(e.target.tagName==='TEXTAREA'){var id=e.target.closest('.w').dataset.id;if(e.target.value.trim())store.own[id]=e.target.value;else delete store.own[id];save()}
});

/* ---- điều hướng ---- */
function buildNav(){
  var sb='',tn='<a href="#how">Cách dùng</a><a href="#lab-h">Thử thách</a>',lastG='';
  topics.forEach(function(t){
    if(t.g!==lastG){sb+='<div class="nav-label">'+esc(t.g.replace(/^📌\s*/,''))+'</div>';lastG=t.g}
    sb+='<a class="nav-link" href="#t'+t.idx+'" data-t="'+t.idx+'">'+t.e+' '+esc(t.n)+'</a>';
    tn+='<a href="#t'+t.idx+'" data-t="'+t.idx+'">'+esc(t.n)+'</a>';
  });
  document.getElementById('sbTopics').innerHTML=sb;
  document.getElementById('topnav').innerHTML=tn;
}
function goTopic(idx){
  if(group||query){group='';query='';document.getElementById('grp').value='';document.getElementById('q').value='';opened[idx]=true;render();}
  var d=document.getElementById('t'+idx);if(d){d.open=true;opened[idx]=true;d.scrollIntoView({behavior:'smooth',block:'start'})}
}
document.addEventListener('click',function(e){
  var a=e.target.closest('.nav-link[data-t],.topnav a[data-t]');
  if(!a)return;e.preventDefault();goTopic(a.dataset.t);
});
function setActive(href){document.querySelectorAll('.nav-link,.topnav a').forEach(function(l){l.classList.toggle('active',l.getAttribute('href')===href)});
  var act=document.querySelector('.topnav a.active'),tn=document.querySelector('.topnav');
  if(act&&tn&&tn.offsetParent!==null&&act.scrollIntoView)act.scrollIntoView({inline:'center',block:'nearest'})}
var io=null;
function observe(){
  if(!('IntersectionObserver' in window))return;
  if(io)io.disconnect();
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)setActive('#'+e.target.id)})},{rootMargin:'-20% 0px -70% 0px'});
  document.querySelectorAll('#how,#lab-h,details.tp').forEach(function(x){io.observe(x)});
}
var pbar=document.getElementById('pbar'),doc=document.documentElement;
addEventListener('scroll',function(){pbar.style.width=(doc.scrollTop/Math.max(1,doc.scrollHeight-doc.clientHeight)*100)+'%'});

/* ---- bộ lọc ---- */
document.getElementById('q').addEventListener('input',function(e){query=e.target.value.trim();render()});
var gs=document.getElementById('grp'),groups=[];
topics.forEach(function(t){if(groups.indexOf(t.g)<0)groups.push(t.g)});
gs.innerHTML='<option value="">Tất cả nhóm</option>'+groups.map(function(g){return '<option value="'+esc(g)+'">'+esc(g.replace(/^📌\s*/,''))+'</option>'}).join('');
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
  topics.forEach(function(t,i){if(lt.value!=='all'&&String(i)!==lt.value)return;t.blocks.forEach(function(b){if(b.items)pool=pool.concat(b.items)})});
  return pool[Math.floor(Math.random()*pool.length)];
}
go.onclick=function(){
  cur=pick();sh.disabled=false;
  if(cur.kind==='sent'){
    out.innerHTML='<div class="m">Hãy nói câu này bằng tiếng Anh:</div><div class="big">'+esc(cur.vi)+'</div>'+
    '<ol><li><b>Nói 1:</b> nói thành câu hoàn chỉnh, đủ chủ ngữ và động từ.</li><li><b>Nói 2:</b> đổi một chi tiết cho đúng với bạn (tên, nơi, thời gian).</li><li><b>Nói 3:</b> hỏi lại bạn trò chuyện: <em>What about you?</em></li></ol>';
  }else{
    out.innerHTML='<div class="big">'+esc(cur.w)+'</div><div class="m">'+esc(cur.vi)+'</div>'+
    '<ol><li><b>Nói 1:</b> dùng từ/cụm này để nói về <b>chính bạn</b>.</li><li><b>Nói 2:</b> thêm lý do bằng <em>because</em>, hoặc nối ý bằng <em>but / so</em>.</li><li><b>Nói 3:</b> hỏi lại bạn trò chuyện: <em>What about you?</em></li></ol>';
  }
};
sh.onclick=function(){
  if(!cur)return;
  var m=cur.kind==='sent'?esc(cur.w):hl(cur.ex,findSpans(cur.w,cur.ex).spans);
  out.insertAdjacentHTML('beforeend','<div class="model">Câu mẫu: <span class="say">'+m+'</span>'+(cur.g?'<div class="gm" style="margin-top:8px;font-weight:400"><b>NGỮ PHÁP</b>'+esc(cur.g)+'</div>':'')+'</div>');sh.disabled=true;
};
buildNav();
render();
})();
