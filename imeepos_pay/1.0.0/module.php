<?php
class Imeepos_payModule extends WeModule
{
    public function result($errno, $message, $data = '')
    {
        exit(json_encode(array(
            'errno' => $errno,
            'message' => $message,
            'data' => $data,
        )));
    }
}
