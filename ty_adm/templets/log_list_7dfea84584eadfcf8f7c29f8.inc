<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
<title>�ɼ����ݹ���</title>
<link href="css/base.css" rel="stylesheet" type="text/css">
<script language="javascript">

//���ѡ���ļ����ļ���
function getCheckboxItem(){
	 var allSel="";
	 if(document.form1.logs.value) return document.form1.logs.value;
	 for(i=0;i<document.form1.logs.length;i++)
	 {
		 if(document.form1.logs[i].checked){
			 if(allSel=="")
				 allSel=document.form1.logs[i].value;
			 else
				 allSel=allSel+"`"+document.form1.logs[i].value;
		 }
	 }
	 return allSel;	
}

function ReSel(){
	for(i=0;i<document.form1.logs.length;i++){
		if(document.form1.logs[i].checked) document.form1.logs[i].checked = false;
		else document.form1.logs[i].checked = true;
	}
}

function DelSel(){
	 var nid = getCheckboxItem();
	 if(nid==""){
		  alert("��ѡ����Ŀ!\r\n");
		  return ;
	 }
	 location.href = "log_edit.php?dopost=del&ids="+nid;
}

function ClearLog(){
	 location.href = "log_edit.php?dopost=clear";
}

</script>
</head>
<body background='images/allbg.gif' leftmargin='8' topmargin='8'>
<table width="98%" border="0" cellpadding="2" cellspacing="1" bgcolor="#D6D6D6" align="center">
  <tr> 
    <td height="28" colspan="7" background='images/tbg.gif'>
    	<table width="96%" border="0" cellpadding="0" cellspacing="0">
        <tr> 
          <td width="20%" height="18" style="padding-left:10px;"><strong>����ϵͳ��־��</strong></td>
          <td width="80%" align="right">&nbsp; </td>
        </tr>
      </table></td>
  </tr>
  <tr align="center" bgcolor="#ffffff"> 
    <td colspan="7">
	  <table width="90%" border="0" cellspacing="0" cellpadding="0">
     <form name='formsearch'>
		  <tr>
       <td>
		  ����Ա��
		  <select name="adminid" id="adminid" style="width:90px">
		  <option value="0" selected>--ȫ��--</option>
		  <?php echo $adminlist?>
		  </select>
		  IP��ַ��
      <input name="cip" type="text" id="cip" size="15" style="width:100px" />
      ʱ�䣺 
      <select name="dtime" id="dtime">
              <option value="0" selected>--ȫ��--</option>
              <option value="7">һ����</option>
              <option value="15">15����</option>
              <option value="30">30������</option>
              <option value="60">60������</option>
        </select> 
			   &nbsp;
        <input type="submit" name="Submit" value="����" />
        </td>
      </tr>
		</form>
    </table>
   </td>
  </tr>
  <tr align="center" bgcolor="#e3ecf9"> 
    <td width="8%">ѡ��</td>
    <td width="11%">����Ա</td>
    <td width="15%">�����ļ�</td>
    <td width="8%">��ʽ</td>
    <td width="14%">����IP</td>
    <td width="16%">ʱ��</td>
    <td width="28%">Query����</td>
  </tr>
  <form name="form1">
<?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
    <tr align="center" bgcolor="#FFFFFF" height="26" align="center" onMouseMove="javascript:this.bgColor='#FCFDEE';" onMouseOut="javascript:this.bgColor='#FFFFFF';"> 
      <td>
      	<input name='logs' type='checkbox' class='np' id="logs" value='<?php echo $fields['lid']; ?>' />
      </td>
      <td> 
        <?php echo $fields['userid']; ?>
      </td>
      <td>
      	<input class="np" type="text" value="<?php echo $fields['filename']; ?>" name="t0" style="width:100px" />
      </td>
      <td> 
        <?php echo $fields['method']; ?>
      </td>
      <td> 
        <?php echo $fields['cip']; ?>
      </td>
      <td> 
        <?php echo MyDate('y/m/d H:i:s',$fields['dtime']); ?>
      </td>
      <td>
      	<input class="np" type="text" value="<?php echo $fields['query']; ?>" name="t1" style="width:280px" />
      </td>
    </tr>
<?php
}
}?>
  </form>
  <tr> 
    <td height="30" colspan="7" bgcolor="#FCFDF7">
    	&nbsp; <input type="button" name="b5" value="��ѡ"  style="width:40px" class="coolbg np" onClick="ReSel();" /> 
      &nbsp; <input type="button" name="b6" value="ɾ����ѡ"  style="width:80px" class="coolbg np" onClick="DelSel();" /> 
      &nbsp; <input type="button" name="b7" value="���������־"  style="width:100px" class="coolbg np" onClick="ClearLog();" /> 
    </td>
  </tr>
  <tr bgcolor="#e4eef9"> 
    <td height="24" colspan="7" align="center"> 
      <?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '5';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

    </td>
  </tr>
</table>
</body>
</html>