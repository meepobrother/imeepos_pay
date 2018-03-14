<?php
global $_W, $_GPC;
$data = array();
$input = $_GPC['__input'];
$code = $input['code'];
$mobile = $input['mobile'];
$password = $input['password'];
$item = pdo_get('mc_members', array('mobile' => $mobile, 'uniacid' => $_W['uniacid']));
if (empty($item)) {
    $data['status'] = -1;
    $data['msg'] = '会员不存在';
} else {
    $data['info'] = $_SESSION;
    pdo_update('mc_members', array('password' => md5($password . $code . $_W['config']['setting']['authkey']), 'salt' => $code), array('uid' => $item['uid']));
}
die(json_encode($data));
