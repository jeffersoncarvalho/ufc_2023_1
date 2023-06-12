const ProfessorModel = require("../models/professor.models.mongo")

class ProfessorService {
    static list(request,response) {
        ProfessorModel.find()
        .then(
            (professores) => {
                response.status(201).json(professores)     
            }
        )
    }

    static register(request,response) {
        ProfessorModel.create(request.body)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static retrieve(request,response) {
        ProfessorModel.findById(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static update(request,response) {
        ProfessorModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }

    static delete(request,response) {
        ProfessorModel.findByIdAndRemove(request.params.id)
        .then(
            (professor) => {
                response.status(201).json(professor)
            }
        )
    }
}
module.exports = ProfessorService