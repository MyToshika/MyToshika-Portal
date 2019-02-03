<?php session_start();
	$name=$_POST['Name'];
	$email=$_POST['Email'];
	$phone=$_POST['Phone'];
	$query=$_POST['Message'];

	$to  = 'pushpendrasingh0009@gmail.com';
	$subject = 'MyToshika Test Email';

	$message = '
	<html>
	<body>
	<table>
	<tr>
	<td>&nbsp;<b>' .$name.'</b> sent you a mail with the following query :</td>
	</tr>
	<tr>
	<td>&nbsp;</td>
	</tr>
	<tr>
	<td>&nbsp;&nbsp;<b>Message : </b>'.$query.' </td>
	</tr>
	<tr>
	<tr>
	<td>&nbsp;</td>
	</tr>
	<tr>
	<tr>
	<td>&nbsp;&nbsp;<b>Email : </b>'.$email.' </td>
	</tr>
	<tr>
	<td>&nbsp;&nbsp;<b>Contact : </b>'.$phone.' </td>
	</tr>
	</table>
	</body>
	</html>';
	
	
	 $host = "mail.mytoshika.com";
     $username = "mytoshik";
     $password = "9r4IZ7ye6y";
 
     $headers = array ('From' => $from,
        'To' => $to,
        'Subject' => $subject);
        $smtp = Mail::factory('smtp',
        array ('host' => $host,
        'auth' => true,
        'username' => $username,
        'password' => $password));
 
        $mail = $smtp->send($to, $headers, $message);
 	    if (PEAR::isError($mail)) {
  	      echo(" Message not sent successfully! ");   
		else {  
		   echo(" Message successfully sent! ");  
		}
	
	exit;
?>