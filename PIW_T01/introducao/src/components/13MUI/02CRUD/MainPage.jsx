import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1"
import { Container } from "@mui/material"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:12}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor" element={<EditarProfessor/>}/>
                </Routes>     
            </Container>
        </BrowserRouter>
    )
}
export default MainPage