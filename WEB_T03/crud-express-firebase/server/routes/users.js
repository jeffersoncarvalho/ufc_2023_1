import express from "express"
//var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource again and again!');
});

export default router
//module.exports = router;
