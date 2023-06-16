import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore"
import db from "../db/firebase.connection.js"

class ProfessorService {

    static list (request, response) {
        getDocs(collection(db,"professores"))
        .then(
            (professorSnapshot)=>{
                const professores = []
                professorSnapshot.forEach(
                    (professor)=>{
                        const _id = professor.id
                        const {nome,curso,titulacao,ai} = professor.data()
                        //console.log(professor.data)
                        professores.push({_id,nome,curso,titulacao,ai})
                    }
                )
                response.json(professores)
            }
        )
        .catch(error=>console.log(error))
    }

    static list_on_snapshot = (request, response) => {
        const q = query(collection(db, "professores"))
        const unscribe = onSnapshot(
            q,
            (querySnaphot) => {
                const professores = []
                querySnaphot.forEach(
                    (document) => {
                        const _id = document.id
                        const { nome,curso,titulacao,ai } = document.data()
                        professores.push({_id,nome,curso,titulacao,ai})
                    }//document
                )//forEach
                response.json(professores)
            }//querySnaphot
        )//onSnapshot
    }

    static register = (request, response) => {
        addDoc(collection(db, 'professores'), request.body)
            .then(
                (docRef) => {
                    response.json({_id:docRef.id})
                }
            )
            .catch(error => console.log(error))
    }

    static retrieve = (request,response) => {
        getDoc(doc(db, "professores", request.params.id))
            .then(
                (docSnap) => {
                    if (docSnap.exists()) {
                        //console.log("Document data:", docSnap.data())
                        response.json(docSnap.data())
                    }
                }
            )
            .catch(error => console.log(error))
    }

    static update = (request,response) => {
        updateDoc(
            doc(db,"professores", request.params.id),
            request.body)
            .then(
                () => {
                    response.json({_id:request.params.id})
                }
            )
            .catch(error => console.log(error))
    }

    static delete = (request,response) => {
        deleteDoc(doc(db, "professores", request.params.id))
            .then(() => response.json({_id:request.params.id}))
            .catch(error => console.log(error))
    }


}

module.exports = ProfessorService