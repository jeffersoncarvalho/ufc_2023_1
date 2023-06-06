var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.service")

router.get(
    '/listar',
     function(req, res, next) {
        res.json(professorService.list())
    }
);

module.exports = router;
