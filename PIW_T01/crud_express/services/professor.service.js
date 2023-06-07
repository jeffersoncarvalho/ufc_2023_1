const ProfessorModel = require("../models/professor.model")

const professores = [
    { id: 0, nome: "Gladimir Bavares", curso: "DD", titulacao: "GRAD", ai: { ds: true, es: true, mc: false, cg: false } },
    { id: 1, nome: "Tainara Zaia", curso: "DD", titulacao: "DOUT", ai: { ds: true, es: true, mc: false, cg: false } },
    { id: 2, nome: "Saulo Bitor", curso: "ES", titulacao: "GRAD", ai: { ds: true, es: true, mc: false, cg: false } },
    { id: 3, nome: "Zictor Zarias", curso: "CC", titulacao: "MEST", ai: { ds: true, es: true, mc: false, cg: false } },
    { id: 4, nome: "Angrid Vonteiro", curso: "CC", titulacao: "DOUT", ai: { ds: true, es: true, mc: false, cg: false } },
    { id: 5, nome: "Robert Vonteiro", curso: "CC", titulacao: "DOUT", ai: { ds: true, es: true, mc: false, cg: false } }
]

let id = 6

class ProfessorService {

    static list() {
        return professores
    }

    static register(data) {
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

    static retrieve(id) {
        for (let i = 0; i < professores.length; i++)
            if (professores[i].id == id) {
                return professores[i]
            }
        return null
    }

    static update(id,data) {
        for (let professor of professores) {
            if (professor.id == id) {
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.ai = data.ai
                return professor
            }
        }
        return null
    }

    static delete(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1);
                return true;
            }
        }
        return false
    }
}

module.exports = ProfessorService