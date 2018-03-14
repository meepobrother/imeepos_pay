<?php
class Imeepos_payModuleSite extends WeModuleSite
{
    public function __construct()
    {}

    public function payResult($params = array())
    {
        global $_W, $_GPC;
        // if ($params['result'] == 'success' && $params['from'] == 'notify') {
            $log = pdo_get('core_paylog', array('tid' => $params['tid'], 'uniacid' => $_W['uniacid']));
            if ($log['type'] != 'credit') {
                load()->model('mc');
                // 消费赠送积分
                // mc_card_grant_credit($log['openid'], $log['card_fee'], $order['store_id']);
                // 充值积分
                mc_credit_update($log['openid'], 'credit2', $log['fee'], array('0', '充值余额', $params['module'], 0, $storeid, 3));
            }
        // }
        return $this->result(0, '', $params);
    }

    public function loader()
    {
        return load();
    }

    public function table($name = '')
    {
        return table($name);
    }

    public function checkMobileDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createMobileUrl($do);
            header("Location:" . $url);
            exit();
        }
    }
    public function checkWebDo($do)
    {
        global $_W, $_GPC;
        if (empty($_GET['do']) || empty($_GET['i'])) {
            $url = $this->createWebUrl($do, array('i' => $_W['uniacid']));
            print_r($url);
            header("Location:" . $url);
            exit();
        }
    }
    // 后台登录
    public function checkWeb()
    {
        global $_W, $_GPC;
        return !empty($_W['uid']);
    }
    // 前台登录
    public function checkMobile()
    {
        global $_W, $_GPC;
        return !empty($_W['member']);
    }

    public function result($errno, $message, $data = '')
    {
        exit(json_encode(array(
            'errno' => $errno,
            'message' => $message,
            'data' => $data,
        )));
    }

    public function createOpen($name)
    {
        $dir = IA_ROOT . '/addons/' . $this->modulename . '/open/';
        $file = $dir . $name . '.open.php';
        if (file_exists($file)) {
            require $file;
            exit();
        }
    }

    public function doWebOpen()
    {
        global $_W, $_GPC;
        $this->createOpen($_GPC['open']);
    }

    public function doMobileOpen()
    {
        global $_W, $_GPC;
        $this->createOpen($_GPC['open']);
    }

    public function doMobileindex()
    {
        global $_W, $_GPC;
        $this->checkMobileDo("index");
        include $this->template('index');
    }
    public function doMobilechongzhi()
    {
        global $_W, $_GPC;
        $this->checkMobileDo("chongzhi");
        include $this->template('index');
    }
    public function doMobiletixian()
    {
        global $_W, $_GPC;
        $this->checkMobileDo("tixian");
        include $this->template('index');
    }
    public function doMobilelog()
    {
        global $_W, $_GPC;
        $this->checkMobileDo("log");
        include $this->template('index');
    }

    public function doWebrefundlog()
    {
        global $_W, $_GPC;
        $this->checkWebDo("refundlog");
        include $this->template('web/index');
    }
    public function doWeblog()
    {
        global $_W, $_GPC;
        $this->checkWebDo("log");
        include $this->template('web/index');
    }
    public function doWebtongji()
    {
        global $_W, $_GPC;
        $this->checkWebDo("tongji");
        include $this->template('web/index');
    }
    public function doWebsetting()
    {
        global $_W, $_GPC;
        $this->checkWebDo("setting");
        include $this->template('web/index');
    }
}
