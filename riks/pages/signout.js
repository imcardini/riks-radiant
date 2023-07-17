// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjRRoU_ksqBc0CtIXm6sFEvO4faDAXUog",
  authDomain: "riks-auth.firebaseapp.com",
  projectId: "riks-auth",
  storageBucket: "riks-auth.appspot.com",
  messagingSenderId: "411194986906",
  appId: "1:411194986906:web:13c4c8c8ef026822812a23"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

    }
    else {
        alert("you have been logged out");
        window.location = "index.html"
    }
  })

//   logout funtion

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("ghhsd")
    auth.signOut();
    alert("signed out")
    window.location = "index.html"
})

 