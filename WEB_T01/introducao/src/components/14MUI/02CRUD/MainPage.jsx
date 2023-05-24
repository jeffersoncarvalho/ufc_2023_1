import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenuV1 from "./MyMenuV1"
import { Container } from "@mui/material"
//páginas do Professor
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenuV1 />
            <Container sx={{mt:4}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="listarProfessor" element={<ListarProfessor />}/>
                    <Route path="editarProfessor" element={<EditarProfessor />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage