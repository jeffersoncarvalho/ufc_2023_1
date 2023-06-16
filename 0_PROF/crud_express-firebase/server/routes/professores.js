import express from 'express';
var router = express.Router();
import professorServices from "../services/professor.services.firebase"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/listar', function(req, res, next) {
  professorServices.list(req,res)
});

router.post(
  "/register"
  ,
  (req,res,next)=>{
    professorServices.register(req,res)
  }
)

router.get(
  "/retrieve/:id"
  ,
  (req,res,next)=>{
    professorServices.retrieve(req,res)
  }
)

router.put(
  "/update/:id"
  ,
  (req,res,next)=>{
    professorServices.update(req,res)
  }
)

router.delete(
  "/delete/:id"
  ,
  (req,res,next)=>{
    professorServices.delete(req,res)
  }
)

//module.exports = router;
export default router 