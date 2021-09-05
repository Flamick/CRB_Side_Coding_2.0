<?php
    if (isset($_POST['submit'])) {
        $firstName = $_POST['first-name']; 
        $secretKey = "6LeTmEYcAAAAADb3vQHyZPmwYgMSTEU2PGx3tdr-";
        $responseKey = $_POST['g-recaptcha-response'];
        $userIP = $_SERVER['REMOTE_ADDR'];

        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
        $response = file_get_contents($url);
        $response = json_decode($response);
        if ($response->success)
            echo "Verification success. Your name is: $firstName"
        else 
            echo "Verification failed!"
    }
?>