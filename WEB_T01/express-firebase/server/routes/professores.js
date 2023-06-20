import express from "express"
//var express = require('express');
var router = express.Router();
import ProfessoresService from "../services/professores.firebase.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
    ProfessoresService.list(req,res)
});

//module.exports = router;
export default router