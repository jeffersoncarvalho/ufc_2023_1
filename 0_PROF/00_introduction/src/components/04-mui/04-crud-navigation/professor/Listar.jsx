import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';

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
}));

const Listar = () => {

    const [professores, setProfessores] = useState([])

    useEffect(        
        ()=>{
          axios.get("http://localhost:3001/professores/listar")
          .then(
              (response)=>{
                  //console.log(response.data)
                  setProfessores(response.data)
              }
          )
          .catch(error=>console.log(error))
        },
        []
    )

    /*const professores = [
        { id: 0, nome: "Vito Corleone", curso: "Sistemas de Informação", titulacao: "DOUT" },
        { id: 1, nome: "Michael Corleone", curso: "Sistemas de Informação", titulacao: "DOUT" },
        { id: 2, nome: "Kay Adams", curso: "Sistemas de Informação", titulacao: "DOUT" },
        { id: 3, nome: "Peter Clemenza", curso: "Sistemas de Informação", titulacao: "GRAD" },
        { id: 4, nome: "Salvatore Tessio", curso: "Sistemas de Informação", titulacao: "MEST" },
        { id: 5, nome: "Luca Brasi", curso: "Sistemas de Informação", titulacao: "GRAD" }
    ]*/

    function deleteProfessor(id) {
        if (window.confirm("Deseja Excluir?")){
            alert(`Professor ${id} excluído!`)
        }
    }

    return (
        <>
            {/* <h1>Listar {id} {nome}</h1> */}
            <Typography variant="h5" fontWeight="bold">
                Listar Professores
            </Typography>

            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>Titulação</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {professores.map((professor) => (
                            <StyledTableRow key={professor.id}>
                                <StyledTableCell>{professor.id}</StyledTableCell>
                                <StyledTableCell align="left">{professor.nome}</StyledTableCell>
                                <StyledTableCell align="left">{professor.curso}</StyledTableCell>
                                <StyledTableCell align="left">{professor.titulacao}</StyledTableCell>
                                <StyledTableCell align="left">

                                    <Stack direction="row" spacing={1}>
                                        <IconButton aria-label="delete" color="primary" onClick={()=>deleteProfessor(professor.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        
                                        <IconButton color="primary" aria-label="edit" component={Link} to={"../editarProfessor/"+professor.id}>
                                            <EditIcon />
                                        </IconButton>
                                    </Stack>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {/* {professores.map(
                            (professor) => (
                                <TableRow
                                    key={professor.id}
                                >
                                    <TableCell align="left">{professor.id}</TableCell>
                                    <TableCell align="left">{professor.nome}</TableCell>
                                    <TableCell align="left">{professor.curso}</TableCell>
                                    <TableCell align="left">{professor.titulacao}</TableCell>
                                    <TableCell align="left">XX XX</TableCell>
                                </TableRow>
                            )
                        )} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Listar