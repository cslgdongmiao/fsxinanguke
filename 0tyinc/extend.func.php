<?php



function litimgurls($imgid=0)
{
    global $lit_imglist,$dsql;
    //��ȡ���ӱ�
    $row = $dsql->GetOne("SELECT c.addtable FROM #@__archives AS a LEFT JOIN #@__channeltype AS c 
                                                            ON a.channel=c.id where a.id='$imgid'");
    $addtable = trim($row['addtable']);
    
    //��ȡͼƬ���ӱ�imgurls�ֶ����ݽ��д���
    $row = $dsql->GetOne("Select imgurls From `$addtable` where aid='$imgid'");
    
    //����inc_channel_unit.php��ChannelUnit��
    $ChannelUnit = new ChannelUnit(2,$imgid);
    
    //����ChannelUnit����GetlitImgLinks������������ͼ
    $lit_imglist = $ChannelUnit->GetlitImgLinks($row['imgurls']);
    
    //���ؽ��
    return $lit_imglist;
}

//��ȡTAG��̬��ַ��  by NIC QQ:2384419
function nic_tag_url($tid)
{
	global $dsql;
	$sql = "select * from #@__tagindex  where id='$tid' ";
    if ($arcRow = $dsql->GetOne($sql)){     
	   
	   //$str = $GLOBALS['cfg_cmspath']."/tag/".ceil($tid/100)."/".Getpinyin($arcRow["tag"])."_".$tid."_1.html";  //Ŀ¼�ṹΪ��ÿ100��IDΪһ��Ŀ¼���� /tag/1/ ��ʼ
       
	   $pinyin_title = GetPinyin(stripslashes($arcRow["tag"]));
       $pinyin_title = str_replace("?","",$pinyin_title);
	   $pinyin_title = str_replace(":","",$pinyin_title);
	   $str = $GLOBALS['cfg_cmspath']."/tag/".$pinyin_title."_".$tid."_1.html";  //Ŀ¼�ṹΪ��/tag/ƴ��_ID_1.html ��ʼ
	}else $str="IDΪ$tid��TAG�ѱ�ɾ����";

	return $str;
}


//��ȡָ�����µ�TAG�����TAG�б�ҳ�ĵ�ַ��  by NIC QQ:2384419
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