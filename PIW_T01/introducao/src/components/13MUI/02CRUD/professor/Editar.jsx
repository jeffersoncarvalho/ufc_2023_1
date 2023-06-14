import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Editar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({ ds: false, es: false, mc: false, cg: false })

    const { ds, es, mc, cg } = ai
    const { id } = useParams()
    const navigate = useNavigate()
    

    /*const professores = [
        { id: 0, nome: "Gladimir Bavares", curso: "DD", titulacao: "GRAD", ai:{ds:true,es:true,mc:false,cg:false} },
        { id: 1, nome: "Tainara Zaia", curso: "DD", titulacao: "DOUT", ai:{ds:true,es:true,mc:false,cg:false} },
        { id: 2, nome: "Saulo Bitor", curso: "ES", titulacao: "GRAD", ai:{ds:true,es:true,mc:false,cg:false} },
        { id: 3, nome: "Zictor Zarias", curso: "CC", titulacao: "MEST", ai:{ds:true,es:true,mc:false,cg:false} },
        { id: 4, nome: "Angrid Vonteiro", curso: "CC", titulacao: "DOUT", ai:{ds:true,es:true,mc:false,cg:false} },
    ]

    function getProfessorById(id){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                return professores[i]
            }
        return null
    }*/

    useEffect(
        () => {

            axios.get(`http://localhost:3001/professores/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setTitulacao(response.data.titulacao)
                        setAi(response.data.ai)
                    }
                )
                .catch(error => console.log(error))

            /*const professor = getProfessorById(id)
            setNome(professor.nome)
            setCurso(professor.curso)
            setTitulacao(professor.titulacao)
            setAi(professor.ai)*/

        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
        const professor = {nome,curso,titulacao,ai}
        axios.put(`http://localhost:3001/professores/atualizar/${id}`,professor)
        .then(
            (response) => {
                alert("Professor " + response.data.id + " atualizado com sucesso!")
                navigate("/listarProfessor")
            }
        )
        .catch(error=>console.log(error))
    }

    function handleCheckBox(event) {
        setAi(
            {
                ...ai, //copia todo mundo que estava antes
                [event.target.name]: event.target.checked //modifica apenas a propriedade clicada
            }
        )
    }

    return (
        <>
            <Typography variant="h4" fontWeight="bold">
                Editar Professor {id}
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
                    onChange={(event) => setNome(event.target.value)}
                    value={nome}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    label="Curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}
                    value={curso}
                />

                <FormControl sx={{ width: "100%", mt: 2 }}>
                    <InputLabel id="select-id-label">Titulação</InputLabel>
                    <Select
                        labelId="select-id-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckBox} />} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckBox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckBox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckBox} />} label="Computação Gráfica" />
                    </FormGroup>
                </FormControl>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ mb: 2 }}
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar