//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA5os8PmGg0O6LNqyXM7-A846rGlkJlFIw",
      authDomain: "c93kwitter-94b51.firebaseapp.com",
      databaseURL: "https://c93kwitter-94b51-default-rtdb.firebaseio.com",
      projectId: "c93kwitter-94b51",
      storageBucket: "c93kwitter-94b51.appspot.com",
      messagingSenderId: "574753247721",
      appId: "1:574753247721:web:bf5eb84e3d5522960fbb78"
    };
    
    // Initialize Firebase 
    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");

function send(){
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
