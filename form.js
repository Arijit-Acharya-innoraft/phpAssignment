// First Name & Last Name Validation.
/**
 * This is a function used to call other functoins for fname input
 */
function callFunction1() {
  var fName = (document.getElementById("fname").value);
  fName = trimFunction(fName);
  liveFunction();
  fname_err_empty = checkEmpty(fName);
  fname_err_valid = userNameValidation(fName);

  if ((fname_err_empty == 0) && (fname_err_valid == true)) {
    document.getElementById("submit").disabled = false;
    document.getElementById("fname_error").innerHTML = "";
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.borderColor = "black";
  }
  else if (fname_err_valid == false) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("fname_error").innerHTML = "Only character are allowed";
  }
  else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("fname_error").innerHTML = "Enter your first name";
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
  lname_err_valid = userNameValidation(lName);

  if ((lname_err_empty == 0) && (lname_err_valid == true)) {
    document.getElementById("submit").disabled = false;
    document.getElementById("lname_error").innerHTML = "";
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.borderColor = "black";


  }
  else if (lname_err_valid == false) {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("lname_error").innerHTML = "Only character and spaces are allowed";
  }
  else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("lname_error").innerHTML = "Enter your user name";
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
  return (/^[A-Za-z]*$/.test(userName));
}

// Image Validation
/**
 * This function calls two other function which checks the image size and the type .
 */
function img_valid() {
  imageTypeCheck();
  imgSizeCheck();

}
/**
 * this function checks if the file is in between 150-600 kb.
 */
function imgSizeCheck() {
  var fileUpload = document.getElementById("image");
  var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
  if (size <= 600 && size >= 150) {
    document.getElementById("submit").disabled = false;
    document.getElementById("image_error").innerHTML = "";
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.borderColor = "black";
  }
  else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("image_error").innerHTML = "Image size must be between 150-500 KB";
  }
}

/**
 * This function checks if the file is in jpg, jpeg or png format.
 */
function imageTypeCheck() {
  var fileInput = document.getElementById('image').value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (!allowedExtensions.exec(fileInput)) {
    document.getElementById("image_error").innerHTML = "* Sorry, only jpg, png & jpeg file type is allowed.";
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
  }
  else {
    document.getElementById("image_error").innerHTML = "";
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.borderColor = "black";
  }
}

// marksheet validation


// phone no validation
/**
 * The given function validates the phone no that the user has entered.
 * It adds +91 if the string is empty
 */
function phoneValidation() {
  phNo = document.getElementById("phone").value;
  var numbers = /^[0-9 +]+$/;
  if (numbers.test(phNo)) {
    if (!phNo.startsWith("+91")) {
      document.getElementById("phone_error").innerHTML = "* Sorry! the number should start with '+91'.";
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").style.color = "red";
      document.getElementById("submit").style.borderColor = "red";
    }
    else {
      if (phNo.length != 13) {
        document.getElementById("phone_error").innerHTML = "*Invalid number.";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.color = "red";
        document.getElementById("submit").style.borderColor = "red";
      }
      else {
        document.getElementById("phone_error").innerHTML = "";
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.color = "black";
        document.getElementById("submit").style.borderColor = "black";
      }
    }
  }
  else {
    document.getElementById("phone_error").innerHTML = "*Only numbers are expected.";
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";

  }
}

// Email validation
/**
 * This function verifies email that is it of the right format or not.
 */
function validateEmail() {
  var inpEmail = document.getElementById("email").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inpEmail.length > 0) {
    if (validRegex.test(inpEmail)) {
      document.getElementById("email_error").innerHTML = "";
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").style.color = "black";
      document.getElementById("submit").style.borderColor = "black";
    }
    else {
      document.getElementById("email_error").innerHTML = "*Wrong email format.";
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").style.color = "red";
      document.getElementById("submit").style.borderColor = "red";
    }
  }
  else {
    document.getElementById("email_error").innerHTML = "*Enter your email id.";
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
  }
}