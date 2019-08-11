document.getElementById("signup_div").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submitted");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
} );






  