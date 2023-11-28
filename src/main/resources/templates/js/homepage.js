function checkLoggedIn() {
  const signedIn = localStorage.getItem('currentUser');
  if(signedIn >= 0) {
      document.getElementById("closet-link").style.visibility = "block";
      document.getElementById("logout-link").style.visibility = "block";
      document.getElementById("sign-up-link").style.visibility = "none";
  }
  else {
    document.getElementById("closet-link").style.visibility = "none";
    document.getElementById("logout-link").style.visibility = "none";
    document.getElementById("sign-up-link").style.visibility = "block";
  }
}

function clearLocalStorage() {
  localStorage.clear();
}
function test1(){
  console.log(localStorage.getItem("currentUser"));
}
test1();