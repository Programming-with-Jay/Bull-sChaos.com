var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBdx51im52J20aIhd-0rUfNcje7dj3imzg",
  authDomain: "bull-s-chaos.firebaseapp.com",
  projectId: "bull-s-chaos",
  storageBucket: "bull-s-chaos.appspot.com",
  messagingSenderId: "792102146933",
  appId: "1:792102146933:web:44eaf3a9498889597d393c",
  measurementId: "G-XSZZFE4G7D"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


