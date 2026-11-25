document.getElementById('wal').href='https://wa.me/447843862112';document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('menu').classList.remove('open')})})
(function(){
var d=new Date(),D=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],M=['January','February','March','April','May','June','July','August','September','October','November','December'];
var seed=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
function r(n){seed=(seed*1103515245+12345)%2147483648;return seed%n}
var calls=110+r(60),book=Math.round(calls*(0.62+r(9)/100)),disp=book-r(3),ns=r(4),avg=6+r(5),ring=96+r(4),miss=r(8)===0?1:0;
var late=1+r(30),to=1+r(30);if(to===late)to=late%30+1;
document.getElementById('rep').innerHTML='<h3>Daily shift report: '+D[d.getDay()]+', '+d.getDate()+' '+M[d.getMonth()]+' '+d.getFullYear()+'</h3>'
+'<div class="g"><div>Calls answered: <b>'+calls+'</b></div><div>Bookings created: <b>'+book+'</b></div></div>'
+'<div class="g"><div>Dispatched: <b>'+disp+'</b></div><div>No-shows recovered: <b>'+ns+'</b></div></div>'
+'<div class="g"><div>Average answer time: <b>'+avg+' seconds</b></div><div>Answered within 3 rings: <b>'+ring+'%</b></div></div>'
+'<div class="g"><div>Missed calls: <b>'+miss+'</b></div></div>'
+'<div class="w">Top issue: <b>Driver '+late+' late, reallocated to driver '+to+'</b></div>';
})();
(function(){
var f=document.getElementById('enq'),b=document.getElementById('enqbtn'),m=document.getElementById('enqmsg'),busy=false;
if(!f)return;
function show(t,c){m.className='fmsg '+c;m.textContent=t;m.hidden=false;m.scrollIntoView({block:'nearest',behavior:'smooth'})}
f.addEventListener('submit',function(e){
e.preventDefault();
if(busy)return;
if(!f.checkValidity()){f.reportValidity();return}
busy=true;b.disabled=true;var label=b.textContent;b.textContent='Sending…';m.hidden=true;
var o={};new FormData(f).forEach(function(v,k){o[k]=v});
var ctl=new AbortController(),t=setTimeout(function(){ctl.abort()},20000);
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(o),signal:ctl.signal})
.then(function(r){return r.json().then(function(d){return{ok:r.ok&&d.success,d:d}})})
.then(function(x){
if(x.ok){f.reset();show('Thank you. Your proposal request has been sent to the Orbio Desk team. We will be in touch shortly.','ok')}
else{show('Sorry, we could not send your request. Please try again, or email info@orbioltd.co.uk.','err')}
})
.catch(function(){show('Sorry, we could not send your request. Please check your connection and try again, or email info@orbioltd.co.uk.','err')})
.then(function(){clearTimeout(t);busy=false;b.disabled=false;b.textContent=label});
});
})();
