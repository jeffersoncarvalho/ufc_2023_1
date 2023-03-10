var express = require('express');
var router = express.Router();
var professorService = require('../services/ProfessorService');

router.post(
    "/criar",
    (req, res, next) => {
        const professor = professorService.criar(req.body)
        return res.json(professor)
    }
)

router.get(
    "/listar",
    (req, res, next) => {
        return res.json(professorService.listar())
    }
) 

module.exports = router