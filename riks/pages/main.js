// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyBjRRoU_ksqBc0CtIXm6sFEvO4faDAXUog",
    authDomain: "riks-auth.firebaseapp.com",
    projectId: "riks-auth",
    storageBucket: "riks-auth.appspot.com",
    messagingSenderId: "411194986906",
    appId: "1:411194986906:web:13c4c8c8ef026822812a23"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signupButton = document.getElementById("signup")

signupButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
         alert("user signed up successfully")
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
        window.location = "indexx.html";
    })
    .catch((error) => {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
        alert(errorMessage)
    });
});


//Signin Function
let signInButton = document.getElementById("signin")

signInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signin click");
    
    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");
    const form = document.getElementById("form")

    auth 
    .signInWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("user", user.email);
        alert("You have signed in sucessfully...Have a wonderful time ")
        window.location = "home.html";
       
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Wrong Email Address or Passord")
        
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.email;
        var users = document.getElementById("user");
        users.appendChild(text);
        console.log(users);
    }
    else {

    }
});



const textElement = document.getElementById('text');
const text = "Sign in to Your Account";
let index = 0;
const typeDelay = 200;

function typeText() {
  const currentChar = text[index];
  const isSpace = currentChar === ' ';
  const space = isSpace ? '&nbsp;' : ''; // Use non-breaking space for HTML rendering

  textElement.innerHTML += `${space}${currentChar}`;
  index++;

  if (index < text.length) {
    setTimeout(typeText, typeDelay); // Adjust the delay between each character typing
  }
}

typeText();
