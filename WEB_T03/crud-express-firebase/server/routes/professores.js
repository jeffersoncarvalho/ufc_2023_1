import express from "express"
//var express = require('express');
var router = express.Router();
import ProfessorServices from "../services/professor.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
  ProfessorServices.list(req,res)
});

export default router
//module.exports = router;
