 <?php
//  ini_set('session.save_path',realpath(dirname($_SERVER['DOCUMENT_ROOT']) . '/../session'));
  session_start();
  if (isset($_POST["submit"])) {
    $_SESSION['user'] = "Arijit";
    $_SESSION['password'] = "Innoraft";
    if ( $_SESSION['user'] == $_POST['name'] && $_SESSION['password'] == $_POST['password']) {
      $_SESSION['U_name']=$_SESSION['user'];
      $_SESSION['login']="done";
      header("location:welcome.php");
    } 
    else {
      $_SESSION['login'] == " ";
      session_unset();
      session_destroy();
      header("location:index.php");
      $_SESSION['msg'] = "Wrong User Name or Password";
    }
  }
?>