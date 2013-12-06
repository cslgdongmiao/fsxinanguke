// JavaScript Document
 //传值
  //var D_callno="9002600630" ;  //号码
  var D_url;
  function show(){
	  D_url = getParameter('D_url');
	  document.getElementById("uid").value=D_callno; //传值-号码
	  document.getElementById("surl").value=D_url; //传值-网址
	  if(D_callno.length==10){
		  D_callno = D_callno.substr(3, 7);
	  }
	  document.getElementById("call_no").value=D_callno;
	  newDatexx();
	  var title=window.parent.document.title;
	  document.getElementById("title").value=encodeURI(title);
	  var ref="";
	  if(document.referrer.length>0){
		  ref=document.referrer
	  }
	  try{
		  if(ref.length==0&&opener.location.href.length>0){
			  ref=opener.location.href
			  }
		  }catch(e){
			  ref=window.location.href
			  }
		  ref=encodeURI(ref);
		  document.getElementById("surl").value=ref;
	}
  
  
  
  
function getParameter(param)  
{   
    var query = window.location.search;  
    var iLen = param.length;  
    var iStart = query.indexOf(param);  
    if (iStart == -1)  
       return "";  
    iStart += iLen + 1;  
    var iEnd = query.indexOf("&", iStart);  
    if (iEnd == -1)  
       return query.substring(iStart);  
    return query.substring(iStart, iEnd);  
}  

//号码输入检查
function dxyy_JFcheckForm(){
       show();
	dh_cb_num=document.dxyy_cb.dxyy_cb_num.value;
	if (dh_cb_num==""){alert("请输入【回呼号码】");return false;}
	var partten = /^(1[3,4,5,8]\d{9}|01[3,4,5,8]\d{9}|010[1-9]{3,4}\d{4}|02[0-9][1-9]{3,4}\d{4}|0[1-9]{6,7}\d{4})$/;
	if(partten.test(dh_cb_num)){
		document.getElementById("dxyy_cb_sub").disabled=true;
		setTimeout("document.all.dxyy_cb_sub.disabled=false;",20000);//20秒后恢复
		
		//更新为已拨打记录
		//document.dxyy_cb.action="http://login.laidianduo.com/BirthCode/images/called_ajax.jsp?D_callno="+D_callno+"&phone="+dh_cb_num+"";
		document.dxyy_cb.action="http://tel.laidianduo.com/ldd_uncall.jsp?comp=1&uncall=1&D_callno="+D_callno+"&phone="+dh_cb_num+"";
	    document.dxyy_cb.submit();
	    
	    //拨打电话
	    //document.dxyy_cb.action="http://localhost/qidu/CallBack.jsp?uid="+D_callno+"&cb_num="+cb_num;
	    document.dxyy_cb.action="http://tel.laidianduo.com/ldd_call.jsp?comp=1&uid="+D_callno+"&cb_num="+dh_cb_num;
	    document.dxyy_cb.submit();
		document.all.dxyy_cb_num.value='';
		if(document.all.dxyy_cb_num.value="")
		{document.all.dxyy_cb_num.value=="请输入您的电话号码!";}
	}
	else{
		alert("请输入正确的【回呼号码】"+"\n"+ "座机加上区号，手机直接输入。");
		return;
	}
}

//号码输入正确与否提醒
function dxyy_JFisTel(){
	dh_cb_num=g("dxyy_cb_num").value;
	var partten = /^(1[3,4,5,8]\d{9}|01[3,4,5,8]\d{9}|010[1-9]{1,2}\d{6}|02[0-9][1-9]{1,2}\d{6}|0[1-9]{2}[0-9][1-9]{1,2}\d{6})$/;
	if(partten.test(dh_cb_num)){		
		//输入正确号码未拨打处理
			document.dxyy_cb.action="http://tel.laidianduo.com/ldd_uncall.jsp?comp=1&uncall=0&D_callno="+D_callno+"&phone="+dh_cb_num+"";
			document.dxyy_cb.submit();
	}
}


//输入框清除文本
function dxyy_inputClear(){
	if(document.all.dxyy_cb_num.value=="请输入您的电话号码!"){
		document.all.dxyy_cb_num.value='';
	}
}


/*----------短信js代码----------------------------start--------------------------------*/

//号码输入提示
function JFisTelxx(){
	var dx_cb_num=document.ldd_cb_xx.cb_num_xx.value;
	var RegExp = /^0?1[3,4,5,8]\d{9}$/;  //手机正则
	if(RegExp.test(dx_cb_num)){
		//将输入正确的号码传给参数
		//loadXMLDoc1(cb_num);  //插入访客输入但5min内未拨打的记录
		//alert("未拨打");
	}
}

function checkSMS(){
        show();
	var name = g("note_name").value;
	var time = g("note_time").value;
	var dx_cb_num=g("cb_num_xx").value;
	var selectName=getSelectValue("selectDept");
	
	g("note_name1").value = name;
	var RegExp = /^0?1[3,4,5,8]\d{9}$/;  //手机正则
	if(name=="输入姓名"||name==""){
		 alert("请输入名字！");
		 return false;
	 }
	if(!RegExp.test(dx_cb_num)){
	   alert("请输入正确的手机号码！");
	   return false;
	}
	/*if(selectName=="0"){
		alert("请选择科室");
		return false;
	}*/
 	if(time==""){
		 alert("请输入正确的预约时间！");
		 document.ldd_cb_xx.note_time.value="";
		 return false;
	}
 	 //获取cookie值
 	var phone = getCookie("phone");
  	if(phone==dx_cb_num){
  	    alert("5分钟之内不能重复获取短信！");
  	    return false;
  	}
  	return true;
}


//获取短信
function checkBookMsg(){
	var dx_cb_num=g("cb_num_xx").value;
	if(checkSMS()){
		var Tnote = encodeURI(g("note_name1").value);
		//alert(Tnote);
		g("note_name1").value=Tnote;
		setCookie("phone",dx_cb_num);
	 	return true;
	}else{
		return false;
	}
}


//获取对象
function g(id){
	return document.getElementById(id);
}

function ldd_dofocus(){
	if(g("cb_num_xx").value=="请输入号码!") g("cb_num_xx").value="";
}
function ldd_doblur(){
	if(g("cb_num_xx").value=="") g("cb_num_xx").value="请输入号码!";
}

function numfocus(){
	if(g("dxyy_cb_num").value=="请输入您的电话号码!") g("dxyy_cb_num").value="";
}
function numblur(){
	if(g("dxyy_cb_num").value=="") g("dxyy_cb_num").value="请输入您的电话号码!";
}

function namefocus(){
	if(g("note_name").value=="输入姓名") g("note_name").value="";
}
function nameblur(){
	if(g("note_name").value=="") g("note_name").value="输入姓名";
}
function timefocus(){
	if(g("note_time").value=="请输入预约时间!") g("note_time").value="";
}
//设置cookie
function setCookie(name,value){ 
	//var Days = 60; //cookie 将被保存两个月 
	var exp = new Date(); //获得当前时间 
	exp.setTime(exp.getTime() + 5*60*1000); //保存1分钟 
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
	//alert("已设置");
} 
//获取cookie值
function getCookie(name){ 
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
	if(arr != null){
	  return unescape(arr[2]); 
	}
	return null; 
} 
//删除cookie值
function delCookie(name){ 
	var exp = new Date(); //当前时间 
	exp.setTime(exp.getTime() - 1); 
	var cval=getCookie(name); 
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}
/*输入框清除文本
function inputClearxx(){
	if(document.all.cb_num.value=="请输入号码!"){
		document.all.cb_num.value='';
	}
}*/
//获取当前时间
function newDatexx(){
	var lddDate=new Date();
	var years= lddDate.getFullYear();
	var month= lddDate.getMonth()+1;
	var days= lddDate.getDate();
	var clock = years + "-";
	if(month < 10)
        clock += "0";
    clock += month + "-";
    if(days < 10)
        clock += "0";
    clock += days;
	document.getElementById("note_time").value=clock;
	}


/*----------短信js代码----------------------------end--------------------------------*/

//关闭窗口
function hid_server(){
	document.getElementById("ldd_left_nav").style.display="none";
	}
document.writeln('<style type="text/css">');
document.writeln('	#ldd_content{ position:relative;}');
//上传服务器需注意background-url路径
document.writeln("    #ldd_left_nav{ width:185px;height:457px;*display:inline-block; z-index:999;position:fixed;_position:absolute;_top:"+D_floattop+"; top:"+D_floattop+"; "+ D_float +":"+D_floatnum+";background:url("+bgImg+") no-repeat 0 14px; font-size:12px;}");
document.writeln('    #ldd_left_nav_dh1{width:185; height:184px;margin-top:15px; }');
document.writeln('    #ldd_left_nav .ldd_dxyy_close{ position:absolute; clear:both; right:5px; top:0; cursor:pointer;}');
document.writeln('    #ldd_left_nav .ldd_dxyy_close:hover{ color:#c00000 ! important;}');
document.writeln('    #ldd_left_nav #uid1{width:38px;}');
document.writeln('    #ldd_left_nav #uid2{width:106px;}');
document.writeln('    .ldd_dxyy{ position:absolute;top:200px;left:0px;width:182px;height:120px;border:0px;;}');
	
document.writeln('	.ldd_dxyy span{color:#F00;font-size: 14px;margin-left: 5px;}');
		 
document.writeln('	.srts{width:137px; height:25px; line-height:21px; color:#f15c0a; float:left;position:absolute;top:67px;left:23px;}');
document.writeln('	.input{color:#3B3B3B;width:140px;height:21px;line-height:20px;border:1px solid #9f3e1e;text-indent:5px;vertical-align:middle;position:absolute;top:100px;;left:23px;}');
	
document.writeln(' 	.cb_sub_xx{ position:absolute;top:113px;left:41px; border:0px; display:inline-block;}');
	
document.writeln('	.ldd_xx_name{position:absolute;top:10px;left:10px;}');
document.writeln('	.ldd_xx_name label{ vertical-align:middle; font-size:12px;float:left;}');
document.writeln('	.ldd_xx_name input{padding:0;width:60px;line-height:16px; margin-left:58px;color:#3B3B3B;text-indent:5px;border:1px solid #009933;float:left;}');

document.writeln('	.ldd_xx_phone{position:absolute;top:35px;left:10px;}');
document.writeln('	.ldd_xx_phone label{vertical-align:middle; font-size:12px;}');
document.writeln('	.ldd_xx_phone input{color:#3B3B3B;line-height:16px;width:101px;text-indent:5px;border:1px solid #009933;}');

document.writeln('	.ldd_xx_department{position:absolute;top:60px;left:10px;}');
document.writeln('	.ldd_xx_department label{vertical-align:middle; font-size:12px;}');
document.writeln('	.ldd_xx_department select{color:#3B3B3B;line-height:16px;width:105px;text-indent:5px;border:1px solid #009933;position:absolute;top:0px;left:54px;}');
	
document.writeln('	.ldd_xx_time{position:absolute;top:85px;left:10px;}');
document.writeln('	.ldd_xx_time label{ vertical-align:middle; font-size:12px;}');
document.writeln('	.ldd_xx_time input{width:100px;line-height:16px;color:#3B3B3B;border:1px solid #009933;}');

//日历样式
document.write("#__calendar{width:147px;margin:0;padding:0;z-index:999999;}");
document.write("#calendarTable{ margin:0;padding:0;border:1px solid #9E9E9E;background:#FFF;}");
document.write("th,td{margin:0;padding:0px}");
document.write("#calendarTable th ,#calendarTable td{font:12px/20px 宋体,Arial,sans-serif;text-align:center;}");
document.write("#calendarTable thead th.week{border-top:1px solid #CCC;border-bottom:1px solid #ccc;background:#EEE;}");
document.write("#calendarTable thead tr.function th{border:1px solid #fff}");
document.write("#calendarTable thead tr.top{letter-spacing:1px;}");
document.write("#calendarTable thead a{color:#000;width:19px;height:18px;text-decoration:none;display:block;border:1px solid #ccc;background:#E1F1FF;}");
document.write("#calendarTable tbody a:hover{color:#990;width:19px;height:18px;text-decoration:none;display:block;border:1px solid #ccc;background:#E1F1FF;}");
document.write("#calendarTable thead a.today{width:98% !important;width:100%}");
document.write("#calendarTable thead a.today:hover{width:98% !important;width:100%}");
document.write("#calendarTable td{width:21px;height:20px;border-bottom:1px solid #E6E6E6;color:#fff;}");
document.write("#calendarTable th{height:21px;}");
document.write("#calendarTable tr.com{background:#fff;}");
document.write("#calendarTable tr.cur{background:#F0FAFF;}");
document.write("#calendarTable tbody a{color:#000;width:19px;height:18px;text-decoration:none;display:block;border:1px solid #fff;}");
document.write("#calendarTable tbody a:hover{color:#990;width:19px;height:18px;text-decoration:none;border:1px solid #E6E6E6;background:#E1F1FF;display:block;}");
document.write("#calendarTable tbody a.today{color:#c00;border:1px solid #DBDBDB;background:#CCE4FF;}");
document.write("#calendarTable tbody a.today:hover{color:#990;border:1px solid #DBDBDB;background:#CCE4FF;}");
document.write("#calendarTable tbody a.week{color:#c00;}");

document.writeln('</style>');
document.writeln('<body onload="show()">');
document.writeln('<div id="ldd_left_nav" >');
document.writeln('	<div id="ldd_content">');
document.writeln('    	<div id="ldd_left_nav_dh1">');
document.writeln('    		<p class="srts">请输入您的号码：</p>');
document.writeln('    		<form id="dxyy_cb" name="dxyy_cb" method="post" action="" target="sf">');
document.writeln('   			<input type=hidden name=S value=tsCB>');
document.writeln('				<input type="hidden" name="uid" id="uid" value="">');
document.writeln('				<input type=hidden name=surl id="surl" value=""> ');
document.writeln('				<input type=hidden name=title id="title" value=""> ');
document.writeln('				<input name="dxyy_cb_num" id="dxyy_cb_num"  type="text" maxlength = "12"  value="请输入您的电话号码!" class="input" onkeyup="dxyy_JFisTel()" onfocus="numfocus()" onBlur="numblur()" />');
document.writeln(" 				<input name=\"dxyy_cb_sub\" id=\"dxyy_cb_sub\" type=\"button\" onclick=\"dxyy_JFcheckForm()\" style=\"width:90px;height:25px;background:url("+D_cbgimg+") no-repeat;cursor:pointer;  vertical-align:middle;margin-left:-6px;display:inline-block;position:absolute;top:137px;left:45px;border:0px;\"/>");
document.writeln('			</form>');
document.writeln('		<div id="dxyy_JFimg" name="dxyy_JFimg" style="display:none"></div>');
document.writeln('		<IFRAME width=0 height=0 frameborder=0 scrolling=no name="sf"	src="about:blank"></IFRAME>');
document.writeln('        </div>');
document.writeln('   		<div class="ldd_dxyy">');
document.writeln('	 		<form name="ldd_cb_xx" id="ldd_cb_xx" method="post" action="http://test.laidianduo.com/ligerUi/WebContent/pages/qidu/seller/jspAction/msgLimit.jsp" target="sf_xx" onsubmit="return checkBookMsg();">');
//document.writeln('	 		<form name="ldd_cb_xx" id="ldd_cb_xx" method="post" action="http://localhost:8081/qidu/ligerUi/WebContent/pages/qidu/seller/jspAction/msgLimit.jsp" target="sf_xx" onsubmit="return checkBookMsg();">');
document.writeln('     			<input type="hidden" name="call_no"	id="call_no" value="">');
document.writeln('     			<input type="hidden" name="action1" id="action1" value="getMsg">');
document.writeln('                <div class="ldd_xx_name">');
document.writeln('   				<label>姓  名 </label>');
document.writeln('   				<input id="note_name1" name="note_name1" type="hidden" value="" />');
document.writeln('   				<input id="note_name" name="note_name" type="text" value="输入姓名" onfocus="namefocus()" onblur="nameblur()" /><span>*</span>');
document.writeln('   				</div>'); 
document.writeln('   				<div class="ldd_xx_phone">'); 
document.writeln('   				<label>手机号码 </label>'); 
document.writeln('   				<input name="cb_num_xx" id="cb_num_xx" class="cb_num_xx" type="text" maxlength="12" value="请输入号码!" onfocus="ldd_dofocus()" onBlur="ldd_doblur()"/><span>*</span>'); 
document.writeln('   				</div>');
document.writeln('   				<div class="ldd_xx_department">'); 
document.writeln('   				<label>预约科室</label>'); 
document.writeln('   				<input id="selectDept1" name="selectDept1" type="hidden" value="" />');
document.writeln('   				<select name="selectDept" id="selectDept" onchange="changDep()"> <option value="" selected="selected">--请选择--</option></select><span>*</span>'); 
document.writeln('   				</div>');
document.writeln('   				<div class="ldd_xx_time" name="ldd_xx_time">');
/*document.writeln('<script type="text/javascript" src="calen.js"></script>');*/
document.writeln('   				<label>预约时间 </label>');
document.writeln('   				<input id="note_time" name="note_time" type="text" value="" onclick="setday(note_time)" readonly="true"><span>*</span>');  
document.writeln('   				</div>'); 
document.writeln("                 <input type=\"image\" class=\"cb_sub_xx\" id=\"cb_sub_xx\" src=\""+ D_dbgimg +"\" style=\"width:90px;height:25px;\"/>"); 
document.writeln('			</form>');  
document.writeln('			<IFRAME width=0 height=0 frameborder=0 scrolling=no name="sf_xx" src="about:blank"></IFRAME>'); 
document.writeln('   		</div>');		
document.writeln('	</div>'); 
document.writeln('    <a class="ldd_dxyy_close" onclick="hid_server()">关闭</a>'); 
document.write("<div id='__calendar' style='position:absolute;display:none;'>");
document.write("<table cellspacing=\"0\" cellpadding=\"0\" id=\"calendarTable\"><thead><tr class=\"top\"><th>&nbsp;</th><th colspan=\"5\" id=\"sohwdate\"></th><th><a href=\"javascript:void(0);\" title=\"close\" onclick=\"shut()\">×</a></th></tr><tr class=\"function\"><th><a href=\"javascript:void(0);\" title=\"向前翻1年\" onclick=\"preYear()\">&lt;&lt;</a></th><th><a href=\"javascript:void(0);\" title=\"向前翻1月\" onclick=\"preMonth()\">&lt;</a></th><th colspan=\"3\"><a href=\"javascript:void(0);\" class=\"today\" title=\"今天\" onclick=\"getDate('0')\">今天</a></th><th><a href=\"javascript:void(0);\" title=\"向后翻1月\" onclick=\"nextMonth()\">&gt;</a></th><th><a href=\"javascript:void(0);\" title=\"向后翻1年\" onclick=\"nextYear()\">&gt;&gt;</a></th></tr><tr><th class=\"week\">日</th><th class=\"week\">一</th><th class=\"week\">二</th><th class=\"week\">三</th><th class=\"week\">四</th><th class=\"week\">五</th><th class=\"week\">六</th></thead><tbody id=\"calendarTbody\"></tbody></table>");
document.write("</div>");
document.writeln('</div>'); 
document.writeln('</body>');

//日历
//JavaScript Document
var objouter;
var objInput;
var isShow = true;
var objouter=document.getElementById("__calendar"); 
var calendarTable = document.getElementById("calendarTable");
objouter.appendChild(calendarTable);
function setday(obj){objInput = obj;writeDate();sohwDate();objouter.style.top =319+"px";objouter.style.left =28+"px";objouter.style.display = "block";}
function getAbsoluteHeight(ob){return ob.offsetHeight;}
function getAbsoluteWidth(ob){return ob.offsetWidth;}
function getAbsoluteLeft(ob){var s_el=0;el=ob;while(el){s_el=s_el+el.offsetLeft;el=el.offsetParent;}; return s_el}
function getAbsoluteTop(ob){var s_el=0;el=ob;while(el){s_el=s_el+el.offsetTop ;el=el.offsetParent;}; return s_el}
var daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
var toDay = new Date();
var tempYear = toDay.getFullYear();
var tempMonth = toDay.getMonth();
var tbody = document.getElementById("calendarTbody"); 
var sohwId = document.getElementById("sohwdate");
function getDays(month, year)
{  
 if (1 == month) return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28; 
 else return daysInMonth[month]; 
} 
function writeDate() {  
 var curCal = new Date(tempYear,tempMonth ,1);
 var startDay = curCal.getDay();
 var daily = 0;
 var today = toDay.getDate();
 if(tempYear != toDay.getFullYear() || tempMonth != toDay.getMonth()) today = -1;
 var todayStyle = "";
 var weekEndStyle = "";
 clear();
 var intDaysInMonth =getDays(curCal.getMonth(), curCal.getFullYear());
 var weeks = (intDaysInMonth + startDay) % 7 == 0 ? (intDaysInMonth + startDay) / 7 : parseInt((intDaysInMonth + startDay ) / 7) + 1; 
 for (var intWeek = 1; intWeek <= weeks; intWeek++){ 
  var tr = document.createElement("tr");
  tr.setAttribute("onmouseover","javascript:this.className='cur'");  
  tr.setAttribute("onmouseout","javascript:this.className='com'");
  tr.onmouseover = function (){this.className = "cur";}
  tr.onmouseout = function (){this.className = "com";}
  for (var intDay = 0;intDay < 7;intDay++){   
   var td = document.createElement("td");
   if ((intDay == startDay) && (0 == daily)) 
    daily = 1; 
    
   if(today == daily)  todayStyle="today";
   
   if (intDay == 6 || intDay == 0) weekEndStyle = "week" ;
   
   if ((daily > 0) && (daily <= intDaysInMonth)) 
   { 
    td.innerHTML = "<a href=\"javascript:void(0);\" class=\""+ weekEndStyle + todayStyle +"\" onclick=\"getDate('"+daily+"')\" title=\""+eval(tempMonth+1)+"月"+daily+"日\">" + daily + "</a>";
    todayStyle = "";
    weekEndStyle = "";
    daily++; 
   }else{ 
    td.innerHTML = "&nbsp;"; 
    todayStyle = "";
    weekEndStyle = "";
   }   
   tr.appendChild(td);   
  }
  tbody.appendChild(tr);
 } 
}
function getDate(day){
 var year , month ,date;
 if(day == "0"){
  year = toDay.getFullYear();
  month = eval(toDay.getMonth()+1) < 10 ? "0"+eval(toDay.getMonth()+1) : eval(toDay.getMonth()+1);
  date = toDay.getDate() < 10 ? "0"+toDay.getDate() : toDay.getDate();
 }else{
  year = tempYear;
  month = eval(tempMonth+1) < 10 ? "0"+eval(tempMonth+1) : eval(tempMonth+1);
  date = day < 10 ? "0"+day : day;  
 }
 var objInputa= year + "-" + month +"-"+ date;
 var mydate=new Date();
  var m_years= mydate.getFullYear();
	var m_month= mydate.getMonth()+1;
	var m_days= mydate.getDate();
	var m_clock = m_years + "-";
	if(m_month < 10)
        m_clock += "0";
    m_clock += m_month + "-";
    if(m_days < 10)
        m_clock += "0";
    m_clock += m_days;
 if(objInputa>m_clock){
	objInput.value =objInputa;
 }
 else{objInput.value =m_clock;}
 close();
}
function sohwDate(){
 sohwId.innerHTML = tempYear + "年" + eval(tempMonth+1) +"月";
}
function preYear(){
 isShow = false;
 if(tempYear > 999 && tempYear < 10000){
  tempYear--;
 }else{
  alert("年份超出范围（1000-9999）！");
 }
 sohwDate();
 writeDate();
}
function nextYear(){
 isShow = false;
 if(tempYear > 999 && tempYear < 10000){
  tempYear++;
 }else{
  alert("年份超出范围（1000-9999）！");
 }
 sohwDate();
 writeDate();
}
function preMonth(){
 isShow = false;
 if(tempMonth >= 1){tempMonth--}else{tempYear--;tempMonth = 11;}
 sohwDate();
 writeDate();
}
function nextMonth(){
 isShow = false;
 if(tempMonth == 11){tempYear++;tempMonth = 0}else{tempMonth++}
 sohwDate();
 writeDate();
}
function clear(){
 var nodes = tbody.childNodes;
 var nodesNum = nodes.length; 
 for(var i=nodesNum-1;i>=0;i--) { 
  tbody.removeChild(nodes[i]); 
 }
}
function shut(){
 close();
}
function close(){
 tempYear = toDay.getFullYear();
 tempMonth = toDay.getMonth();
 objouter.style.display = "none"
 objouter.style.top = 0;
 objouter.style.left = 0;
}
function vent(event){
 if(document.all){
  if(isShow){
   if (window.event.srcElement != objouter && window.event.srcElement != objInput) close();
   isShow = true;
   return;
  }
  isShow = true;  
 }else{
  if(isShow){
   if(event.target != objouter && event.target != objInput) close();
   isShow = true;
  }
  isShow = true;
 }
}
function changDep(){
	
	g("selectDept1").value=encodeURI(getSelectValue("selectDept"));
}

function getSelectValue(selectName){
	var selectDept="";
	var depArray=document.getElementById(selectName);
	for(var i=0;i<depArray.length;i++){
		if(depArray[i].selected==true){
			selectDept=depArray[i].value;
		}	
	}
	return selectDept;
}
document.onclick = vent;
var deptNameArray=depStr.split(",");
var selectDept =document.getElementById("selectDept");
for(var k=0;k<deptNameArray.length-1;k++){
	 // alert(deptNameArray[k]);
	  selectDept.options.add(new Option(deptNameArray[k],deptNameArray[k]));
}

//-->