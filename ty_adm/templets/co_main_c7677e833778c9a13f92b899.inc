<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
<title>�ɼ��ڵ����</title>
<script language="javascript" src="js/context_menu.js"></script>
<script language="javascript" src="js/ieemu.js"></script>
<script language="javascript">
if(moz) {
	extendEventObject();
	extendElementModel();
	emulateAttachEvent();
}
//�༭�ڵ�
function EditNote(nid)
{
	if(nid=="") nid = getOneItem();
  if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_edit.php?nid="+nid;
}
//�༭�ڵ�����
function EditNoteText(nid)
{
	if(nid=="") nid = getOneItem();
  if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_edit_text.php?nid="+nid;
}
//��սڵ�
function ClearNote(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_do.php?dopost=clear&nid="+nid;
}
//ɾ���ڵ�
function DelNote(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	if(window.confirm('��ȷ��Ҫɾ������ڵ���?'))
	{ location.href = "co_do.php?dopost=delete&nid="+nid; }
}
//�鿴�����ص�����
function ViewDown(nid)
{
	if(nid=="") nid = getOneItem();
	location.href = "co_url.php?nid="+nid;
}
//���Թ���
function TestRule(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_test_rule.php?nid="+nid;
}
//�����ɼ�
function ExportDown(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_export.php?nid="+nid;;
}
//�������
function GetRule()
{
	location.href = "co_get_corule.php";
}
//��������
function ExportRule(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_export_corule.php?nid="+nid;
}
//�ɼ���ѡ�ڵ�
function GatherSel(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_gather_start.php?nid="+nid;
}
//������ѡ�ڵ�
function CopyNote(nid)
{
	if(nid=="") nid = getOneItem();
	if(nid==""){ alert("��ѡ��һ���ڵ㣡"); return;}
	location.href = "co_do.php?dopost=copy&nid="+nid;
}
//�����Ĳ˵�
function ShowMenu(evt,obj,nid)
{
  var eobj,popupoptions
  popupoptions = [
    new ContextItem("���Ե�ǰ�ڵ�",function(){ TestRule(nid); }),
    new ContextItem("�ɼ���ǰ�ڵ�",function(){ GatherSel(nid); }),
    new ContextSeperator(),
    new ContextItem("���ĵ�ǰ�ڵ�",function(){ EditNote(nid); }),
    new ContextItem("���Ľڵ�����",function(){ EditNoteText(nid); }),
    new ContextSeperator(),
    new ContextItem("�鿴�ɼ�����",function(){ ViewDown(nid); }),
    new ContextItem("�����ɼ�",function(){ ExportDown(nid); }),
    new ContextSeperator(),
    new ContextItem("�����������Ϣ",function(){ ClearNote(nid); }),
    new ContextItem("ɾ����ǰ�ڵ�",function(){ DelNote(nid); }),
    new ContextSeperator(),
    new ContextItem("���Ƶ�ǰ�ڵ�",function(){ CopyNote(nid); }),
    new ContextSeperator(),
    new ContextItem("�������ù���",function(){ ExportRule(nid); }),
    new ContextItem("�رղ˵�(<u>C</u>)",function(){})
  ]
  ContextMenu.display(evt,popupoptions)
}
//���ѡ������һ����id
function getOneItem()
{
	var allSel="";
	if(document.form1.nids.value) return document.form1.nids.value;
	for(i=0;i<document.form1.nids.length;i++)
	{
		if(document.form1.nids[i].checked)
		{
				allSel = document.form1.nids[i].value;
				break;
		}
	}
	return allSel;	
}
</script>
<link href="css/base.css" rel="stylesheet" type="text/css">
</head>
<body background='images/allbg.gif' leftmargin='8' topmargin='8' onLoad="ContextMenu.intializeContextMenu()">
<table width="98%" border="0" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6" align="center">
  <tr> 
    <td height="20" colspan="7" background='images/tbg.gif'> <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr> 
          <td width="20%" height="18" style="padding-left:10px;"><strong>�ɼ��ڵ������</strong></td>
          <td width="80%" align="right">
          	<input type="button" name="ba" value="�����½ڵ�" onClick="location='co_add.php?action=select';" class="coolbg np" style="width:100px" /> 
          </td>
        </tr>
      </table></td>
  </tr>
  <tr align="center" height="26" bgcolor="#e3ecf9"> 
    <td width="8%">ѡ��</td>
    <td width="32%">�ڵ�����</td>
    <td width="18%">��Թ���</td>
    <td width="10%">���ɼ�����</td>
    <td width="10%">��������</td>
    <td width="10%">����</td>
    <td width="10%">��ַ��</td>
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
    <tr bgcolor="#FFFFFF" align="center" onMouseMove="javascript:this.bgColor='#FCFDEE';"
    	 onMouseOut="javascript:this.bgColor='#FFFFFF';" height="22" oncontextmenu="ShowMenu(event,this,<?php echo $fields['nid']; ?>);"> 
      <td><input type='checkbox' name='nids' value='<?php echo $fields['nid']; ?>' class='np'></td>
      <td><a href='co_url.php?nid=<?php echo $fields['nid']; ?>'><?php echo $fields['notename']; ?></a></td>
      <td><?php echo $fields['typename']; ?></td>
      <td><?php echo GetDatePage($fields['cotime']); ?></td>
      <td><?php echo GetDatePage($fields['uptime']); ?></td>
      <td><?php echo $fields['sourcelang']; ?></td>
      <td><?php echo TjUrlNum($fields['nid']); ?></td>
    </tr>
    <?php
}
}?> 
  </form>
  <tr bgcolor="#ffffff"> 
    <td height="24" colspan="7"> 
      <table width="90%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td>
          	&nbsp;
          	<a href="#" onClick="location='co_add.php?action=select';" class='coolbg np'>�����½ڵ�</a>
            <a href="javascript:GetRule();" class='coolbg np'>��������</a>
            <a href="javascript:ExportRule('');" class='coolbg np'>��������</a> 
             | 
            <a href="javascript:GatherSel('');" class='coolbg np' style='color:red'>�ɼ�</a>
            <a href="javascript:ExportDown('');" class='coolbg np'>��������</a>
             |
          	<a href="javascript:EditNote('');" class='coolbg np'>����</a>
          	<a href="javascript:EditNoteText('');" class='coolbg np'>��������</a>
          	<a href="javascript:TestRule('');" class='coolbg np'>����</a>
          	 | 
          	<a href="javascript:ViewDown('');" class='coolbg np'>�鿴������</a> 
             | 
            <a href="javascript:CopyNote('');" class='coolbg np'>����</a>
            <a href="javascript:ClearNote('');" class='coolbg np'>���</a> 
             | 
            <a href="javascript:DelNote('');" class='coolbg np'>ɾ��</a>
           </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr  bgcolor="#e4eef9"> 
    <td height="24" colspan="7" align="center">
    	<?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['size'] = '5';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

    </td>
  </tr>
</table>
</body>
</html>