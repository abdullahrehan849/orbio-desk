(function(){
var d=document,$=function(i){return d.getElementById(i)};
/* menu */
var bg=d.querySelector('.burger'),mn=$('menu');
if(bg&&mn){bg.addEventListener('click',function(){mn.classList.toggle('open');bg.setAttribute('aria-expanded',mn.classList.contains('open'))});mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');bg.setAttribute('aria-expanded','false')})})}
/* sticky CTA: only after hero, hidden at contact form and footer */
var hero=d.querySelector('.hero'),ct=$('contact'),ft=d.querySelector('footer');
if('IntersectionObserver' in window&&hero){var st={h:false,c:false,f:false};
var up=function(){d.body.classList.toggle('sk',st.h&&!st.c&&!st.f)};
var mk=function(el,key,inv){if(!el)return;new IntersectionObserver(function(e){st[key]=inv?!e[0].isIntersecting:e[0].isIntersecting;up()},{threshold:0}).observe(el)};
mk(hero,'h',true);mk(ct,'c',false);mk(ft,'f',false)}
/* exit intent (desktop only, once per session) */
var xo=$('xo');
if(xo&&window.matchMedia('(min-width:901px) and (hover:hover)').matches){
var seen=false;try{seen=sessionStorage.getItem('xo')==='1'}catch(e){}
var open=function(){if(seen)return;seen=true;try{sessionStorage.setItem('xo','1')}catch(e){}xo.classList.add('show')};
var close=function(){xo.classList.remove('show')};
setTimeout(function(){d.addEventListener('mouseout',function(e){if(!e.relatedTarget&&e.clientY<=0&&!d.body.classList.contains('xs'))open()})},6000);
xo.querySelector('.x').addEventListener('click',close);$('xoc').addEventListener('click',close);
xo.addEventListener('click',function(e){if(e.target===xo)close()});d.addEventListener('keydown',function(e){if(e.key==='Escape')close()})}
/* enquiry form (Web3Forms, same page) */
var f=$('enq'),b=$('enqbtn'),m=$('enqmsg'),busy=false;
if(f){
var show=function(t,c){m.className='fmsg '+c;m.textContent=t;m.hidden=false;m.scrollIntoView({block:'nearest',behavior:'smooth'})};
f.addEventListener('submit',function(e){
e.preventDefault();if(busy)return;
if(!f.checkValidity()){f.reportValidity();return}
busy=true;b.disabled=true;var label=b.textContent;b.textContent='Sending…';m.hidden=true;
var o={};new FormData(f).forEach(function(v,k){o[k]=v});
var ctl=new AbortController(),t=setTimeout(function(){ctl.abort()},20000);
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(o),signal:ctl.signal})
.then(function(r){return r.json().then(function(x){return{ok:r.ok&&x.success}})})
.then(function(x){if(x.ok){f.reset();show('Thank you. Your tailored quote is on its way. Check your email.','ok')}else{show('Sorry, we could not send your request. Please try again, or email info@orbioltd.co.uk.','err')}})
.catch(function(){show('Sorry, we could not send your request. Please check your connection and try again, or email info@orbioltd.co.uk.','err')})
.then(function(){clearTimeout(t);busy=false;b.disabled=false;b.textContent=label});
})}
/* legal pop-ups: open on the same page, fall back to the full page without JavaScript */
var lgm=$('lgm'),lgc=$('lgc'),lastF=null;
if(lgm&&lgc){
var lgClose=function(){lgm.hidden=true;lgc.innerHTML='';d.body.classList.remove('lgo');if(lastF&&lastF.focus)lastF.focus()};
d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-lg]');if(!a)return;var t=$('lg-'+a.getAttribute('data-lg'));if(!t)return;
e.preventDefault();lastF=a;var fl=$('lgfull');if(fl)fl.href=a.getAttribute('href');lgc.innerHTML=t.innerHTML;lgm.hidden=false;d.body.classList.add('lgo');lgm.querySelector('.lgb').scrollTop=0;lgm.querySelector('.lgx').focus()});
lgm.querySelector('.lgx').addEventListener('click',lgClose);$('lgdone').addEventListener('click',lgClose);
lgm.addEventListener('click',function(e){if(e.target===lgm)lgClose()});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lgm.hidden)lgClose()})}
/* audio players: each player works on its own; starting one pauses the others */
var au=d.querySelectorAll('.ac audio');
au.forEach(function(a){a.addEventListener('play',function(){au.forEach(function(o){if(o!==a)o.pause()})})});
/* business card pop-up */
var bcm=$('bcm'),bcf=$('bcf'),bcLast=null;
if(bcm&&bcf){
var bcOpen=function(el){bcLast=el;if(!bcf.getAttribute('src')&&!bcf.getAttribute('srcdoc')){if(window.__cardHTML)bcf.srcdoc=window.__cardHTML;else bcf.src=bcf.getAttribute('data-src')}bcm.hidden=false;d.body.classList.add('bco');bcm.querySelector('.bcx').focus()};
var bcClose=function(){bcm.hidden=true;d.body.classList.remove('bco');if(bcLast&&bcLast.focus)bcLast.focus()};
d.querySelectorAll('[data-bc]').forEach(function(b){b.addEventListener('click',function(){bcOpen(b)})});
bcm.querySelector('.bcx').addEventListener('click',bcClose);
bcm.addEventListener('click',function(e){if(e.target===bcm)bcClose()});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!bcm.hidden)bcClose()});
var fs=$('bcfull');if(fs)fs.addEventListener('click',function(e){if(window.__cardHTML){e.preventDefault();window.open(URL.createObjectURL(new Blob([window.__cardHTML],{type:'text/html'})),'_blank')}})}
window.addEventListener('message',function(e){var f=$('bcf');if(!f||e.source!==f.contentWindow)return;var u=e.data&&e.data.orbioOpen;
if(typeof u==='string'&&/^https:\/\/(wa\.me|www\.orbioltd\.co\.uk)\//.test(u)){var w=window.open(u,'_blank');if(w){try{w.opener=null}catch(_){}}else{window.location.href=u}}});
})();
