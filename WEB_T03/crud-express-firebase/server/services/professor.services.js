import db from "../db/firebase.connection"
import { query, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

class ProfessorServices {

    static list(request, response) {

        const q = query(collection(db, "professores"))
        getDocs(q)
            .then(
                (querySnapshot) => {
                    const professores = []
                    querySnapshot.forEach(
                        (professor) => {
                            const _id = professor.id
                            const { nome, curso, titulacao, ai } = professor.data()
                            professores.push({ _id, nome, curso, titulacao, ai })
                        }
                    )
                    response.json(professores)
                }
            )
            .catch(error => console.log(error))

    }

    static register(request, response) {

        addDoc(collection(db, "professores"), request.body)
            .then(
                (professor) => {
                    response.json({ _id: professor.id })
                }
            )
            .catch(error => console.log(error))
    }

    static retrieve(request, response) {
        const docRef = doc(db, "professores", request.params.id)
        getDoc(docRef)
            .then(
                (professor) => {
                    const res = {
                        _id: professor.id,
                        nome: professor.data().nome,
                        curso: professor.data().curso,
                        titulacao: professor.data().titulacao,
                        ai: professor.data().ai
                    }
                    response.json(res)
                }
            )
            .catch(error => console.log(error))
    }

    static update(request, response) {
        const docRef = doc(db, "professores", request.params.id)
        updateDoc(docRef, request.body)
            .then(() => {
                //atualizou
                response.json({ _id: request.params.id })
            })
            .catch(error => console.log(error))
    }

    static delete(request, response) {
        const docRef = doc(db, "professores", request.params.id)
        deleteDoc(docRef)
        .then(
            () => {
                response.json({_id:request.params.id})
            }
        )
        .catch(error=>console.log(error))   
    }
}

export default ProfessorServices