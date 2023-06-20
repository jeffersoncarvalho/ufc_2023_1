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
  apiKey: "AIzaSyBK16_1fnhm5JclBfIvPaqhPBCT54ZJ1zk",
  authDomain: "piw-2023-1.firebaseapp.com",
  projectId: "piw-2023-1",
  storageBucket: "piw-2023-1.appspot.com",
  messagingSenderId: "972301098822",
  appId: "1:972301098822:web:90778e4ebcea79444f0f47"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;