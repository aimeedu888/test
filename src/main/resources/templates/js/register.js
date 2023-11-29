const emailPattern = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
const clearErrorMsgs = () => {
  const errorMsgs = document.getElementsByTagName("small");
  for (var i = 0; i < errorMsgs.length; i++) {
    errorMsgs[i].style.visibility = "hidden";
  }
}

document.querySelector('#register-form').onsubmit = () => {
  console.log("Attempting to submit register form");
  clearErrorMsgs();
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const passwordR = document.getElementById("passwordR");

  const emailError = document.getElementById("emailError");
  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");
  const passRError = document.getElementById("passRError");

  var isValid = true;
  if (email.value.trim() == "" || !emailPattern.test(email.value)) {
    emailError.style.visibility = "visible";
    isValid = false;
  }
  if (username.value.trim() == "") {
    userError.style.visibility = "visible";
    isValid = false;
  }
  if (password.value.trim() == "") {
    passError.style.visibility = "visible";
    isValid = false;
  }
  else {
    if (passwordR.value != password.value) {
      passRError.style.visibility = "visible";
      isValid = false;
    }
  }
  if (isValid) {
    addNewUser(email.value, username.value, password.value).then(id)
    localStorage.setItem("currentUser", ID);
    console.log(localStorage.getItem("currentUser") + " added");
    return false;
  }
  else {
    return false;
  }

}

const addNewUser = (email, username, password) => {
  console.log("Uploading new user: " + email + " " + username + " " + password);
  //CALL API FUNCTION HERE
  const ID = addUser(username, password, email); 
  return ID;
}