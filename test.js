// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvczcDpxG0nIWYMR4Df_hPM4LiHGPnop4",
    authDomain: "project-one-54fbd.firebaseapp.com",
    databaseURL: "https://project-one-54fbd.firebaseio.com",
    projectId: "project-one-54fbd",
    storageBucket: "project-one-54fbd.appspot.com",
    messagingSenderId: "945661053221"
};
firebase.initializeApp(config);
var database = firebase.database();


function testing() {
    var tokenId = "-LN16dELB_6OgZ9hNyoA";
    // var tokenId = "-LMzchf_m6k1zq2m";
    localStorage.setItem("token", tokenId);
    var localToken = localStorage.getItem("token");
    var favoriteObject = {
        name: "great"
    }

    database.ref().once("value").then(function (snapshot) {
        console.log(Object.keys(snapshot.val()));
        var firebaseTokenIds = Object.keys(snapshot.val());
        var firebaseArray = firebaseTokenIds.splice(",");
        console.log(firebaseArray);
        console.log("looking for local storage token" + firebaseArray.indexOf(localStorage.getItem("token")));

        if (firebaseArray.indexOf(localToken) === -1) {
            database.ref().push({ favorite: "favorite stuff" })
            console.log("added a new id, somehow get the Id");
        }
        else {
            database.ref(`${localToken}/favorite`).once("value").then(function(snapshot){
                console.log(snapshot.val());
                var favorites = [snapshot.val()];
                console.log(favorites);
                
                favorites.push(favoriteObject);

                // snapshot.push(favoriteObject)
            database.ref(`${localToken}/favorite`).set(favorites);
            // console.log("added to firebase exisitng")
            });
        }



        // if (snapshot.val()) {
        //     console.log("add to exiting");
        // }
        // else {
        //     console.log("add to database");
        //     localStorage.setItem("token", tokenId);
        // }

    });

};

testing();
