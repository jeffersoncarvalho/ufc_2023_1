import express from "express"
//var express = require('express');
var router = express.Router();
import ProfessoresService from "../services/professores.firebase.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
    //ProfessoresService.list(req,res)
    ProfessoresService.listOnSnapshot(req,res)
});

router.post('/register', function(req,res,next){
    ProfessoresService.register(req,res)
})

router.get('/retrieve/:id', function(req, res, next) {
    ProfessoresService.retrieve(req,res)
});

router.put('/update/:id', function(req, res, next) {
    ProfessoresService.update(req,res)
});

router.delete('/delete/:id', function(req, res, next) {
    ProfessoresService.delete(req,res)
});


//module.exports = router;
export default router