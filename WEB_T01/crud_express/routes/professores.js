var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.services")
var professorServiceMongo = require("../services/professor.services.mongo")


/*router.get(
    "/listar"
    ,
    (req, res, next) => {
        res.json(professorService.list())
    }
)
*/

router.get(
    "/listar"
    ,
    (request, response, next) => {
        professorServiceMongo.list(request,response)
    }
)


/*router.post(
    "/register"
    ,
    (req, res, next) => {
        const professor = professorService.register(req.body)
        res.json(professor)
    }
)*/

router.post(
    "/register"
    ,
    (request, response, next) => {
        professorServiceMongo.register(request,response)
    }
)

/*router.put(
    "/update/:id"
    ,
    (req, res, next) => {
        const professor = professorService.update(req.params.id, req.body)
        res.json(professor)
    }
)*/

router.put(
    "/update/:id"
    ,
    (request, response, next) => {
        professorServiceMongo.update(request,response)
    }
)

/*router.delete("/delete/:id"
    ,
    function (req, res, next) {
        const ok = professorService.delete(req.params.id);
        if (ok) return res.json({ "sucess": true });
        else return res.json({ "sucess": false });
    }
)*/

router.delete("/delete/:id"
    ,
    function (request, response, next) {
        professorServiceMongo.delete(request,response)
    }
)

/*router.get('/retrieve/:id', function (req, res, next) {
    const out = professorService.retrieve(req.params.id);
    return res.json(out);
});*/

router.get('/retrieve/:id', function (request, response, next) {
    professorServiceMongo.retrieve(request,response)
});

module.exports = router;
