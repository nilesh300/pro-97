var firebaseConfig = {
      apiKey: "AIzaSyDS5WZXn76fWIWJPDy-8xFMp0b0sEyvn4I",
      authDomain: "sweb-f29c8.firebaseapp.com",
      databaseURL: "https://sweb-f29c8-default-rtdb.firebaseio.com",
      projectId: "sweb-f29c8",
      storageBucket: "sweb-f29c8.appspot.com",
      messagingSenderId: "482360370345",
      appId: "1:482360370345:web:3ff225fc9ff394259675b8"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name- " + Room_names);
                  row = "<div class='room_name'id" + Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();
function redirectToRoomName(name)
{ 
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}