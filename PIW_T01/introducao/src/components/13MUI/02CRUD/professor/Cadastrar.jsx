import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Cadastrar = () => {

    const [nome,setNome] = useState("")
    const [curso,setCurso] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
        console.log(curso)
    }

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Cadastrar Professor
            </Typography>
            
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome Completo"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event)=>setCurso(event.target.value)}
                />
                <Box sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar