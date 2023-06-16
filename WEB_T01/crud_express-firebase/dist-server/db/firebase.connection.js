"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-XkgTAsmSN3Y65WjJAleqo9PryJgMJtc",
  authDomain: "web-2023-1-prof.firebaseapp.com",
  projectId: "web-2023-1-prof",
  storageBucket: "web-2023-1-prof.appspot.com",
  messagingSenderId: "63313888693",
  appId: "1:63313888693:web:d359078269650c454ec5fc"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;