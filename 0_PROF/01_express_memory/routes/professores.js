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

router.put('/atualizar/:id', 
    function (req, res, next) {
        const professor = professorService.atualizar(req.params.id, req.body)
        return res.json(professor)

    }
);

router.delete('/apagar/:id', 
    function (req, res, next) {
        const ok = professorService.apagar(req.params.id)
        if(ok) return res.json({"sucesso":true})
        return res.json({"sucesso":false})
    }
);

router.get('/recuperar/:id', 
    function (req, res, next) {
        const professor = professorService.recuperar(req.params.id)
        return res.json(professor)
    }
);


module.exports = router
//Stochastic Analytical Model with a Bayesian Approach