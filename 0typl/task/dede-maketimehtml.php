<?php
require_once(dirname(__FILE__).'/../../0tyinc/common.inc.php');
//成功返回信息
$dsql->ExecuteNoneQuery("Update `#@__sys_task` set sta='成功' where dourl='dede-maketimehtml.php' ");
echo "Welcome to DedeCMS!";
exit();
?>