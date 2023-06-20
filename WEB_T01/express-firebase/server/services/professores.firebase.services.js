import db from "../db/firebase.connection"
import { collection, query, getDocs } from "firebase/firestore"

class ProfessoresService {

    static list(request,response){
        const q = query(collection(db,"professores"))
        getDocs(q)
        .then(
            (querySnapshot) => {
                const professores = []
                querySnapshot.forEach(
                    (doc)=>{
                        const _id = doc.id
                        const { nome, curso, titulacao, ai } = doc.data()
                        professores.push({_id,nome,curso,titulacao,ai})
                    }
                ) //querySnapshot
                response.json(professores)
            }
        )
        .catch(error=>console.log(error))
    }
}

export default ProfessoresService