// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDLlmcFG1RFObr5uhpqGTZh8HP8RxlROss",
      authDomain: "chatter-711c3.firebaseapp.com",
      databaseURL: "https://chatter-711c3-default-rtdb.firebaseio.com",
      projectId: "chatter-711c3",
      storageBucket: "chatter-711c3.appspot.com",
      messagingSenderId: "570049970632",
      appId: "1:570049970632:web:fd73f72a7ac073bcd3c0fd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addroom()
      {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding roomname"
        });
        localStorage.setItem("room_name",room_name);
        window.location="chatter_page.html";
      }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("room name-"+Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML +=row;
        });});}
  getData();
  function redirectToRoomName(name)
  {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chatter_page.html";
  }
  
      //End code
      });});}
getData();
