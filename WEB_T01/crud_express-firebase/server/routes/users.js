import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/listar', function(req, res, next) {
  res.json([{"nome":"Jefferson"},{"nome":"Thomas"}]);
});

//module.exports = router;
export default router 