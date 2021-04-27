  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCIz1_BZbYFD8QAsCEzojYViLMRRlGiYqQ",
    authDomain: "h-vdpr.firebaseapp.com",
    projectId: "h-vdpr",
    storageBucket: "h-vdpr.appspot.com",
    messagingSenderId: "1033066153296",
    appId: "1:1033066153296:web:fe0783b7c67c7ba1769855"
      };
  // Initialize Firebase
  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
