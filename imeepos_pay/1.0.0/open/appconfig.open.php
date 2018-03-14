<?php
global $_W, $_GPC;

$errNum = -1;
$msg = '对不起权限不足';
$data = array();
if ($this->checkMobile()) {
    // 手机端返回数据
    $params = array('module' => $this->modulename, 'uniacid' => $_W['uniacid']);
    $item = pdo_get('uni_account_modules', $params);
    $item['settings'] = unserialize($item['settings']);
    $data = $item['settings'];
}

if ($this->checkWeb()) {
    // 电脑端返回数据
}
return $this->result($errNum, $msg, $data);
