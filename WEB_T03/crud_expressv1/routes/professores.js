const professorService = require("../services/professor.service")
const professorServiceMongo = require("../services/professor.service.mongo")

var express = require('express');
var router = express.Router();

/*router.get(
    "/listar"
    ,
    (req,res,next)=>{
        res.json(professorService.list())
    }
)*/

router.get(
    "/listar"
    ,
    (req,res,next)=>{
        professorServiceMongo.list(req,res)
    }
)

/*router.post(
    "/cadastrar"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.register(req.body)
        res.json(professor)
    }
)*/

router.post(
    "/cadastrar"
    ,
    (req,res,next)=>{
       professorServiceMongo.register(req,res)
    }
)

/*router.get(
    "/recuperar/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.retrieve(req.params.id)
        res.json(professor)
    }
)*/

router.get(
    "/recuperar/:id"
    ,
    (req,res,next)=>{
       professorServiceMongo.retrieve(req,res)
    }
)

/*router.put(
    "/atualizar/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const professor = professorService.update(req.params.id,req.body)
        res.json(professor)
    }
)*/

router.put(
    "/atualizar/:id"
    ,
    (req,res,next)=>{
        professorServiceMongo.update(req,res)
    }
)

/*router.delete(
    "/remover/:id"
    ,
    (req,res,next)=>{
        //res.json(professorService.list())
        const out = professorService.delete(req.params.id)
        res.json({"sucesso":out})
    }
)*/

router.delete(
    "/remover/:id"
    ,
    (req,res,next)=>{
        professorServiceMongo.delete(req,res)
    }
)


module.exports = router