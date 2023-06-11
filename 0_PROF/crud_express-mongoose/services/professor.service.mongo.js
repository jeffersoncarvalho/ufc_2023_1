const ProfessorModel = require("../models/professor.model.mongo")

class ProfessorService {

    static list(req,res){
        ProfessorModel.find()
        .then(
            (professores) => {
                res.status(201).json(professores)
            }
        )
    }

}

module.exports = ProfessorService