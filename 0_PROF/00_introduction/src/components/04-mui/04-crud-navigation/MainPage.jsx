import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenu"
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"

const MainPage = () => {
    return (

        <BrowserRouter>
            <MyMenu />
            <Container 
                sx={{marginTop:5}}
            >
                <Routes>
                    <Route path="cadastrarProfessor/" element={<CadastrarProfessor />} />
                    <Route path="listarProfessor/:id/:nome" element={<ListarProfessor />} />
                </Routes>
            </Container>
        </BrowserRouter>

    )

}

export default MainPage