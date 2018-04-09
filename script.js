let config = {
    apiKey: "AIzaSyAAKd3L5HkVbBxhURcm4oiQWh1O1HPxbs8",
    authDomain: "fir-sdk-ea64b.firebaseapp.com",
    databaseURL: "https://fir-sdk-ea64b.firebaseio.com",
    projectId: "fir-sdk-ea64b",
    storageBucket: "fir-sdk-ea64b.appspot.com",
    messagingSenderId: "245907313834"
};

firebase.initializeApp(config);
var ref = firebase.database().ref('Characters');

function writeUserData(Char) {
    firebase.database().ref('Characters/' + name).push({
        name: Char,
    });
}

function save() {
    writeUserData(document.getElementById("Char").value);
    window.location.reload();
}

ref.once('value', function (snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.val().name);
        document.getElementById('character').innerHTML += '<li>' + childSnapshot.val().name + '</li>';
    });
});
