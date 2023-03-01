import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MyMenu from "./MyMenu"
import CadastrarProfessor from "./professor/Cadastrar"

const MainPage = () => {
    return (

        <BrowserRouter>
            <MyMenu />
            <Routes>
                <Route path="cadastrarProfessor/" element={<CadastrarProfessor/>} />
            </Routes>
        </BrowserRouter>

    )

}

export default MainPage