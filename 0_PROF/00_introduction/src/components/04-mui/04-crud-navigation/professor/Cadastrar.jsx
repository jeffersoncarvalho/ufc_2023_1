import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")
    const [ai, setAi] = useState({ es: true, al: false, ds: false, mc: false })
    const navigate = useNavigate()

    const handleCheckbox = (event) => {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked,
        });
    };
    const { es, al, ds, mc } = ai

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfessor = {nome,curso,titulacao,ai}
        axios.post("http://localhost:3001/professores/criar",newProfessor)
        .then(
            (res) => {
                console.log(res.data.id)
                alert(`Professor ${nome} criado com sucesso!`)
                navigate("/listarProfessor")
            }
        )
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/


    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "80%"
                }}
            >

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome Completo"
                    name="nome"
                    onChange={(event) => { setNome(event.target.value) }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event) => { setCurso(event.target.value) }}
                />

                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        value={titulacao}
                        label="Titulação"
                        onChange={(event) => { setTitulacao(event.target.value) }}

                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>


                <FormControl sx={{ marginTop: 2, marginLeft: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, marginBottom: 2 }}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox} />} label="Algorítimos" />
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox} />} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox} />} label="Matemática Computacional" />
                    </FormGroup>
                </FormControl>


                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}

                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
                </Box>

            </Box>

        </>
    )
}

export default Cadastrar