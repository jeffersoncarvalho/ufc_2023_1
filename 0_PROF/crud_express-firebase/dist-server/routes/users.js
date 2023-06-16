"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/listar', function (req, res, next) {
  res.json([{
    "nome": "Jefferson"
  }, {
    "nome": "Thomas"
  }]);
});

//module.exports = router;
var _default = router;
exports["default"] = _default;