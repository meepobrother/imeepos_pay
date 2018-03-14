<?php
global $_W, $_GPC;
$errNum = -1;
$msg = '对不起权限不足';
$data = array();
if($this->checkMobile()){
    // 手机端返回数据
}

if($this->checkWeb()){
    // 电脑端返回数据
    $sql = " SELECT SUM(fee) as total,module FROM ".tablename("core_paylog")." WHERE uniacid=:uniacid AND status=1 group by module";
    $item = pdo_fetchall($sql,array(':uniacid'=>$_W['uniacid']));
    $data = $item;
}
return $this->result($errNum, $msg, $data);
