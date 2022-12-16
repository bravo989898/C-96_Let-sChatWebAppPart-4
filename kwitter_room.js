//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAF2H5GIHuFMUKh1BfNl_VyONR9gOqC1_4",
  authDomain: "let-s-chat-web-app-18e7c.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-18e7c-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-18e7c",
  storageBucket: "let-s-chat-web-app-18e7c.appspot.com",
  messagingSenderId: "897928092137",
  appId: "1:897928092137:web:a73f8690c40bb7fa04d378"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
word = "<h4 id='word_display'> Welcome "+ user_name + "!" + "</h4>";
document.getElementById("name").innerHTML = word;

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding roomName"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name-" + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
  
   

