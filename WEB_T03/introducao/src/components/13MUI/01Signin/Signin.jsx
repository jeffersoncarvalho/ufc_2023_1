import { Box, Button, Container, Link, TextField, Typography } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:8
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Sign In
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth


                    label="Endereço de e-mail"
                    id="email"
                    name="email"
                    type="email"

                />

                <TextField
                    required
                    margin="normal"
                    fullWidth


                    label="Senha"
                    id="password"
                    name="password"
                    type="password"

                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        my:2
                    }}
                >
                    Sign In
                </Button>

                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        width:"100%"
                    }}
                    
                >
                    <Link
                        underline="none"
                        href="#"
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline="none"
                        href="#"
                    >
                        Cadastre-se!
                    </Link>
                </Box>

            </Box>
        </Container>
    )
}

export default Signin