const SaveData = () => {
    const saveData = () => {
        const aluno = { nome: "Jefferson", curso: "SI" }
        localStorage.setItem("aluno01", JSON.stringify(aluno))
        sessionStorage.setItem("disciplina","Desenvolvimento de Software WEB")
    }

    return (
        <div>
            <h1>Saving Data...</h1>
            {saveData()}
            <LoadData />
        </div>
    )
}

const LoadData = () => {
    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        return (
            <>
                <h3>
                    Nome: {alunoCarregado.nome}
                </h3>
                <h3>
                    Curso: {alunoCarregado.curso}
                </h3>
            </>
        )
    }

    return (
        <>
            <h1>Loading Data...</h1>
            {loadData()}
        </>
    )
}

export default SaveData