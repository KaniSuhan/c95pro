
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA5os8PmGg0O6LNqyXM7-A846rGlkJlFIw",
      authDomain: "c93kwitter-94b51.firebaseapp.com",
      projectId: "c93kwitter-94b51",
      databaseURL: "https://c93kwitter-94b51-default-rtdb.firebaseio.com",
      storageBucket: "c93kwitter-94b51.appspot.com",
      messagingSenderId: "574753247721",
      appId: "1:574753247721:web:bf5eb84e3d5522960fbb78"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username;


function add_room(){
var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
});});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      console.log(name);
      }
      
      
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html";
      }
