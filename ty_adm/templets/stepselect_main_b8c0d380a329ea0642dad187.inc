<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
<title>联动枚举管理</title>
<link href="css/base.css" rel="stylesheet" type="text/css">
<style>
li { float:left; padding-right:8px; line-height:24px; }
.abt { width:90%; border:1px #ffffff solid}
#edsta {
  position:absolute;
  top:73px; left:111px;
  width: 278px; height: 199px;
  background-color: #e4eef9;
  border: 1px solid #dedede;
  display:none;
  padding:3px;
}
#edsta div { margin:5px; }
</style>
<SCRIPT LANGUAGE="JavaScript" src="../0tyinc/js/dedeajax2.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript">
<!--
var loadhtml = "<center><img src='../images/loadinglit.gif' style='padding:30px' /></center>";
function updateItem(aid)
{
	var upenumf = document.getElementById('upenumf');
   upenumf.ename.value = $DE('ename'+aid).value;
   upenumf.disorder.value = $DE('disorder'+aid).value;
   upenumf.aid.value = aid;
   upenumf.submit();
}

function GetSelType()
{
  var selvalue = $DE('egroup1').options[$DE('egroup1').selectedIndex].value;
  return selvalue;
}

function AddType()
{
   var myajax = new DedeAjax($DE('edsta'));
   $DE('edsta').style.display = 'block';
   myajax.SendGet('stepselect_main.php?action=addnew',true,true,'','系统错误，无法获取数据！',loadhtml);
}

function AddEnum()
{
   var id = GetSelType();
   if(id==0) {
      alert("必须选择一个类别！");
      return false;
   }
   var myajax = new DedeAjax($DE('edsta'));
   $DE('edsta').style.display = 'block';
   myajax.SendGet('stepselect_main.php?action=addenum&id='+id,true,true,'','系统错误，无法获取数据！',loadhtml);
}

function EditType()
{
   var id = GetSelType();
   if(id==0) {
      alert("必须选择一个类别！");
      return false;
   }
   var myajax = new DedeAjax($DE('edsta'));
   $DE('edsta').style.display = 'block';
   myajax.SendGet('stepselect_main.php?action=edit&id='+id,true,true,'','系统错误，无法获取数据！',loadhtml);
}

function ViewType()
{
   var id = GetSelType();
   if(id==0) {
      alert("必须选择一个类别！");
      return false;
   }
   var myajax = new DedeAjax($DE('edsta'));
   $DE('edsta').style.display = 'block';
   myajax.SendGet('stepselect_main.php?action=view&id='+id,true,true,'','系统错误，无法获取数据！',loadhtml);
}

function DelType()
{
  if(window.confirm("你确实要删除这个分类吗？")==false) return false;
  var id = GetSelType();
  if(id==0) {
      alert("必须选择一个类别！");
      return false;
  }
  location.href='stepselect_main.php?action=del&id='+id;
}

function CloseTWin()
{
  $DE('edsta').innerHTML = loadhtml;
  $DE('edsta').style.display='none';
}

function ChangePage(sobj)
{
    var ntxt = sobj.options[sobj.selectedIndex].text;
    if(sobj.options[sobj.selectedIndex].value==0)
    {
        location.href='stepselect_main.php';
    }
    else
    {
        var ns = ntxt.split('|');
        location.href='stepselect_main.php?egroup='+ns[0];
    }
}

function TogSel()
{
    var ems = document.getElementsByName('ids[]');
    for(i=0; i < ems.length; i++)
    {
        if(ems[i].checked==false) ems[i].checked=true;
        else ems[i].checked=false;
    }
}

function DelSel()
{
    if(window.confirm("你确实要删除这些分类吗？")) document.form1.submit();
}

function ChangePage2(sobj)
{
    var nv = sobj.options[sobj.selectedIndex].value;
    if(sobj.options[sobj.selectedIndex].value==0)
    {
        location.href='stepselect_main.php?egroup=<?php echo $egroup; ?>';
    }
    else
    {
        location.href='stepselect_main.php?egroup=<?php echo $egroup; ?>&topvalue='+nv;
    }
}

//-->
</SCRIPT>
</head>
<body background='images/allbg.gif' leftmargin='8' topmargin='8'>
<div id='edsta'><center><img src='../images/loadinglit.gif' /></center></div>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#cfcfcf" style="margin-bottom:6px">
  <tr>
     <td height="28" background="images/wbg.gif" colspan="6" style="padding-left:10px;">
     <div style="float:left"><b>·联动枚举组管理</b></div>
     <div style="float:right"><a href='stepselect_main.php?action=upallcache'>[<u>更新所有枚举缓存</u>]</a>&nbsp;</div>
     </td>
     </tr>
     <tr>
     <td height="30" bgcolor="#ffffff" style="padding:6px;"><table width="800" border="0" cellspacing="0" cellpadding="0">
       <tr>
         <td width="85"><strong>请选择组别：</strong></td>
         <td width="264">
           <select name="egroup1" id="egroup1" style="width:90%;" onChange="ChangePage(this)">
             <option value='0'>--所有组--</option>
        <?php
            $selgroup = '';
            foreach($etypes as $arr)
            {
                $stylecolor = "";
                if($arr['issystem']==1) $stylecolor = " style='color:#999999' ";
                if($egroup==$arr['egroup']) {
                    $selgroup = $arr['itemname'];
                    echo "<option value='{$arr['id']}' $stylecolor selected='1'>{$arr['egroup']}|{$arr['itemname']}</option>\r\n";
                }
                else {
                    echo "<option value='{$arr['id']}' $stylecolor>{$arr['egroup']}|{$arr['itemname']}</option>\r\n";
                }
            }
        ?>
           </select> 
         </td>
         <td width="350">
                       <input type="button" name="gedit" id="gedit" value="修改" class="np coolbg" onClick="EditType()" />
              <input type="button" name="gdel" id="gdel" value="删除" class="np coolbg" onClick="DelType()" />
                      <input type="button" name="gview" id="gview" value="预览" class="np coolbg" onClick="ViewType()" />
         </td>
         <td align="right">
                       <input type="button" name="addnew" id="addnew" value="新增类别组" class="np coolbg" onClick="AddType()" />
                  </td>
       </tr>
       <tr><td colspan='3' height='24' style='color:#333333'><img src='images/help.gif' /> 灰色字的为系统内置枚举，您是不能对它进行删除修改操作的，但可以添加或修改它的元素。</td></tr>
     </table>
    </td>
  </tr>
</table>
<?php
if(!empty($egroup))
{
    $arr = $dsql->GetOne("SELECT * FROM `#@__stepselect` WHERE egroup='{$egroup}' ");
    $dsql->Execute('out',"SELECT evalue,ename FROM `#@__sys_enum` WHERE egroup='{$arr['egroup']}' ORDER BY disorder ASC,evalue ASC");
    $options = '';

    while($row1 = $dsql->GetArray('out'))
    {
        if(!preg_match("#\.#", $row1['evalue']))
        {
            $row1['ename'] = ($row1['evalue'] % 500 == 0)? $row1['ename'] : '└─'.$row1['ename'];
            if($topvalue != $row1['evalue']) $options .= "<option value='{$row1['evalue']}'>{$row1['ename']}</option>\r\n";
            else $options .= "<option value='{$row1['evalue']}' selected='selected'>{$row1['ename']}</option>\r\n";
        }
    }

    // 如果添加3级之类
    if($topvalue % 500 != 0) $arr['issign'] = 2;
?>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6" style='margin-bottom:8px;'>
  <tr>
   <td height="28" background="images/tbg.gif" colspan="8">
    <div style="float:left">
        &nbsp;·<b><?php echo $selgroup; ?></b>
        &gt;
        <b>子分类管理</b>
    </div>
    <div style="float:right">
    <?php
    if($egroup=='nativeplace') {
        echo "<a href='stepselect_main.php?action=exarea' class='np coolbg'>把默认省市地区表导入</a>&nbsp;";
    }
    ?>
    </div>
     </td>
  </tr>
  <tr bgcolor="#ffffff" height='48'> 
   <td>
<form action='stepselect_main.php' method='post'>
<INPUT TYPE="hidden" NAME="action" value="addenum_save" />
<INPUT TYPE="hidden" NAME="issign" value="<?php echo $arr['issign']; ?>" />
<INPUT TYPE="hidden" NAME="egroup" value="<?php echo $arr['egroup']; ?>" />
<div style='float:left;'>
<b>&nbsp;隶属分类：</b>
<select name='topvalue' style='width:130px' onChange="ChangePage2(this)">
<option value='0'><?php echo $selgroup; ?>...</option>
<?php echo $options; ?>
</select>
</div>
<div style='float:left;'>
<b>&nbsp;分类名称：</b><INPUT TYPE="text" NAME="ename" class="iptxt" style='width:350px' />
</div>
<div style='float:left;padding-left:6px'>
    <INPUT TYPE="submit" name='sb2' value="增加分类" class="np coolbg"/>
</div>
<div style='clear:both;color:#333333;line-height:24px;'>
&nbsp;<img src='images/help.gif' /> 如果没选择隶属分类则表示增加的是顶级分类，用半角逗号","分开可以一次增加多个分类。
</div>
</form>    
   </td>
  </tr>
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6">
  <tr>
   <td height="28" background="images/tbg.gif" colspan="8">
    <div style="float:left">
     &nbsp;·<a href='stepselect_main.php'><b><u>枚举组列表</u></b></a>
     &gt; <a href='stepselect_main.php?egroup=<?php echo $egroup; ?>'><b><u><?php echo $selgroup; ?></u></b></a>
     &gt; <b>子分类列表</b>
    </div>
    <div style="float:right"></div>
     </td>
  </tr>
  <tr align="center" bgcolor="#e3ecf9" height="24"> 
      <td width="6%">选择</td>
      <td width="6%">编号</td>
      <td width="20%">枚举名</td>
      <td width="20%">类别组名</td>
      <td width="10%">枚举类型</td>
      <td width="10%">枚举值</td>
      <td width="10%">组内排序</td>
      <td width="18%">操作</td>
   </tr>
   <form action='stepselect_main.php' name='upenumf' method='post' id="upenumf">
       <input type='hidden' name='action' value='upenum' />
       <INPUT TYPE="hidden" NAME="aid" value="" />
       <input type='hidden' name='ename' value='' />
       <input type='hidden' name='disorder' value='' />
   </form>
   <form name='form1' action='stepselect_main.php' method='post'>
       <input type='hidden' name='action' value='delenumAllSel' />
   <?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
    <tr align="center" bgcolor="#FFFFFF" height="24" onMouseMove="javascript:this.bgColor='#FCFDEE';" 
        onMouseOut="javascript:this.bgColor='#FFFFFF';"> 
          <td><input type='checkbox' name='ids[]' value='<?php echo $fields['id']; ?>' class='np' /></td>
        <td><?php echo $fields['id']; ?></td>
        <td>
            <?php 
            if(!preg_match("#\.#", $fields['evalue']))
            {
                if($fields['evalue']>500 && $fields['evalue']%500 != 0)  $fields['ename'] = " └─".$fields['ename'];
            } else {
                $fields['ename'] = " └───".$fields['ename'];
            }
            ?>
            <input type='text' id='ename<?php echo $fields['id']; ?>' value='<?php echo $fields['ename']; ?>' class='abt' />
        </td>
        <td><?php echo $fields['egroup']; ?></td>
            <td>
            <?php
            if(!preg_match("#\.#", $fields['evalue']))
            {
                if($fields['evalue']>500 && $fields['evalue']%500 != 0)  echo '二级选择';
                else echo '一级选择';
            } else {
                echo "三级选择";
            }
            ?></td>
        <td><?php echo $fields['evalue']; ?></td>
        <td><input type='text' id='disorder<?php echo $fields['id']; ?>' value='<?php echo $fields['disorder']; ?>' class='abt' /></td>
        <td>
        <?php
                if(!empty($egroup))
        {
        ?>
                <a href='javascript:updateItem(<?php echo $fields['id']; ?>);'>[更新]</a>
        <a href='stepselect_main.php?action=delenum&id=<?php echo $fields['id']; ?>'>[删除]</a>
        <?php
         }
         else
         {
               echo "<a href='stepselect_main.php?egroup={$fields['egroup']}'><u>".$egroups[$fields['egroup']]."</u></a>";
         }
        ?>
        </td>
     </tr>
        <?php
}
}?>
       </form>
     <tr height="24"> 
       <td colspan="8" bgcolor="#ffffff">
       &nbsp;
       <a href='javascript:TogSel();' class='np coolbg'>全选/反选</a>
       &nbsp;
       <a href='javascript:DelSel();' class='np coolbg'>删除所选</a>
       </td>
     </tr>
      <tr align="center" bgcolor="#e4eef9" height="28"> 
       <td colspan="8">
          <?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '6';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

      </td>
     </tr>
</table>
<?php
}
else
{
?>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6">
  <tr>
   <td height="28" background="images/tbg.gif" colspan="8">
    <div style="float:left">
    &nbsp;·<a href='stepselect_main.php'><b><u>枚举组列表</u></b></a>
    </div>
    <div style="float:right"></div>
     </td>
  </tr>
  <tr align="center" bgcolor="#e3ecf9" height="24"> 
      <td width="6%">选择</td>
      <td width="6%">编号</td>
      <td width="28%">组类别名</td>
      <td width="10%">级数</td>
      <td width="10%">系统</td>
      <td width="15%">缓存组名</td>
      <td>操作</td>
   </tr>
   <?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
    <tr align="center" bgcolor="#FFFFFF" height="24" onMouseMove="javascript:this.bgColor='#FCFDEE';" 
        onMouseOut="javascript:this.bgColor='#FFFFFF';"> 
          <td><input type='checkbox' name='ids[]' value='<?php echo $fields['id']; ?>' class='np' /></td>
        <td> <?php echo $fields['id']; ?> </td>
        <td> <a href='stepselect_main.php?egroup=<?php echo $fields['egroup']; ?>'><u><?php echo $fields['itemname']; ?></u></a> </td>
        <td> 
        <?php
                switch ($fields['issign']) {
                    case 0:
                        echo "一级选择";
                        break;
                    case 1:
                        echo "二级选择";
                        break;
                    case 2:
                        echo "三级选择";
                        break;
                }
        ?>
        </td>
            <td> <?php echo $fields['issystem']==1 ? '是' : '否'; ?> </td>
        <td><?php echo $fields['egroup']; ?></td>
        <td>
                 <a href='stepselect_main.php?action=upallcache&egroup=<?php echo $fields['egroup']; ?>'>[更新缓存]</a>
                 <a href='stepselect_main.php?egroup=<?php echo $fields['egroup']; ?>'>[查看子分类]</a>
        </td>
     </tr>
        <?php
}
}?>
     <tr align="center" bgcolor="#e4eef9" height="28"> 
       <td colspan="8">
          <?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '6';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

      </td>
    </tr>
</table>
<?php
}
?>
</body>
</html>