<?php
session_start();
if (!isset($_SESSION['U_name'])) {
  header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assignment 3</title>
</head>
<link rel="stylesheet" href="form.css">

<body>
  <div class="form-section">
    <div class="container">
      <form action="a3_form.php" method="post" enctype="multipart/form-data">
        <h1>Registration Form</h1>
        <ul>
          <li class="form-item">
            <label for="Fname">First Name :</label>
            <input type="text" name="fname" id="fname" placeholder="First Name" onkeyup="callFunction1()" required >
            <span id="fname_error"></span>
          </li>
          <li class="form-item">
            <label for="Lname">Last Name :</label>
            <input type="text" name="lname" id="lname" placeholder="Last Name " onkeyup="callFunction2()" required>
            <span id="lname_error"></span>
          </li>
          <li class="form-item">
          <label for="Fullname">Full Name :</label>
            <input type="text" name="fullname" id="fullname" placeholder="Full Name" disabled>
          </li>
          <li class="form-item">
            <label for="image">Choose Image :</label>
            <input type="file" name="image" id="image" accept="image/*" onchange="img_valid()" required>
            <span id="image_error"></span>
          </li>
          <li class="form-item">
            <label for="marksheet">Enter subject & marks :</label>
            <textarea name="marksheet" id="marksheet" cols="30" rows="10" placeholder="Subject|Marks" onkeyup="textAreaValid()" ></textarea>
            <span id="marksheet_error"></span>
          </li>
          </ul>
        <button type="submit" name="submit" id="submit" disabled>Submit</button>
      </form>
    </div>
  </div>
  <script src="form.js"></script>
</body>

</html>