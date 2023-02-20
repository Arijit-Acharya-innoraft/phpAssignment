<?php
    include "a2_form.php";
    /**
 * marksheet class, creates and stores subject and marks.
 */
class marksheet {
  /**
   * This function stores the marks and subject and displays it.
   */
    function marks_storing() {
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
      ?>
      <table>
        <tr>
          <?php 
          if($error==0){
            for ($i = 0; $i < count($sub); $i++) {
              if(preg_match('/^[a-zA-Z]+/', $sub[$i]) == 0) {
                echo "Subject Name Wrong<br>";
              }
              else {
              ?>
              <td><?php echo $sub[$i] . "<br>";?></td>
              <?php
              }
            }
          }
          ?>
        </tr>
        <tr>
        <?php
        if($error==0) {
          for ($i = 0; $i < count($marks); $i++) {
            if(preg_match('/^[0-9]+/', $marks[$i]) == 0) {
              echo "Marks Entered Wrong<br>";
            }
            else {
            ?>
            <td><?php echo $marks[$i] . "<br>"; ?></td> 
            <?php
            }
          }
        }
        else {
          echo "Didn't enter marks or subject";
        } 
        ?>
        </tr>
      </table>
      <?php
    }
    
  }
// Creating an object of the class
  $mksht = new marksheet;
// Calling the method.
  $mksheet_arr= $mksht->marks_storing();

?>