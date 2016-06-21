


<?php $status = $_SERVER['REDIRECT_STATUS'];
$codes = array(
       403 => array('403 Forbidden', 'The server has refused to fulfill your request.'),
       404 => array('404 Not Found', 'The document/file requested was not found on this server.'),
       405 => array('405 Method Not Allowed', 'The method specified in the Request-Line is not allowed for the specified resource.'),
       408 => array('408 Request Timeout', 'Your browser failed to send a request in the time allowed by the server.'),
       500 => array('500 Internal Server Error', 'The request was unsuccessful due to an unexpected condition encountered by the server.'),
       502 => array('502 Bad Gateway', 'The server received an invalid response from the upstream server while trying to fulfill the request.'),
       504 => array('504 Gateway Timeout', 'The upstream server failed to send a request in the time allowed by the server.'),
);

$title = $codes[$status][0];
$message = $codes[$status][1];
if ($title == false || strlen($status) != 3) {
       $message = 'Please supply a valid status code.';
}
?>
<html>
    <head>
        <title><?php echo $title?></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' type="text/css" href="/MOSindex/mosIndex.css">
    </head>
    <body class = "mos_content">
        <h1><?php echo $title?></h1>
        <div class="mos_section">
            <p><?php echo $message?></p>
        </div>
    </body>
</html>