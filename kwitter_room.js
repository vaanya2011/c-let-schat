const firebaseConfig = {
      apiKey: "AIzaSyAG8uQQeNP9oha-SSMiWACCu1n3tJdEX1E",
      authDomain: "kwitter-9b53a.firebaseapp.com",
      databaseURL:"https://kwitter-9b53a-default-rtdb.firebaseio.com/",
      projectId: "kwitter-9b53a",
      storageBucket: "kwitter-9b53a.appspot.com",
      messagingSenderId: "802942055710",
      appId: "1:802942055710:web:26e83ca99c1f8f43df450f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
