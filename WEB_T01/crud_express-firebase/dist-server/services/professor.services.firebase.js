"use strict";

var _firestore = require("firebase/firestore");
var _firebaseConnection = _interopRequireDefault(require("../db/firebase.connection.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProfessorService = /*#__PURE__*/function () {
  function ProfessorService() {
    _classCallCheck(this, ProfessorService);
  }
  _createClass(ProfessorService, null, [{
    key: "list",
    value: function list(request, response) {
      (0, _firestore.getDocs)((0, _firestore.collection)(_firebaseConnection["default"], "professores")).then(function (professorSnapshot) {
        var professores = [];
        professorSnapshot.forEach(function (professor) {
          var _id = professor.id;
          var _professor$data = professor.data(),
            nome = _professor$data.nome,
            curso = _professor$data.curso,
            titulacao = _professor$data.titulacao,
            ai = _professor$data.ai;
          //console.log(professor.data)
          professores.push({
            _id: _id,
            nome: nome,
            curso: curso,
            titulacao: titulacao,
            ai: ai
          });
        });
        response.json(professores);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);
  return ProfessorService;
}();
_defineProperty(ProfessorService, "list_on_snapshot", function (request, response) {
  var q = (0, _firestore.query)((0, _firestore.collection)(_firebaseConnection["default"], "professores"));
  var unscribe = (0, _firestore.onSnapshot)(q, function (querySnaphot) {
    var professores = [];
    querySnaphot.forEach(function (document) {
      var _id = document.id;
      var _document$data = document.data(),
        nome = _document$data.nome,
        curso = _document$data.curso,
        titulacao = _document$data.titulacao,
        ai = _document$data.ai;
      professores.push({
        _id: _id,
        nome: nome,
        curso: curso,
        titulacao: titulacao,
        ai: ai
      });
    } //document
    ); //forEach
    response.json(professores);
  } //querySnaphot
  ); //onSnapshot
});
_defineProperty(ProfessorService, "register", function (request, response) {
  (0, _firestore.addDoc)((0, _firestore.collection)(_firebaseConnection["default"], 'professores'), request.body).then(function (docRef) {
    response.json({
      _id: docRef.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
_defineProperty(ProfessorService, "retrieve", function (request, response) {
  (0, _firestore.getDoc)((0, _firestore.doc)(_firebaseConnection["default"], "professores", request.params.id)).then(function (docSnap) {
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data())
      response.json(docSnap.data());
    }
  })["catch"](function (error) {
    return console.log(error);
  });
});
_defineProperty(ProfessorService, "update", function (request, response) {
  (0, _firestore.updateDoc)((0, _firestore.doc)(_firebaseConnection["default"], "professores", request.params.id), request.body).then(function () {
    response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
_defineProperty(ProfessorService, "delete", function (request, response) {
  (0, _firestore.deleteDoc)((0, _firestore.doc)(_firebaseConnection["default"], "professores", request.params.id)).then(function () {
    return response.json({
      _id: request.params.id
    });
  })["catch"](function (error) {
    return console.log(error);
  });
});
module.exports = ProfessorService;