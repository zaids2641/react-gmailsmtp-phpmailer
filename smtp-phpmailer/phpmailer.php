<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//require 'path/to/PHPMailer/src/Exception.php';
//require 'path/to/PHPMailer/src/PHPMailer.php';
//require 'path/to/PHPMailer/src/SMTP.php';


// get refferer server (HTTP_REFERER: "http://localhost:3000/" if you are using your local computer. Use the URL of your website if you want to use it in your website)
if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/"){
    // extract the data from $_POST
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $subject = isset($_GET['subject']) ? $_GET['subject'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

    if($name && $message && $subject && $email){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = '@gmail.com';           // Enter your SMTP username (Your gmail address)
            $mail->Password   = '';                        // Enter your SMTP password (Your generated app password)
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom($email, 'Contact From My Portfolio');
            $mail->addAddress('@gmail.com');     // Add a recipient (Your gmail address)
            $mail->addReplyTo($email, $name);

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br />Subject: ' . $subject . '<br /><br /><b>Message:</b> '
            . $message;

            if($mail->send())
                echo "Your message was successfully sent. Thank you!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo  header('Location: google.com');
}
?>