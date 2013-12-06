<?php



function litimgurls($imgid=0)
{
    global $lit_imglist,$dsql;
    //获取附加表
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //获取图片附加表imgurls字段内容进行处理
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //调用inc_channel_unit.php中ChannelUnit类
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //调用ChannelUnit类中GetlitImgLinks方法处理缩略图
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls']);
    
    //返回结果
    return $lit_imglist;
}

//获取TAG静态地址，  by NIC QQ:2384419
function nic_tag_url($tid)
{
	global $dsql;
	$sql = "select * from #@__tagindex  where id='$tid' ";
    if ($arcRow = $dsql->GetOne($sql)){     
	   
	   //$str = $GLOBALS['cfg_cmspath']."/tag/".ceil($tid/100)."/".Getpinyin($arcRow["tag"])."_".$tid."_1.html";  //目录结构为：每100个ID为一个目录，从 /tag/1/ 开始
       
	   $pinyin_title = GetPinyin(stripslashes($arcRow["tag"]));
       $pinyin_title = str_replace("?","",$pinyin_title);
	   $pinyin_title = str_replace(":","",$pinyin_title);
	   $str = $GLOBALS['cfg_cmspath']."/tag/".$pinyin_title."_".$tid."_1.html";  //目录结构为：/tag/拼音_ID_1.html 开始
	}else $str="ID为$tid的TAG已被删除！";

	return $str;
}


//获取指定文章的TAG到相关TAG列表页的地址，  by NIC QQ:2384419
function nic_arc_tag_link($aid)
{
	global $dsql;
	$sql = "select tid from #@__taglist  where aid='$aid' group by tid ";
    $dsql->Execute('ala',$sql);
	while($row=$dsql->GetObject('ala')){ 
	   $url=nic_tag_url($row->tid);
       if ($arcRow = $dsql->GetOne("select * from #@__tagindex  where id='".$row->tid."' ")) $tag=$arcRow["tag"];
	   else $tag="";
	   $str.=" <a href='".$url."' target=_blank><b>".$tag."</b></a> ";
	}
	return $str;
}





?>