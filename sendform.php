<?php

/* https://api.telegram.org/bot5650548634:AAHhVILblS28lD2Jqt_JcsfYp3r9PzXvVk4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$question = $_POST['question'];
$token = "5650548634:AAHhVILblS28lD2Jqt_JcsfYp3r9PzXvVk4";
$chat_id = "-864511936";
$arr = array(
  'Имя клиента: ' => $name,
  'Телефон/Email: ' => $phone,
  'Комментарий: ' => $question
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>