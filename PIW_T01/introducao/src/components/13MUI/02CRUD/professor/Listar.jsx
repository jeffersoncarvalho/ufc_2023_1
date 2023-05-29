import { Paper, TableContainer, TableHead, Typography, Table, TableBody, TableRow, TableCell } from "@mui/material"

const Listar = () => {

    const professores = [
        { id: 0, nome: "Gladimir Bavares", curso: "DD", titulacao: "GRAD" },
        { id: 1, nome: "Tainara Zaia", curso: "DD", titulacao: "DOUT" },
        { id: 2, nome: "Saulo Bitor", curso: "ES", titulacao: "GRAD" },
        { id: 3, nome: "Zictor Zarias", curso: "CC", titulacao: "MEST" },
        { id: 4, nome: "Angrid Vonteiro", curso: "CC", titulacao: "DOUT" },
    ]

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{mt:2}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>TITULAÇÃO</TableCell>
                            <TableCell>AÇÕES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            professores.map(
                                (professor)=>{
                                    return (
                                        <TableRow key={professor.id}>
                                            <TableCell>{professor.id}</TableCell>
                                            <TableCell>{professor.nome}</TableCell>
                                            <TableCell>{professor.curso}</TableCell>
                                            <TableCell>{professor.titulacao}</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
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