"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

//import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDs5UppU3lUiXuphi-UiWBeTeT6cnU0cpE",
  authDomain: "web-t03-2023-1.firebaseapp.com",
  projectId: "web-t03-2023-1",
  storageBucket: "web-t03-2023-1.appspot.com",
  messagingSenderId: "80044161890",
  appId: "1:80044161890:web:02f58c052bb09e92f2ca3b"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;