<?php
//get data from form  
$name = $_POST['sender-name'];
$email= $_POST['sender-email'];
$message= $_POST['message'];
$to = "lotanable2@gmail.com";
$subject = "Mail From website lotany portfolio";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@lotany.com" . "\r\n" .
"CC: lotanable2@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
