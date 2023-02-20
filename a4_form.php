<?php
include "a3_form.php";
/**
 * Class for validating phone number.
 */
class phone
{
  /**
   * This function stores the phone number input by the userand validates it.
   * It checks if there is any anything apart from number and if the 1st no is between 0-9 or not. 
   */
  function phone_validation()
  {
    $ph_no = $_POST["phone"];
    $ph_length = strlen($ph_no);
    if (!preg_match('/^[1-9 +][0-9]{0,9}$/', $ph_no)) {
      if (!str_starts_with($ph_no, '+91')) {
        echo "Sorry! the number should start with '+91'";
      } else {
        if ($ph_length != 13) {
          echo "Invalid number";
        } else {
          echo "<br>" . $ph_no . "<br>";
        }
      }
    } else {
      echo "Only numbers are expected";
    }
  }
}
// Creating an object of the class.
$ph =new phone;
// Callin the method of the class.
$ph->phone_validation();
?>