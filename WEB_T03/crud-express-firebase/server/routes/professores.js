import express from "express"
//var express = require('express');
var router = express.Router();
import ProfessorServices from "../services/professor.services";

/* GET users listing. */
router.get('/listar', function(req, res, next) {
  ProfessorServices.list(req,res)
});

router.post('/cadastrar', function(req, res, next) {
  ProfessorServices.register(req,res)
});

router.get('/recuperar/:id', function(req, res, next) {
  ProfessorServices.retrieve(req,res)
});

router.put('/atualizar/:id', function(req, res, next) {
  ProfessorServices.update(req,res)
});

router.delete('/remover/:id', function(req, res, next) {
  ProfessorServices.delete(req,res)
});

export default router
//module.exports = router;
