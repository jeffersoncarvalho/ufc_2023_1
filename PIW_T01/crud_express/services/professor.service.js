const professores = [
    { id: 0, nome: "Gladimir Bavares", curso: "DD", titulacao: "GRAD", ai:{ds:true,es:true,mc:false,cg:false} },
    { id: 1, nome: "Tainara Zaia", curso: "DD", titulacao: "DOUT", ai:{ds:true,es:true,mc:false,cg:false} },
    { id: 2, nome: "Saulo Bitor", curso: "ES", titulacao: "GRAD", ai:{ds:true,es:true,mc:false,cg:false} },
    { id: 3, nome: "Zictor Zarias", curso: "CC", titulacao: "MEST", ai:{ds:true,es:true,mc:false,cg:false} },
    { id: 4, nome: "Angrid Vonteiro", curso: "CC", titulacao: "DOUT", ai:{ds:true,es:true,mc:false,cg:false}},
    { id: 5, nome: "Robert Vonteiro", curso: "CC", titulacao: "DOUT", ai:{ds:true,es:true,mc:false,cg:false}}
]

class ProfessorService {

    static list(){
        return professores
    }
}

module.exports = ProfessorService