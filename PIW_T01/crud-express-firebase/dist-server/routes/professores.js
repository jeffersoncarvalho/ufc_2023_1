"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _professoresFirebase = _interopRequireDefault(require("../services/professores.firebase.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var express = require('express');

var router = _express["default"].Router();
/* GET users listing. */
router.get('/listar', function (req, res, next) {
  _professoresFirebase["default"].list(req, res);
});

//module.exports = router;
var _default = router;
exports["default"] = _default;