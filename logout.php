<?php
// ini_set('session.save_path',realpath(dirname($_SERVER['DOCUMENT_ROOT']) . '/../session'));
session_start();

if(isset($_SESSION['login'])){
  header('Location: index.php');

}
session_unset();
session_destroy();
// session_write_close();
// setcookie(session_name(),'',0,'/');
// session_regenerate_id(true);
header('Location: index.php');
?>