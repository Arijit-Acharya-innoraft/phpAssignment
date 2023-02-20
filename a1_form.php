<?php
/**
 * This is a class that validates the first name and last name and returns full name appending the two.
 */
class nameValidation{
  /**
   * This method is used to get the input of first name and last name from the user and concat together to form the full name and display it.
   * @param fname is taken to get the input of the first name.
   * @param lname is used to get the input of the last name.
   * These parameters will only accept characters and validation is done accordingly.
   */
  function nameCheck($fname, $lname)
  {
    // triming the input datas so that we don't get any leading or trailing spaces
    $fname = trim($fname, " ");
    $lname = trim($lname, " ");
    // Condition for checking empty input.
    if (empty($fname) || empty($lname)) {
      return "Field should not be empty <br>";
    } else {
      // Condition for checking characters
      if ((preg_match('/^[a-zA-Z]+$/', $fname) == 0) || (preg_match('/^[a-zA-Z]+$/', $lname) == 0)) {
        return "Only Characters expected <br>";
      } else {
        $fullName = $fname . " " . $lname;
        return $fullName;
      }
    }
  }
}
// Creating an object of the class.
$abc = new nameValidation;
// calling the method of that class.
echo $abc->nameCheck($_POST["fname"], $_POST["lname"]) . "<br>";

?>