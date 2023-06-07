var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.service")

router.get(
    '/listar',
     function(req, res, next) {
        res.json(professorService.list())
    }
);

router.post(
    '/cadastrar',
     function(req, res, next) {
        let professor = professorService.register(req.body)
        res.json(professor)
    }
);

router.get(
    '/recuperar/:id',
     function(req, res, next) {
        let professor = professorService.retrieve(req.params.id)
        res.json(professor)
    }
);

router.put(
    '/atualizar/:id',
     function(req, res, next) {
        let professor = professorService.update(req.params.id,req.body)
        res.json(professor)
    }
);

router.delete(
    '/remover/:id',
     function(req, res, next) {
        let resposta = professorService.delete(req.params.id)
        res.json({"RES":resposta})
    }
);

module.exports = router;
