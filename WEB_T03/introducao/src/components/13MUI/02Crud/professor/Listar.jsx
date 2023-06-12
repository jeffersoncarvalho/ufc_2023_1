import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Listar = () => {

    /*const professores = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" }
    ]*/
    const [professores,setProfessores] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:3005/professores/listar")
            .then(
                (response)=>{
                    //console.log(response)
                    setProfessores(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteProfessorById(id) {
        if(window.confirm("Deseja Excluir ? " + id)){
            //alert("Professor " + id + " excluído com sucesso!")
            axios.delete(`http://localhost:3005/professores/remover/${id}`)
            .then((response)=>{
                const resultado = professores.filter(prof => prof._id != id)
                setProfessores(resultado)
            })
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return (
                                        <StyledTableRow key={professor._id}>
                                            <StyledTableCell>{professor._id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessorById(professor._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default Listar