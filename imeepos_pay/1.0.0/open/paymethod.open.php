<?php
global $_W, $_GPC;
$input = $_GPC['__input'];

// 手机端返回数据
$params = array(
    'fee' => floatval($input['fee']),
    'tid' => $input['tid'],
    'module' => $input['module'],
);
if (empty($params['tid']) || empty($params['fee']) || empty($params['module'])) {
    $this->result(1, '支付参数不完整', $input);
}
if ($params['fee'] <= 0) {
    $notify_params = array(
        'form' => 'return',
        'result' => 'success',
        'type' => '',
        'tid' => $params['tid'],
    );
    $site = WeUtility::createModuleSite($params['module']);
    $method = 'payResult';
    if (method_exists($site, $method)) {
        $site->$method($notify_params);
        $this->result(-1, '支付成功', array());
    }
}
$log = pdo_get('core_paylog', array('uniacid' => $_W['uniacid'], 'module' => $params['module'], 'tid' => $params['tid']));
if (empty($log)) {
    $log = array(
        'uniacid' => $_W['uniacid'],
        'acid' => $_W['acid'],
        'openid' => $_W['member']['uid'],
        'module' => $params['module'],
        'tid' => $params['tid'],
        'fee' => $params['fee'],
        'card_fee' => $params['fee'],
        'status' => '0',
        'is_usecard' => '0',
    );
    pdo_insert('core_paylog', $log);
}
if ($log['status'] == '1') {
    $this->result(1, '订单已经支付', array());
}
$setting = uni_setting($_W['uniacid'], array('payment', 'creditbehaviors'));
if (!is_array($setting['payment'])) {
    $this->result(1, '暂无有效支付方式', array());
}
$pay = $setting['payment'];
if (empty($_W['member']['uid'])) {
    $pay['credit']['switch'] = false;
}
if (!empty($pay['credit']['switch'])) {
    $credtis = mc_credit_fetch($_W['member']['uid']);
}
$this->result(0, '获取成功', array(
    'pay' => $pay,
    'credtis' => $credtis,
    'params' => $params,
));

