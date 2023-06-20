import db from "../db/firebase.connection"
import { query, collection, getDocs } from "firebase/firestore"

class ProfessorServices {

    static list(request,response){

        const q = query(collection(db,"professores"))
        getDocs(q)
        .then(
            (querySnapshot)=>{
                const professores = []
                querySnapshot.forEach(
                    (professor)=>{
                        const _id = professor.id
                        const {nome,curso,titulacao,ai} = professor.data()
                        professores.push({_id,nome,curso,titulacao,ai})
                    } 
                )
                response.json(professores)
            }
        )
        .catch(error=>console.log(error))

    }

}

export default ProfessorServices