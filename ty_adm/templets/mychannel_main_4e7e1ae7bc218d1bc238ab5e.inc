<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
<title>����ģ�͹���</title>
<link href="css/base.css" rel="stylesheet" type="text/css">
</head>
<body background='images/allbg.gif' leftmargin='8' topmargin='8'>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6">
  <tr> 
    <td height="28" colspan="7" background="images/tbg.gif">
    	<table width='96%' cellpadding='0' cellspacing='0'>
    		<tr>
    		<td width='20%' style="padding-left:10px;"><b>����ģ�͹���</b></td>
        <td align='right'>
    	  <a href="mychannel_add.php" class='np coolbg'>������ģ��</a>
    	  <a href="mychannel_edit.php?dopost=exportin" class='np coolbg'>����ģ��</a>
    	  <a href="stepselect_main.php" class='np coolbg'>����������</a>
        </td>
      </tr>
     </table>
    </td>
  </tr>
  <tr align="center" bgcolor="#e3ecf9" height="28"> 
      <td width="6%">id��</td>
      <td width="16%">Ƶ������</td>
      <td width="12%">ʶ��id</td>
      <td width="20%">���ӱ�</td>
      <td width="12%">״̬</td>
      <td width="8%">ģ��</td>
      <td>����</td>
   </tr>
   <?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
    <tr align="center" bgcolor="#FFFFFF" height="24" 
    	onMouseMove="javascript:this.bgColor='#FCFDEE';" onMouseOut="javascript:this.bgColor='#FFFFFF';"> 
        <td><?php echo $fields['id']; ?></td>
        <td>
        	<a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=edit'><u><?php echo $fields['typename']; ?></u></a>
        </td>
        <td><?php echo $fields['nid']; ?></td>
        <td><?php echo str_replace('#@__',$cfg_dbprefix,$fields['addtable']); ?></td>
        <td><?php echo GetSta($fields['isshow'],$fields['id']); ?></td>
        <td><?php echo IsSystem($fields['issystem']); ?></td>
        <td>
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=copystart'><img src='images/gtk-copy.png' title='����' alt='����' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=gettemplets'><img src='images/gtk-tmp.png' title='ģ��' alt='ģ��' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=export'><img src='images/gtk-ex.png' title='����' alt='����' /></a>  
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=edit'><img src='images/gtk-edit.png' alt='����' title='����' /></a>  
         <a href='mychannel_edit.php?mid=<?php echo $fields['id']; ?>&dopost=modifysearch'><img src='images/gtk-search.png' alt='�Զ�������' title='�Զ�������' /></a> 
         <a href='mychannel_edit.php?id=<?php echo $fields['id']; ?>&dopost=delete'><img src='images/gtk-del.png' alt='ɾ��' title='ɾ��' /></a>
		    </td>
     </tr>
		<?php
}
}?>
     <tr align="center" bgcolor="#e4eef9" height="28"> 
      <td colspan="7">
      	<?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '5';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

      </td>
     </tr>
     <tr align="center" bgcolor="#ffffff" height="32"> 
      <td colspan="7">
      	ͼ��˵����
      	<img src='images/gtk-copy.png' title='����' alt='����' /> ����
        <img src='images/gtk-tmp.png' title='ģ��' alt='ģ��' /> ģ��
        <img src='images/gtk-ex.png' title='����' alt='����' /> ����
        <img src='images/gtk-edit.png' alt='����' title='����' /> �޸�
        <img src='images/gtk-search.png' alt='�Զ�������' title='�Զ�������' /> �Զ�������
        <img src='images/gtk-del.png' alt='ɾ��' title='ɾ��' /> ɾ��
      </td>
     </tr>
   </table>
   </td>
</tr>
</table>
</body>
</html>