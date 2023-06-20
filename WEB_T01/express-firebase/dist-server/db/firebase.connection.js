"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

//import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2AILmwfvAn_vJMhmPPDel_LONIZOE4Ho",
  authDomain: "webt03-2023-1.firebaseapp.com",
  projectId: "webt03-2023-1",
  storageBucket: "webt03-2023-1.appspot.com",
  messagingSenderId: "463780550463",
  appId: "1:463780550463:web:dfca625921e8e27ec4658a"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
//get firestore service
var db = (0, _firestore.getFirestore)(app);
//export firestore service
var _default = db;
exports["default"] = _default;