<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail =new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);

$mail = new PHPMailer();
$mail->setFrom('test@domain.ru', 'Иван Иванов'); // от кого (email и имя)
$mail->addAddress('den.chernyshev.2014@mail.ru');  // кому (email и имя)
$mail->Subject = 'Тест';                         // тема письма
// html текст письма

// Отправляем
if ($mail->send()) {
  echo 'Письмо отправлено!';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
}  

$response = ['message'=> $message];

header('Content-type : application/json');
echo json_encode($response);