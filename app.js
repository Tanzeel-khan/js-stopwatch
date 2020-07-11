var min=0;
var sec=0;
var mili=0;
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var milisec=document.getElementById("mili");

var inter;
function flow(){
    mili++;
    milisec.innerHTML=mili;
if(mili >= 100){
    sec++;
    seconds.innerHTML=sec;
    mili=0;
}
else if(sec >=60){
min++;
minutes.innerHTML=min;
sec=0;
}
}
var btm=document.getElementById("btstart");
var ptm=document.getElementById("ptstart");
var rtm=document.getElementById("rtstart");

function run(){
inter=setInterval(flow,10);
btm.disabled=true;
ptm.disabled=false;
rtm.disabled=false;
}
function pause(){
    clearInterval(inter);
ptm.disabled=true;
    btm.disabled=false;
    rtm.disabled=false;
}
function reset(){
    min=0;
    sec=0;
    mili=0;
    btm.disabled=false;
ptm.disabled=false;
rtm.disabled=true;
    minutes.innerHTML=min;
    seconds.innerHTML=sec;
    milisec.innerHTML=mili;
    clearInterval(inter);
}