const ProfessorModel = require('../models/ProfessorModel')

let professores = [
    { id: 0, nome: "Vito Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 1, nome: "Michael Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 2, nome: "Kay Adams", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 3, nome: "Peter Clemenza", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: true, ds: false, mc: true } },
    { id: 4, nome: "Salvatore Tessio", curso: "Sistemas de Informação", titulacao: "MEST", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 5, nome: "Luca Brasi", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: false, ds: false, mc: true } }
]
let id = 0

class ProfessorService {

    static criar(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai
        )

        professores.push(professor)
        return professor
    }

    static listar() {
        return professores
    }
}

module.exports = ProfessorService