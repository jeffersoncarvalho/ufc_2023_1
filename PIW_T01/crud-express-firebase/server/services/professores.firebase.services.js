import db from "../db/firebase.connection";
import { collection, query, getDocs } from "firebase/firestore"

class ProfessorServices {
    
    static list(req,res){
        const q = query(collection(db,"professores"))
        getDocs(q)
        .then(
            (professores)=>{
                const resProfessores = []
                professores.forEach(
                    (professor)=>{
                        //console.log(professor.id)
                        const _id = professor.id
                        const { nome, curso, titulacao, ai } = professor.data()
                        resProfessores.push({_id,nome,curso,titulacao,ai})
                    }
                )
                res.json(resProfessores)
            }
        )
        .catch(error=>console.log(error))
    }
}

export default ProfessorServices