var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.services")

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({ users: [{ name: 'Timmy' }] });
});

router.get(
    "/listar"
    ,
    (req, res, next) => {
        res.json(professorService.list())
    }
)

router.post(
    "/register"
    ,
    (req, res, next) => {
        const professor = professorService.register(req.body)
        res.json(professor)
    }
)

router.put(
    "/update/:id"
    ,
    (req, res, next) => {
        const professor = professorService.update(req.params.id, req.body)
        res.json(professor)
    }
)

router.delete("/delete/:id"
    ,
    function (req, res, next) {
        const ok = professorService.delete(req.params.id);
        if (ok) return res.json({ "sucess": true });
        else return res.json({ "sucess": false });
    }
)

router.get('/retrieve/:id', function (req, res, next) {
    const out = professorService.retrieve(req.params.id);
    return res.json(out);
});

module.exports = router;
