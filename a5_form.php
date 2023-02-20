<?php
include "a4_form.php";

/**
 * Class for email validation.
 */
class email{
    // Method for checking the email syntax.
    function email_syntax()
    {
      $email = $_POST["email"];
      if (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $email)) {
        echo "Wrong Email address <br>";
      } 
    }
    // Method  for validatin the email address.
    function validate_email()
    {
      global $email_error;
      global $email_validated;
      $curl = curl_init();
      $email = $_POST["email"];
      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.apilayer.com/email_verification/check?email=" . $email,
        CURLOPT_HTTPHEADER => array(
          "Content-Type: text/plain",
          "apikey: RJnR1SkG1PVl3JMx69149MvGuMLcx8Sb"
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET"
      ));
      $response = curl_exec($curl);
      $validationResult = json_decode($response, true);
      if ($validationResult['format_valid'] && $validationResult['smtp_check']) {
        echo $email;
      } else {
        echo "Not valid Email";
      }
      curl_close($curl);
    }
  }
// Creating an object of the class.
$eml = new email;
// Calling the method of that object
$eml->email_syntax();
// Calling the method of that object
echo $eml->validate_email();
  
?>