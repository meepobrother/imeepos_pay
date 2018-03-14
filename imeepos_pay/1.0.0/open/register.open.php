<?php
global $_W, $_GPC;
$data = array(
    'status' => 0,
);
$input = $_GPC['__input'];
$shop = array();
$shop['realname'] = $input['realname'];
$shop['uniacid'] = $_W['uniacid'];
$shop['mobile'] = $input['mobile'];
$shop['detail'] = $input['detail'];
$shop['salt'] = random(6);
$shop['password'] = md5($input['password'] . $shop['salt'] . $_W['config']['setting']['authkey']);
if (pdo_insert('mc_members', $shop)) {
    $data['id'] = pdo_insertid();
    $shop['shop'] = $data['id'];
    $data['data'] = $shop;
} else {
    $data['data'] = 0;
}
die(json_encode($data));

