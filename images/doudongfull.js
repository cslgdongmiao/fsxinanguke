var jq=jQuery.noConflict(); //����������JS�������� jq ����,��ɸ�jquery.min.js��ͻ

jq(this).scroll(function() { // ҳ�淢��scroll�¼�ʱ���� 
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


//ר�Ҷ���
var suspendcode='<DIV id="lovexin1" style="Z-INDEX: 9999; position:fixed;right:0; bottom:0px;width: 214px; height: 124px;cursor:pointer;display:none;">'+
	
	'<a onclick="hideLovexin1()"   style="width:37px;height: 37px;display:block;position:absolute;cursor:pointer; right:15px;top:2px; text-align:center; margin-right:-12px; color:#777777; font-family:Arial, Helvetica, sans-serif" title=�ر�><img src=/images/ddclose.gif /></a>'+
	'<a id=\"qqShake\" href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=800060657&amp;site=qq&amp;menu=yes"  target=\"_blank\">'+
		'<img src="/images/qq.gif"  border="0" />'+
	'</a>' +
	'<a onclick="hideLovexin1()"   style="position:absolute;right:15px;bottom:8px;color:#ccc;font-size:12px;" title=�ܾ� >�ܾ�</a>'+
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
		/*FF��IE7����ͨ��position:fixed����λ��ֻ��ie6��Ҫ��̬���ø߶�.*/
		if(jq.browser.msie && jq.browser.version == 6) {
			FollowDiv.follow();
		}
		shake();
		repeat = setInterval(shake,10000);//����repeat��ȫ�֣���hideLovexin1���������
		//�󶨵���¼�
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
 * ���ڶ���
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
