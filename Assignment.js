/**
 * This is a function used to call other functoins for fname input
 */
function callFunction1() {
  var fName = (document.getElementById("fname").value);
  fName = trimFunction(fName);
  liveFunction();
  fname_err_empty = checkEmpty(fName);
  fname_err_valid=userNameValidation(fName);
  
  if((fname_err_empty == 0)&&(fname_err_valid == true)) {
    document.getElementById("submit").disabled = false;
    document.getElementById("fname_error").innerHTML = "";
    document.getElementById("fname").style.border ="1px solid black";
  }
  else if(fname_err_valid == false) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("fname_error").innerHTML="Only character are allowed";
  }
  else{
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("fname_error").innerHTML="Enter your first name";
  }
}

/**
 * This is a function that calls other function related to last name input.
 */
function callFunction2() {
  var lName = (document.getElementById("lname").value);
  lName = trimFunction(lName);
  liveFunction();
  lname_err_empty = checkEmpty(lName);
  lname_err_valid=userNameValidation(lName);

  if((lname_err_empty == 0)&&(lname_err_valid == true)) {
    document.getElementById("submit").disabled = false;
    document.getElementById("lname_error").innerHTML="";
    document.getElementById("lname").style.border ="2px solid black";

  }
  else if(lname_err_valid == false) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("lname_error").innerHTML="Only character and spaces are allowed";
  }
  else{
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("lname_error").innerHTML="Enter your user name";
  }
}

/**
 * This is a function used to trim the leading and lagging spaces in the input if present any.
 * It is not to be used for password field.
 * @param userName, taken from callFunctions , which take userName from the input field
 */
function trimFunction(Name) {
  return (Name.trim());
}

/**
* Function to check if the input field is empty.
* @param data , this parameter takes data to check if it is empty or not.
*/
function checkEmpty(data) {
  if (data.length == 0) {
    return 1;
  }
  else {
    return 0;
  }
}


// live function extension
function liveFunction() {
  // live name output function
  first_name_variable = (document.getElementById("fname").value).trim();
  last_name_variable = (document.getElementById("lname").value).trim();
  document.getElementById("fullname").value = first_name_variable + " " + last_name_variable;








// function for img upload
function imgValid() {
  var fileInput = document.getElementById('img');
  imgSizeCheck(fileInput);
  imageTypeCheck(fileInput);
}
// function for input of marks
function textAreaValid() {
  var txt = document.getElementById("sub-marks");
  marks_sub_Valid(txt);

}

// function for phone number

function phone_number() {
  var phone = document.getElementById("phone").value;
  phoneValidation(phone);

}





  // Enabling condition for the submit button
  if ((first_name_variable.length == 0) || (last_name_variable.length == 0)) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("submit").style.color = "grey";
  }
  else {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.backgroundColor = "rgb(0, 145, 255)";
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.border = "none";
  }

}

/**
 * This is a function that validates the user name.
 * Throws error if the user enters any special character.
 * @param userName, this parameter is taken from the callFunctions, to take the name input from user.
 */
function userNameValidation(userName) {
  return (/^[A-Za-z]*$/.test(userName)) ;
}

// image validation
function imgSizeCheck(fi) {
  // const fi = document.getElementById('img');
  // Check if any file is selected.
  if (fi.files.length > 0) {
    for (const i = 0; i <= fi.files.length - 1; i++) {

      const fsize = fi.files.item(i).size;
      const file = Math.round((fsize / 1024));
      // The size of the file.
      if (file >= 300) {
        document.getElementById("imageError").innerHTML = "* File too Big, please select a file less than 300kb.";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.backgroundColor = "white";
        document.getElementById("submit").style.color = "grey";

      }
      else if (file < 150) {
        document.getElementById("imageError").innerHTML = "* File too small, please select a file greater than 150kb.";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.backgroundColor = "white";
        document.getElementById("submit").style.color = "grey";
      }
      else {
        document.getElementById("lname_error").innerHTML = "";
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.backgroundColor = "rgb(0, 145, 255)";
        document.getElementById("submit").style.color = "white";
        document.getElementById("submit").style.border = "none";
      }
    }
  }
}

function imageTypeCheck(filePath) {
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (!allowedExtensions.exec(filePath)) {
    document.getElementById("imageError").innerHTML = "* Sorry, only jpg, png & jpeg file type is allowed.";
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("submit").style.color = "grey";
  }
  else {
    document.getElementById("lname_error").innerHTML = "";
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.backgroundColor = "rgb(0, 145, 255)";
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.border = "none";
  }
}

// subject-marks validation
// function marks_sub_Valid(txt) {
//   a=0;
//   b=0;
//   text_area = txt.split("\n");
//   for (i = 0; i < text_area.length; i++) {
//     text_next = text_area.split("|");
//     if(i%2==0){
//       sub[a] = text_next[i];
//       a++;
//     }
//     else{
//       marks[b] = text_next[i];
//       b++;
//     }
//   }
//   for (i = 0; i < sub.length; i++) {
//     if ((/^[A-Za-z]*$/.test(sub[i])) == true) {
//       document.getElementById("textarea_error").innerHTML = "";
//       document.getElementById("submit").disabled = false;
//       document.getElementById("submit").style.backgroundColor = "rgb(0, 145, 255)";
//       document.getElementById("submit").style.color = "white";
//       document.getElementById("submit").style.border = "none";
//     }
//     else{
//       document.getElementById("textarea_error").innerHTML = "* Only Characters are expexcted.";
//       document.getElementById("submit").disabled = true;
//       document.getElementById("submit").style.backgroundColor = "white";
//       document.getElementById("submit").style.color = "grey";
//     }
//   }
// }


// phone number validation
function phoneValidation(phone) {
  if (phone.length > 0) {
    if (!phone.startsWith("+91")) {
      phone = phone.replace(/^/, '+91');
      document.getElementById("phone").value = phone;
    }
    else {
      if (phone.startsWith("+9")) {
        phone = phone + "1";
        document.getElementById("phone").value = phone;
      }
      else if (phone.startsWith("+")) {
        phone = phone + "91";
        document.getElementById("phone").value = phone;
      }
    }
  }
}
