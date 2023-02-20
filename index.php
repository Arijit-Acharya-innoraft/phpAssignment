
<?php
session_start();
if(isset($_GET["q"])){
  // Fetching the value of the q and storing it in var. 
  $var =$_GET["q"];
  switch ($var) {
    case 1:
      header("location:A1.php");
      break;
    case 2:
      header("location:A2.php");
      break;
    case 3:
      header("location:A3.php");
      break;
    case 4:
      header("location:A4.php");
      break;
    case 5:
      header("location:A5.php");
      break;
    case 6:
      header("location:A6.php");
      break;
    case 7:
      header("location:index.php");
      break;
    default:
      header("location:welcome.php");
    }
  // }
  // else{
  //   $_SESSION['err_msg'] = "log in first";
  // }
}


 ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Log-in</title>
  <link rel="shortcut icon" href="images_used/1024px-Signin_font_awesome.png" class="title-image" type="image/x-icon">
</head>
<link rel="stylesheet" href="index.css">

<body>
  <div class="form-section">
    <div class="container">
      <form action="action.php" method="post"  enctype="multipart/form-data">
        <h2>Log-In</h2>
        <span>
          
        </span>
        <ul>
          <li class="form-item" id="name-item">
            <label for="username">User Name : </label>
            <input type="text" name="name" id="name" onkeyup="callFunctions()" required >
          </li>
          <span id="name_error"></span>
          <li class="form-item">
            <label for="password">Password : </label>
            <input type="password" name="password" id="password" required >
          </li>
        </ul>
        <button type="submit" id="submit" name="submit"  >Submit</button>
        <span>
          <?php if(isset($_SESSION['msg'])){
          echo $_SESSION['msg'];
          } ?>
        </span>
      </form>
    </div>
  </div>
  <script src="index.js"></script>
</body>
</html>