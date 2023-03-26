const ProfessorModel = require('../models/ProfessorModel')

let professores = [
    { id: 0, nome: "Vito Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 1, nome: "Michael Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 2, nome: "Kay Adams", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 3, nome: "Peter Clemenza", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: true, ds: false, mc: true } },
    { id: 4, nome: "Salvatore Tessio", curso: "Sistemas de Informação", titulacao: "MEST", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 5, nome: "Luca Brasi", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: false, ds: false, mc: true } },
    { id: 6, nome: "Mario Puzo", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: false, ds: false, mc: true } }
]
let id = 7

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

    static recuperar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i]
            }
        }
        return {}
    }

    static atualizar(id, data) {
        for (let p of professores) {
            if (p.id == id) {
                p.nome = data.nome
                p.curso = data.curso
                p.titulacao = data.titulacao
                p.ai = data.ai
                return p
            }
        }
        return null
    }

    static apagar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }
}

module.exports = ProfessorService