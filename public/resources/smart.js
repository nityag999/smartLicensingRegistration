
function validateLogin(){
    var users = {admin : 'admin123', user1 : 'user123' };

    var usernmae = document.getElementById("username");
    var password = document.getElementById("pwd");

    if(username.value.trim() == "" || password.value.trim() == ""){
      alert("Please enter the username and password.");
      return false;
    }else {
      if(username.value in users && users[username.value] == password.value){
        return true; 
      }else {
        alert("Please enter a valid username and password.");
        return false; 
      }
      return true;

    }
  } 

  function registrationPopup(){
      alert("Congratulations! Your submission is complete.");
      return;
  }

  function validateRegister(){

    var usernmae = document.getElementById("username");
    var password = document.getElementById("pwd");
    var hint = document.getElementById("hint");


    if(username.value.trim() == "" || password.value.trim() == "" || hint.value.trim() == ""){
      alert("Please enter the password, username, and hint.");
      return false;
    }else {
      return true;

    }
  } 
  function validateForgotPassword(){

    var usernmae = document.getElementById("username");
    var oldPassword = document.getElementById("oldPassword");
    var hint = document.getElementById("hintQuestion");
    var password = document.getElementById("pwd");



    if(username.value.trim() == "" || oldPassword.value.trim() == "" || hint.value.trim() == "" || password.value.trim() == ""){
      alert("Please enter the old password, username, hint, and password.");
      return false;
    }else {
      return true;

    }
  } 

  

