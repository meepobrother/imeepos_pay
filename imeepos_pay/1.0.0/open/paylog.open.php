<?php
global $_W, $_GPC;
$errNum = -1;
$msg = '对不起权限不足';
$data = array();

if ($this->checkMobile()) {
    // 手机端返回数据 我的记录
    $list = pdo_getall('core_paylog', array('openid' => $_W['uid']));
    $data = $list;
}

if ($this->checkWeb()) {
    // 电脑端返回数据
    $list = pdo_getall('core_paylog', array('uniacid' => $_W['uniacid']),array(),'','plid DESC');
    $data = $list;
}
return $this->result($errNum, $msg, $data);
