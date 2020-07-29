<?php
if(!empty($_POST['website'])) {
        die();
        echo '<script>console.log("DIED")</script>';
	}
 
	else if(isset($_POST['submit']) || isset($_POST['submit-2'])) {

        $from = 'Customer Request';
        $to = 'okonfortunesam@gmail.com';

            if(isset($_POST['submit-2'])){
                $subject = 'Customer Request || Get In Touch!';
            }else{
                $subject = 'Customer Request';
            }
        
        $cusName = $_POST['cus_name'];
        $cusEmail = $_POST['cus_email'];
        $cusPhone = $_POST['cus_phone'];
        $cusMessage = $_POST['cus_statement'];

        $body = "NAME: $cusName
                EMAIL: $cusEmail
                PHONE: $cusPhone
                Message: $cusMessage";

        mail($to, $subject, $body, $from);

        header("Status: 200");
    }
?>