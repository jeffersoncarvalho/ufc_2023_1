var ProfessorModel = require("../models/professor.model.mongo")

class ProfessorService {

    static list(request,response){
        ProfessorModel.find()
        .then(
            (professores) => {
                response.json(professores)
            }
        )
    }

    static register(request,response){
        ProfessorModel.create(request.body)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
    }

    static retrieve(request,response){
        ProfessorModel.findById(request.params.id)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
    }

    static update(request,response){
        ProfessorModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            {new:true}
        )
        .then(
            (professor) => response.json(professor)
        )
    }

    static delete(request,response){
        ProfessorModel.findByIdAndDelete(request.params.id)
        .then((professor)=>response.json(professor))
    }
}

module.exports = ProfessorService