const ProfessorModel = require("../models/professor.models")

const professores = [
    { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:false,es:true}},
    { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD", ai:{cg:false,mc:true,al:false,es:false} },
    { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:true,es:false} },
    { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT", ai:{cg:false,mc:true,al:false,es:false} },
    { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST", ai:{cg:false,mc:true,al:true,es:false} }
]

let id = 5

class ProfessorService {
    static list(){
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

    static retrieve(id){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id) return professores[i]
        return null
    }

    static update(id,data){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores[i].nome = data.nome
                professores[i].curso = data.curso
                professores[i].titulacao = data.titulacao
                professores[i].ai = data.ai
                return professores[i]
            }
        return null
    }

    static delete(id) {
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores.splice(i,1) 
                return true
            }
        return false
    }
}

module.exports = ProfessorService