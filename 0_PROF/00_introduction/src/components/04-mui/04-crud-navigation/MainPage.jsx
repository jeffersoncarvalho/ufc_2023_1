import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenu"
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

const MainPage = () => {
    return (

        <BrowserRouter>
            <MyMenu />
            <Container 
                sx={{marginTop:5}}
            >
                <Routes>
                    <Route path="cadastrarProfessor/" element={<CadastrarProfessor />} />
                    {/* <Route path="listarProfessor/:id/:nome" element={<ListarProfessor />} /> */}
                    <Route path="listarProfessor/" element={<ListarProfessor />} /> 
                    <Route path="editarProfessor/:id" element={<EditarProfessor />} />
                </Routes>
            </Container>
        </BrowserRouter>

    )

}

export default MainPage