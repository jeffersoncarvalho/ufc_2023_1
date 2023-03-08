import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import { useParams } from 'react-router-dom';
const Listar = () => {

    let { id, nome } = useParams() 

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}

        >
            <h1>Listar {id} {nome}</h1>
        </Box>
    )
}

export default Listar