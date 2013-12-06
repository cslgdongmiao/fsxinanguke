var jq=jQuery.noConflict(); //修正：避免JS代码中有 jq 符号,造成跟jquery.min.js冲突

jq(this).scroll(function() { // 页面发生scroll事件时触发 
var bodyTop = 0; 
if (typeof window.pageYOffset != 'undefined') { 
bodyTop = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
{ 
bodyTop = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') { 
bodyTop = document.body.scrollTop; 
} 

jq("#lovexin2").css("top", 100 + bodyTop)

}); 


//专家抖动
var suspendcode='<DIV id="lovexin1" style="Z-INDEX: 9999; position:fixed;right:0; bottom:0px;width: 214px; height: 124px;cursor:pointer;display:none;">'+
	
	'<a onclick="hideLovexin1()"   style="width:37px;height: 37px;display:block;position:absolute;cursor:pointer; right:15px;top:2px; text-align:center; margin-right:-12px; color:#777777; font-family:Arial, Helvetica, sans-serif" title=关闭><img src=/images/ddclose.gif /></a>'+
	'<a id=\"qqShake\" href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=800060657&amp;site=qq&amp;menu=yes"  target=\"_blank\">'+
		'<img src="/images/qq.gif"  border="0" />'+
	'</a>' +
	'<a onclick="hideLovexin1()"   style="position:absolute;right:15px;bottom:8px;color:#ccc;font-size:12px;" title=拒绝 >拒绝</a>'+
'</DIV>';
document.write(suspendcode);
	
	 
jq(document).ready(function(){  
	jq('#lovexin1').css('display','block');
	FollowDiv = {
		follow : function(){
			jq('#lovexin1').css('position','absolute');
			jq(window).scroll(function(){
				var f_top = jq(window).scrollTop() + jq(window).height() - jq("#lovexin1").outerHeight();
				jq('#lovexin1').css( 'top' , f_top );
			});
		}
	}
		/*FF和IE7可以通过position:fixed来定位，只有ie6需要动态设置高度.*/
		if(jq.browser.msie && jq.browser.version == 6) {
			FollowDiv.follow();
		}
		shake();
		repeat = setInterval(shake,10000);//这里repeat是全局，在hideLovexin1函数中清空
		//绑定点击事件
		/*
		jq('#qqShake').bind('click',function(){
			if(jq('#LRfloater0').css('display') == 'block'){
				jq('#LRfloater0 img').eq(1).click();
			}
			if(jq('#LRfloater1').css('display') == 'block'){
				jq('#LRfloater1 area').eq(1).click();
			}
		})
		*/
 });
function hideLovexin1()  
{   
	jq('#lovexin1').css('display','none');
	window.setTimeout("show_doudong()",40000);
	
	
	//clearInterval(repeat);
}	
/**
 * 窗口抖动
 */ 
function shake(){ 
	//window.console.log('shake')
	var a=['bottom','right'],b=0;
	var u=setInterval(function(){
		jq('#lovexin1').css( a[b%2] , (b++)%4<2?0:4 );
		if(b>17){
			clearInterval(u);
			b=0;
		}
	 },30)
}
function show_doudong()
{
	jq('#lovexin1').css('display','block');
}
