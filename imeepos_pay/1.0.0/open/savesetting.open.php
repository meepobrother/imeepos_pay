<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$errNum = -1;
$msg = '对不起权限不足';
$data = array();
if ($this->checkMobile()) {
    // 手机端返回数据
}

if ($this->checkWeb()) {
    // 电脑端返回数据
    $this->saveSettings($input);
}
return $this->result($errNum, $msg, $input);
