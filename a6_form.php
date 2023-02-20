<?php
include "a5_form.php";
/**
 * This is a class used for creatin and downloading pdf file.
 * It usses fpdf for doing so.
 */
class fpdf_cls {
  /**
   * Method for creating the pdf file.
   */
  function fpdfunction() {
    require_once("fpdf.php");
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $fullname = $fname . " " . $lname;
    $ph_no = $_POST['phone'];
    $email =$_POST['email'];
    $txt = $_POST["marksheet"];
    $text_area = explode("\n", $txt);
    for ($i = 0; $i < count($text_area); $i++) {
      $text_next = explode("|", $text_area[$i]);
      $sub[$i] = $text_next[0];
      if($text_next[1]=="") {
        $error =1;
      }
      else { 
        $marks[$i] = $text_next[1];
        $error=0;
      }
    }
    $image_name = $_FILES['image']['name'];
    $image_temp = $_FILES['image']['temp_name'];
    $locationImg = "uploads/" . $image_name;
    $move = move_uploaded_file($image_temp, $locationImg);?>
    <img src="<?php echo $locationImg; ?>" style="height:150px ;margin:0 auto">
      <?php
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('arial','',12);
    $pdf->Cell(0,10,"Contact Details",1,1,'C');
    $pdf->Cell(0,10,"Image",1,1,'C');
    $pdf->Cell(190,50,"",1,1,);
    $pdf->Image($locationImg,80,30,50,50);
    $pdf->Cell(45,10,"First Name",1,0);
    $pdf->Cell(50,10,$fname,1,0);
    $pdf->Cell(45,10,"Last Name",1,0);
    $pdf->Cell(50,10,$lname,1,0);
    $pdf->Ln();
    $pdf->Cell(95,10,"Full Name",1,0);
    $pdf->Cell(95,10,$fullname,1,0);
    $pdf->Ln();
    $pdf->Cell(95,10,"Phone Number",1,0);
    $pdf->Cell(95,10,$ph_no,1,0);
    $pdf->Ln();
    $pdf->Cell(95,10,"Email",1,0);
    $pdf->Cell(95,10,$email,1,0);
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,"Subject Details",1,1,'C');
    $pdf->Cell(95,10,"Subject",1,0);
    $pdf->Cell(95,10,"Marks",1,0);
    $pdf->Ln();
    for ($i = 0; $i < count($sub); $i++) {
      $pdf->Cell(95,10,$sub[$i],1,0);
      $pdf->Cell(95,10,$marks[$i],1,0);
      $pdf->Ln();
    }
    $file =time().'.pdf';
    ob_start();
    $pdf->output($file,'D');
    ob_end_flush();
  }
}
// Creating an object of a class.
$pdf_cls = new fpdf_cls;
// Callin method of that class.
$pdf_cls->fpdfunction();
?>