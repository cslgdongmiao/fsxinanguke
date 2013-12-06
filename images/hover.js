// JavaScript Document

function set(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

function set2(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con1_"+name+"_"+i);
menu.className=i==cursel?"bg_show":"";
con.style.display=i==cursel?"block":"none";
}
}

function set3(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con4_"+name+"_"+i);
menu.className=i==cursel?"hover3":"";
con.style.display=i==cursel?"block":"none";
}
}

function set5(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con3_"+name+"_"+i);
menu.className=i==cursel?"hover5":"";
con.style.display=i==cursel?"block":"none";
}
}

function set4(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con2_"+name+"_"+i);
menu.className=i==cursel?"hover4":"";
con.style.display=i==cursel?"block":"none";
}
}

function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

function setList(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+"_title"+i);
var con=document.getElementById(name+"_list"+i);
menu.className=i==cursel?"bg_show":"";
con.style.display=i==cursel?"block":"none";
}
}

function setList2(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+"_title"+i);
var con=document.getElementById(name+"_list"+i);
menu.className=i==cursel?"bg_show":"";
con.style.display=i==cursel?"block":"none";
}
}

function setList3(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+"_title"+i);
var con=document.getElementById(name+"_list"+i);
menu.className=i==cursel?"bg_show":"";
con.style.display=i==cursel?"block":"none";
}
}

function setList4(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+"_title"+i);
var con=document.getElementById(name+"_list"+i);
menu.className=i==cursel?"bg_show":"";
con.style.display=i==cursel?"block":"none";
}
}

function setTab2(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("wd_"+name+"_"+i);
menu.className=i==cursel?"hover3":"";
con.style.display=i==cursel?"block":"none";
}
}