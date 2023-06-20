//var express = require('express');
import express from "express"
var router = express.Router();
import ProfessorServices from "../services/professores.firebase.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
    ProfessorServices.list(req,res)
});

//module.exports = router;
export default router