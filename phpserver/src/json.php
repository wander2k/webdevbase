<?php
$result = array();
$result["status"] = "ok";
$result["data"] = array();
$result["data"]["count"] = 1;
$result["data"]["title"] = "Hello World!";
$result["data"]["content"] = "This is my test for json output!"; 

$json = json_encode($result);
echo $json;

?>
