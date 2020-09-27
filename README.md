## Simple Send Email In React JS With Gmail SMTP And PHPMailer

Clone the repo, open cmd, VS Code terminal or git bash

### run `npm install`

### PHP Composer Installation

#### Pre-requisite

1. Download and install [VC_redist.x64.exe (64 bit)](https://aka.ms/vs/15/release/VC_redist.x64.exe "VC_redist.x64.exe (64 bit)") or [VC_redist.x86.exe (32 bit)](https://aka.ms/vs/16/release/VC_redist.x86.exe "VC_redist.x86.exe (32 bit)")</br></br>
2. Download and extract [PHP 7.4 VC15 x64 Non Thread Safe](https://windows.php.net/download/ "PHP 7.4 VC15 x64 Non Thread Safe")
   After download is complete, create a new folder in c:\php7 (or wherever you prefer) and extract your PHP zip to it.</br></br>
3. Download and install [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe "Composer-Setup.exe") Make sure the correct path to php.exe is set and click Next. If Setup prompts to create php.ini, allow it and click Next. Skip the Proxy URL settings, just click Next then click Install. Click Finish once install is complete.</br></br>
4. In CMD, type php -v and press Enter. You should now see the PHP version if you done it correctly.</br></br>
5. Add Path Environment Variable. In your file explorer, right click
   <b>This PC</b> -> <b>Properties</b> -> <b>Advanced sytem settings</b>. Under <b>Advance Tab</b>, Click <b>Environment Variables</b>. In <b>Sytem variables</b> Select <b>Path</b> and click <b>Edit</b>. Click <b>New</b> then type the path of your PHP folder (c:\php7) and click <b>OK</b>. Close the <b>System Properties</b> dialogue by clicking <b>OK</b>.</br></br>
6. Test your Composer by typing composer -v in Command Pormpt. If all was installed correctly, you should see a version number. If ever composer is not recognized, follo (5.) and add the path of your composer.exe. <i>(Skip steps 1 to 6 if you already have)</i>
7. Create new folder in the root directory of your cloned repo <b>react-php-contact-email-form</b> name it <b>composer</b> Open CMD inside of your <b>composer</b> folder and install phpmailer by typing `composer require phpmailer/phpmailer`.</br></br>
8. After phpmailer installation is finished, upload the <b>vendor</b> folder to your hosting site [here](http://rantenah.com/40Kz "here") or to any free hosting sites that you can use phpmailer. Just don't host your php files to infinityfree because they are blocking the phpmailer.</br></br>
9. Go to your [Google Account](https://myaccount.google.com/security "google account"), Turn on <b>2-Step Verification</b>. Then Click <b>App passwords</b>. In <b>Select App</b>, Select <b>Mail</b> or <b>Other <i>(Custom name)</i></b>, Name it anything you like, Select Device and click <b>Generate</b>. Copy the generated password.</br></br>
10. Open the <b>smtp-phpmailer</b> folder and open the <b>phpmailer.php</b> in your code editor.

<b>Edit the lines below</b>
$mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP(); // Send using SMTP
$mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth = true; // Enable SMTP authentication
<b> $mail->Username   = ' @gmail.com';           // Enter your SMTP username (Your gmail address) </b>
         <b>   $mail->Password = ' '; // Enter your SMTP password (Your generated app password) </b>
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port = 587;

            // Recipients
            $mail->setFrom($email, 'Contact From My Portfolio');
           <b> $mail->addAddress(' @gmail.com');     // Add a recipient (Your gmail address) </b>
            $mail->addReplyTo($email, $name);

11. Rename <b>phpmailer.php</b> to <b>index.php</b>. If in [000webhost](http://rantenah.com/40Kz "000webhost"), upload the <b>index.php</b> and <b>vendor</b> folder insidepublic_html.</br></br>

12. Install the <b>react-php-contact-email-form</b> repo. In your CMD inside type `npm install`.</br></br>
13. After installation, open the <b>src</b> folder, open <b>EmailForm.js</b> in your code editor and from the lines below, replace the URL with the URL of your phpmailer.

// open the request with the verb and the url. Replace (https://phpmailer-url/index.php) with your url phpmailer url do not touch <b> ?sendto=" +</b>

... xhr.open( "GET", "https://phpmailer-url/index.php?sendto=" + ...
</br></br> 12. In your CMD, type `npm start` and test the app.
</br></br>
<video width="100%" height="100%" controls autoplay muted>

<source src="https://github.com/zaids2641/react-gmailsmtp-phpmailer/tree/master/public/video/rect-php email.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>

Enjoy!!!
