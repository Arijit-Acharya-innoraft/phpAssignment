/**
 * Calling All other function using this function.
 */
function callFunctions() {
  var userName = (document.getElementById("name").value);
  userName = trimFunction(userName);
  u_err_empty = checkEmpty(userName);
  u_err_valid=userNameValidation(userName);
  actionFunction(u_err_empty,u_err_valid);
}

/**
 * This is a function used to trim the leading and lagging spaces in the input if present any.
 * It is not to be used for password field.
 * @param userName, taken from callFunctions , which take userName from the input field
 */
function trimFunction(userName) {
  return (userName.trim());
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

/**
 * This is a function that validates the user name.
 * Throws error if the user enters any special character.
 * @param userName, this parameter is taken from the callFunctions, to take the name input from user.
 */
function userNameValidation(userName) {
  return (/^[A-Za-z\s]*$/.test(userName)) ;
}

/**
 * This is Action Function
 * @param u_err, this stores either 0 or 1 as value, if error is present while entering user name then it throws 1 else 0.
 *  @param p_err, this stores either 0 or 1 as value, if error is present while entering the password then it throws 1 else 0.
 */

function actionFunction(u_err_empty,u_err_valid) {
  if(u_err_empty == 0 && u_err_valid == true) {
    document.getElementById("submit").disabled = false;
    document.getElementById("name_error").innerHTML="";
    document.getElementById("name-item").style.border ="1px solid skyblue";
    // document.getElementById("submit").style.backgroundColor = "no-repeat";
    document.getElementById("submit").style.color = "skyblue";
    document.getElementById("submit").style.borderColor = "skyblue";
  }
  else if ( u_err_valid == false) {
    document.getElementById("submit").disabled = true;
    // document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("name-item").style.border ="3px solid red";
    document.getElementById("name_error").innerHTML="Only character and spaces are allowed";
  }
  else {
    document.getElementById("submit").disabled = true;
    // document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("submit").style.color = "red";
    document.getElementById("submit").style.borderColor = "red";
    document.getElementById("name-item").style.border ="3px solid red";
    document.getElementById("name_error").innerHTML="Enter your user name";
  }
}