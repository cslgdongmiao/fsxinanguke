$(function(){
    inte();
    showmes();

});
function inte(){
    $(".radiobox").hover(function(){
        $(this).css("background-color","rgb(238,238,238)");
    },function(){
        $(this).css("background-color","#fff");
    });

}
 function showmes(){
     $(".shownbuttun").click(function(){
			var errorcount=0;						   
			var result=0;
     	    var count=0;
		for (var i = 1; i<=9; i++) {
			var radioname="radiobutton"+i;
        	var val=$('input:radio[name="'+radioname+'"]:checked').val();
        	if(val==null){
               errorcount++;  
        	}else if(val=="y"){
                 count++;
        	}
        };
		if(errorcount>0){
			 $(".showresult").css("color","#f00");
			 $(".showresult").html("你还有未选择的选项！");
			}
		else{
			$(".showresult").css("color","#00f");
			result=count*10;
			if(result==0){
				 $(".showresult").html("&nbsp&nbsp&nbsp;"+result+"分"+"&nbsp&nbsp&nbsp;"+"温馨提示：恭喜您，您的脊柱很健康！");
				}
			else if(result>=10&&result<=20){
				$(".showresult").html("&nbsp&nbsp&nbsp;"+result+"分"+"&nbsp&nbsp&nbsp;"+"温馨提示：您患有强直性脊柱炎的可能性很低！");
				}else if(result>=30&&result<=50){
					$(".showresult").html("&nbsp&nbsp&nbsp;"+result+"分"+"&nbsp&nbsp&nbsp;"+"温馨提示：您具有部分强直性脊柱炎的症状！");
					}
					else if(result>=60){
						$(".showresult").html("&nbsp&nbsp&nbsp;"+result+"分"+"&nbsp&nbsp&nbsp;"+"温馨提示：您患有强直性脊柱炎的可能性很大。！");
						}
				}
     });


 }