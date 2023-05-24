import { Container, Box, Button, Typography, TextField, Link } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    mt:8
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
                    fullWidth
                    margin="normal"
                    autoFocus

                    label="Endereço de e-mail"
                    id="email" 
                    name="email"
                    type="email"
                 />
                 <TextField
                    required
                    fullWidth
                    margin="normal"

                    label="Senha"
                    id="password" 
                    name="password"
                    type="password"
                 />

                 <Button
                    sx={{width:"100%", my:2}}
                    variant="contained"
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
                    <Link href="#" underline="none">
                        Esqueceu a senha?
                    </Link>
                    <Link href="#" underline="none">
                        Cadastre-se!
                    </Link>
                </Box>

            </Box>
        </Container>
    )
}
export default Signin