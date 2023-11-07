const express = require('express');
const app = express();
const port = 4000;
const firebase = require("firebase/app");

//unique project config info for firebase
const firebaseConfig = {
    apiKey: "AIzaSyBbWzRna1YtOLptk5tu7ECpMNVVy9Bi-wg",
    authDomain: "dynamic-web-exercise-5-8b917.firebaseapp.com",
    projectId: "dynamic-web-exercise-5-8b917",
    storageBucket: "dynamic-web-exercise-5-8b917.appspot.com",
    messagingSenderId: "181549776622",
    appId: "1:181549776622:web:481ad2414000a3a563bdff"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
//const singlePostRoute = require("./routes/singlePost");
//const createPostRoute = require("./routes/createPost");

app.use("/", indexRoute);

app.listen(port, () => {
    console.log (`Exercise 5 on port ${port}`);
})