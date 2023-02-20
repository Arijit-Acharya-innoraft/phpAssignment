<?php
include "a1_form.php";
/**
 * This is a class for validating the uploaded image .
 * It accepts the image, stores at a location and then performs the validation.
 */
class imageValidation
{
  /**
   * This function uploads the image, does necessary validation.
   */
  function imageCheck(){
    // image upload
    $image_name = $_FILES['image']['name'];
    $image_temp = $_FILES['image']['tmp_name'];
    $image_size = $_FILES['image']['size'];
    $locationImg = "uploads/" . $image_name;
    $uploadOk = 1;
    // Size checking of the image
    if($image_size >= 153600 && $image_size <= 614400) {
      $uploadOk = 1;
    } 
    else {
      echo "Image is not in between 150kb to 600kb <br>";
      $uploadOk = 0;
    }
    // checking the file type
    $allowed = array('jpeg', 'png', 'jpg');
    $ext = pathinfo($image_name, PATHINFO_EXTENSION);
    if(!in_array($ext, $allowed)) {
      $uploadOk = 0;
      echo "Sorry, only jpg, png & jpeg file type is allowed.<br>";
    }
    // Checking if file already exists
    if(file_exists($locationImg)) {
      echo "Sorry, file already exists.<br>";
      $uploadOk = 0;
    }
    // final image displaying condition 
    $move = move_uploaded_file($image_temp, $locationImg);
    // checking if there is any error or not else printin the result.
    if($uploadOk == 0) {
      echo "Sorry, your file was not uploaded";
    } 
    else {
      if ($move) {
    ?>
        <img src="<?php echo $locationImg; ?>" style="height:150px;margin:0 auto"><br>
    <?php
      } 
      else {
        echo "Sorry, there was an error uploading your file.";
      }
    }
  }
}
// Creating an object of the class.
$img = new imageValidation;
// Calling the method of that class.
echo $img->imageCheck();
?>