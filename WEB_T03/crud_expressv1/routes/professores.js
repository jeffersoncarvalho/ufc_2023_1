const professorService = require("../services/professor.service")

var express = require('express');
var router = express.Router();

router.get(
    "/listar"
    ,
    (req,res,next)=>{
        res.json(professorService.list())
    }
)


module.exports = router