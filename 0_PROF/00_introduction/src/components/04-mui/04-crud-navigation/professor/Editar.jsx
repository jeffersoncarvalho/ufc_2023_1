import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Editar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")
    const [ai, setAi] = useState({ es: false, al: false, ds: false, mc: false })
    const navigate = useNavigate()

    let { id } = useParams()


    useEffect(
        () => {

            //memória
            //let professor = getProfessorById(id)
            //console.log(professor)

            /*if(professor) {
                setNome(professor.nome)
                setCurso(professor.curso)
                setTitulacao(professor.titulacao)
                setAi(professor.ai)
            }*/
            console.log(id)
            axios.get("http://localhost:3001/professores/recuperar/" + id)
                .then(
                    (res) => {
                        setNome(res.data.nome)
                        setCurso(res.data.curso)
                        setTitulacao(res.data.titulacao)
                        setAi(res.data.ai)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        [id]
    )

    /*function getProfessorById(id) {
        const professores = [
            { id: 0, nome: "Vito Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
            { id: 1, nome: "Michael Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
            { id: 2, nome: "Kay Adams", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: true } },
            { id: 3, nome: "Peter Clemenza", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: true, ds: false, mc: true } },
            { id: 4, nome: "Salvatore Tessio", curso: "Sistemas de Informação", titulacao: "MEST", ai: { es: true, al: false, ds: false, mc: true } },
            { id: 5, nome: "Luca Brasi", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: true, al: false, ds: false, mc: true } }
        ]
         
        for (let i=0; i<professores.length; i++) {
        
            if (professores[i].id == id) return professores[i]
        }
        return null
    }*/

    const handleCheckbox = (event) => {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked,
        });
    };
    const { es, al, ds, mc } = ai

    const handleSubmit = (e) => {
        e.preventDefault();
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
        const updatedProfessor =
        {
            nome, curso, titulacao, ai
        }
        //axios.put('http://localhost:3001/students/' + params.id, updatedStudent)
        axios.put('http://localhost:3001/professores/atualizar/' + id, updatedProfessor)
            .then(
                res => {
                    //console.log(res.data)
                    //props.history.push('/listStudent');
                    //console.log(props)
                    navigate("/listarProfessor")
                }
            )
            .catch(error => console.log(error))

    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
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
                    value={nome}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event) => { setCurso(event.target.value) }}
                    value={curso}
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

export default Editar