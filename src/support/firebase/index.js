import Firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAaNKKy80W9pHxTt_BcomvwA_OfvfeagkA",
    authDomain: "managerapp-86dca.firebaseapp.com",
    databaseURL: "https://managerapp-86dca.firebaseio.com",
    projectId: "managerapp-86dca",
    storageBucket: "managerapp-86dca.appspot.com",
    messagingSenderId: "1046199915043",
    appId: "1:1046199915043:web:d13b0205c07be23f"
  };

export const Fire = Firebase.initializeApp(firebaseConfig)