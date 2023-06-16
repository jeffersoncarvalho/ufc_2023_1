"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _professorServices = _interopRequireDefault(require("../services/professor.services.firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/listar', function (req, res, next) {
  _professorServices["default"].list(req, res);
});
router.post("/register", function (req, res, next) {
  _professorServices["default"].register(req, res);
});
router.get("/retrieve/:id", function (req, res, next) {
  _professorServices["default"].retrieve(req, res);
});
router.put("/update/:id", function (req, res, next) {
  _professorServices["default"].update(req, res);
});
router["delete"]("/delete/:id", function (req, res, next) {
  _professorServices["default"]["delete"](req, res);
});

//module.exports = router;
var _default = router;
exports["default"] = _default;