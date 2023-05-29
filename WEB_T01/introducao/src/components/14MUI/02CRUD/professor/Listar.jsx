import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"


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
  

const Listar = () => {

    const professores = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "GRAD" },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "DOUT" },
        { id: 2, nome: "Kay Adams", curso: "CC", titulacao: "MEST" },
        { id: 3, nome: "Luca Brasi", curso: "SI", titulacao: "GRAD" },
        { id: 4, nome: "Peter Clemenza", curso: "SI", titulacao: "GRAD" }
    ]

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell align="center">AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return (
                                        <StyledTableRow key={professor.id}>
                                            <StyledTableCell>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                    <IconButton aria-label="delete" color="primary">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton 
                                                        aria-label="edit" 
                                                        color="primary" 
                                                        sx={{ ml: 2 }}
                                                        component={Link}
                                                        to={`/editarProfessor/${professor.id}`}
                                                    >
                                                        <EditIcon />
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
export default Listar