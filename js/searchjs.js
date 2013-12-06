function fbbox(fbboxID,ObjID){
	$(fbboxID).click(function(){
		$(ObjID).show();
	});
	$(ObjID).hover('',function(){
		$(ObjID).hide();
	});
	$(fbboxID).keydown(function(){
		$(ObjID).show();
	});
	$(ObjID).find('li').click(function(){
		var text = $(this).find('h1').text();
		$(fbboxID).val(text);
		$(ObjID).hide();
	});
}
fbbox('#inpunt1','#hotwords');