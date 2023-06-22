import db from "../db/firebase.connection"
import { collection, query, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore"

class ProfessoresService {

    static list(request, response) {
        const q = query(collection(db, "professores"))
        getDocs(q)
            .then(
                (querySnapshot) => {
                    const professores = []
                    querySnapshot.forEach(
                        (doc) => {
                            const _id = doc.id
                            const { nome, curso, titulacao, ai } = doc.data()
                            professores.push({ _id, nome, curso, titulacao, ai })
                        }
                    ) //querySnapshot
                    response.json(professores)
                }
            )
            .catch(error => console.log(error))
    }

    static register(request, response) {
        //const docRef = await addDoc(collection(db,"professores"))
        addDoc(collection(db, "professores"), request.body)
            .then(
                (docRef) => {
                    response.json({ _id: docRef.id })
                }
            )
            .catch(error => console.log(error))
    }

    static retrieve(request, response) {
        const docRef = doc(db, "professores", request.params.id)
        //const docSnap = await getDoc(docRef);
        getDoc(docRef)
            .then(
                (docSnap) => {
                    const _id = docSnap.id
                    const { nome, curso, titulacao, ai } = docSnap.data()
                    response.json({ _id, nome, curso, titulacao, ai })
                }
            )
            .catch(error => console.log(error))
    }

    static update(request, response) {
        const docRef = doc(db, "professores", request.params.id)
        updateDoc(docRef, request.body)
            .then(
                () => {
                    response.json({ _id: request.params.id })
                }
            )
            .catch(error => console.log(error))

    }

    static delete(request, response) {

        const docRef = doc(db, "professores", request.params.id)
        deleteDoc(docRef)
            .then(() => response.json({ res: true }))
            .catch(error => console.log(error))
    }

    static listOnSnapshot(request, response) {
        const q = query(collection(db, "professores"))
        onSnapshot(q,
            (querySnapshot) => {
                const professores = []
                querySnapshot.forEach(
                    (professor)=>{
                        const _id = professor.id
                        const {nome,curso,titulacao,ai} = professor.data()
                        professores.push({_id,nome,curso,titulacao,ai})
                    }
                )//forEach
                response.json(professores)
            }//querySnapshot
        )//onSnapshot
    }
}

export default ProfessoresService