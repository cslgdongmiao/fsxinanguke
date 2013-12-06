// JavaScript Document
 function setTab(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con_"+name+"_"+i);
	  menu.className=i==cursel?"style_1":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
   function setTab1(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con1_"+name+"_"+i);
	  menu.className=i==cursel?"style_2":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }

   function setTab2(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con2_"+name+"_"+i);
	  menu.className=i==cursel?"style_2":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
    function setTab3(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con3_"+name+"_"+i);
	  menu.className=i==cursel?"style_3":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  } 
    function setTab4(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con4_"+name+"_"+i);
	  menu.className=i==cursel?"style_4":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }     
    function setTab5(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con5_"+name+"_"+i);
	  menu.className=i==cursel?"style_5":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }   
  
