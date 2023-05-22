import { Container, Box, Typography, TextField, Button } from "@mui/material"

const Signin = () => {

    return (
        <Container maxWidth="xs">
            <Box>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "Endereço de e-mail"
                    name ="email"
                    autoComplete="email"
                    autoFocus 
                 />
                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    name = "senha"
                    label = "Senha"
                    type = "password"
                    id = "senha"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx = {{mt:3}}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )

}

export default Signin