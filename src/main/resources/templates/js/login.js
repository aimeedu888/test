const clearErrorMsgs = () => {
  const errorMsgs = document.getElementsByTagName("small");
  for (var i = 0; i < errorMsgs.length; i++) {
    errorMsgs[i].style.visibility = "hidden";
  }
}

document.querySelector('#login-form').onsubmit = () => {
  console.log("Attempting to submit login form");
  clearErrorMsgs();
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");
  const authError = document.getElementById("authError");

  var isFilled = true;
  if (username.value.trim() == "") {
    userError.style.visibility = "visible";
    isFilled = false;
  }
  if (password.value.trim() == "") {
    passError.style.visibility = "visible";
    isFilled = false;
  }
  if (isFilled) {
    if (autheticate(username.value, password.value)) {
      //ADD LOGIC TO GO TO MAIN HOME PAGE
      return true;
    }
    else {
      authError.style.visibility = "visible";
      return false;
    }
  }
  else {
    return false;
  }

}

const autheticate = (username, password) => {
  console.log("Autheticating username and password combination");
  //CALL API FUNCTION HERE
  const temp = validateUser(username, password);
   // 1 means found, 0 means username not found, -1 means password incorrect
  if (temp == "1"){
	  return true;
  }
  else{
	  return false;
  }
}

function setLocalStorage() {
  localStorage.setItem("currentUser", -1);
}