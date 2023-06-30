<?php
header("Access-Control-Allow-Origin: *");
$burnData = file_get_contents('https://api.solscan.io/account/3cdYk6iutMXFceZ7thsoggcLsyuJBgJxmDFuZx4NDtpyjc4hXxFyvn8qpSKCk3grb3zAXFCCucNbAxKL97z3EwF4/txs?limit=10&offset=0');
echo $burnData;
?>
