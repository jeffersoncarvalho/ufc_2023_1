import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Cadastrar = () => {

    const [nome,setNome] = useState("")
    const [curso,setCurso] = useState("")
    const [titulacao,setTitulacao] = useState("GRAD")
    const [ai,setAi] = useState({ds:false,es:false,mc:false,cg:false})
    const {ds,es,mc,cg} = ai

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)
    }

    function handleCheckBox(event) {
        setAi(
                {
                    ...ai, //copia todo mundo que estava antes
                    [event.target.name]:event.target.checked //modifica apenas a propriedade clicada
                }
        )    
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

                <FormControl sx={{width:"100%",mt:2}}>
                    <InputLabel id="select-id-label">Titulação</InputLabel>
                    <Select
                        labelId="select-id-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event)=>setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{mt:2,ml:2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12,mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckBox}/>} label="Desenvolvimento de Software"/>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckBox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckBox}/>} label="Matemática Computacional"/>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckBox}/>} label="Computação Gráfica"/>
                    </FormGroup>
                </FormControl>

                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    mt:2
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