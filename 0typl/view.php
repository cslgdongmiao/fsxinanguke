<?php
/**
 *
 * ��������Ȩ�����õ�˵��
 * ����Ȩ������������ʽ���£�
 * ���ָ���˻�Ա�ȼ�����ô���뵽������ȼ��������
 * ���ָ���˽�ң����ʱ���ָ��ĵ������������¼���û�ҵ���¼��
 * �������ͬʱָ������ô����ͬʱ������������
 *
 * @version        $Id: view.php 1 15:38 2010��7��8��Z tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../0tyinc/common.inc.php");
require_once(DEDEINC.'/arc.archives.class.php');

$t1 = ExecTime();

if(empty($okview)) $okview = '';
if(isset($arcID)) $aid = $arcID;
if(!isset($dopost)) $dopost = '';

$arcID = $aid = (isset($aid) && is_numeric($aid)) ? $aid : 0;
if($aid==0) die(" Request Error! ");

$arc = new Archives($aid);
if($arc->IsError) ParamError();


//����Ķ�Ȩ��
$needMoney = $arc->Fields['money'];
$needRank = $arc->Fields['arcrank'];

require_once(DEDEINC.'/memberlogin.class.php');
$cfg_ml = new MemberLogin();

if($needRank < 0 && $arc->Fields['mid'] != $cfg_ml->M_ID)
{
    ShowMsg('������δ���,�����߱�����Ȩ�鿴!', 'javascript:;');
    exit();
}

//������Ȩ�����Ƶ�����
//arctitle msgtitle moremsg
if($needMoney>0 || $needRank>1)
{
    $arctitle = $arc->Fields['title'];
    /*
    $arclink = GetFileUrl($arc->ArcID,$arc->Fields["typeid"],$arc->Fields["senddate"],
                             $arc->Fields["title"],$arc->Fields["ismake"],$arc->Fields["arcrank"]);
    */                        
    $arclink = $cfg_phpurl.'/view.php?aid='.$arc->ArcID;                         
    $arcLinktitle = "<a href=\"{$arclink}\"><u>".$arctitle."</u></a>";
    
    $description =  $arc->Fields["description"];
    $pubdate = GetDateTimeMk($arc->Fields["pubdate"]);
    
    //��Ա������
    if(($needRank>1 && $cfg_ml->M_Rank < $needRank && $arc->Fields['mid']!=$cfg_ml->M_ID))
    {
        $dsql->Execute('me' , "SELECT * FROM `#@__arcrank` ");
        while($row = $dsql->GetObject('me'))
        {
            $memberTypes[$row->rank] = $row->membername;
        }
        $memberTypes[0] = "�οͻ�ûȨ�޻�Ա";
        $msgtitle = "��û��Ȩ������ĵ���{$arctitle} ��";
        $moremsg = "��ƪ�ĵ���Ҫ <font color='red'>".$memberTypes[$needRank]."</font> ���ܷ��ʣ���Ŀǰ�ǣ�<font color='red'>".$memberTypes[$cfg_ml->M_Rank]."</font> ��";
        include_once(DEDETEMPLATE.'/plus/view_msg.htm');
        exit();
    }

    //��Ҫ��ҵ����
    if($needMoney > 0  && $arc->Fields['mid'] != $cfg_ml->M_ID)
    {
        $sql = "SELECT aid,money FROM `#@__member_operation` WHERE buyid='ARCHIVE".$aid."' AND mid='".$cfg_ml->M_ID."'";
        $row = $dsql->GetOne($sql);
        //δ�����������
        if(!is_array($row))
        {
            if($cfg_ml->M_Money=='' || $needMoney > $cfg_ml->M_Money)
            {
                    $msgtitle = "��û��Ȩ������ĵ���{$arctitle} ��";
                    $moremsg = "��ƪ�ĵ���Ҫ <font color='red'>".$needMoney." ���</font> ���ܷ��ʣ���Ŀǰӵ�н�ң�<font color='red'>".$cfg_ml->M_Money." ��</font> ��";
                    include_once(DEDETEMPLATE.'/plus/view_msg.htm');
                    $arc->Close();
                    exit();
            }
            else
            {
                if($dopost=='buy')
                {
                    $inquery = "INSERT INTO `#@__member_operation`(mid,oldinfo,money,mtime,buyid,product,pname)
                              VALUES ('".$cfg_ml->M_ID."','$arctitle','$needMoney','".time()."', 'ARCHIVE".$aid."', 'archive',''); ";
                    if($dsql->ExecuteNoneQuery($inquery))
                    {
                        $inquery = "UPDATE `#@__member` SET money=money-$needMoney WHERE mid='".$cfg_ml->M_ID."'";
                        if(!$dsql->ExecuteNoneQuery($inquery))
                        {
                            showmsg('����ʧ��, �뷵��', -1);
                            exit;
                        }
                        #api{{
                        if(defined('UC_APPID'))
                        {
                            include_once DEDEROOT.'/api/uc.func.php';
                            $row = $dsql->GetOne("SELECT `scores`,`userid` FROM `#@__member` WHERE `mid`='".$cfg_ml->M_ID."'");
                            uc_credit_note($row['userid'],-$needMoney,'money');
                        }
                        #/aip}}
    
                        showmsg('����ɹ�������۵㲻���ؿ۽�ң�лл��', '/0typl/view.php?aid='.$aid);
                        exit;
                    } else {
                        showmsg('����ʧ��, �뷵��', -1);
                        exit;
                    }
                }
                
                $msgtitle = "�۽�ҹ����Ķ���";
                $moremsg = "�Ķ����ĵ�������Ҫ���ѣ�<br>��ƪ�ĵ���Ҫ <font color='red'>".$needMoney." ���</font> ���ܷ��ʣ���Ŀǰӵ�н�� <font color='red'>".$cfg_ml->M_Money." </font>����<br>ȷ���Ķ���� [<a href='/0typl/view.php?aid=".$aid."&dopost=buy' target='_blank'>ȷ�ϸ����Ķ�</a>]" ;
                include_once($cfg_basedir.$cfg_templets_dir."/plus/view_msg.htm");
                $arc->Close();
                exit();
            }
        }
    }//��Ҵ���������
}

$arc->Display();