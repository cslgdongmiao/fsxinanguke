<?php
/**
 * �˳�
 *
 * @version        $Id: exit.php 1 19:09 2010��7��12��Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__).'/../0tyinc/common.inc.php');
require_once(DEDEINC.'/userlogin.class.php');
$cuserLogin = new userLogin();
$cuserLogin->exitUser();
if(empty($needclose))
{
    header('location:index.php');
}
else
{
    $msg = "<script language='javascript'>
    if(document.all) window.opener=true;
    window.close();
    </script>";
    echo $msg;
}