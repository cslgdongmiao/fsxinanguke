<?php
require_once(dirname(__FILE__).'/../../0tyinc/common.inc.php');
//�ɹ�������Ϣ
$dsql->ExecuteNoneQuery("Update `#@__sys_task` set sta='�ɹ�' where dourl='dede-upcache.php' ");
echo "Welcome to DedeCMS!";
exit();
?>