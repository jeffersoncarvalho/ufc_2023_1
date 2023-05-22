import React from "react";
import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flex: 1, display: 'flex', }}>

                        <Button
                            onClick={() => alert("Clicou Professor!")}
                            sx={{ my: 2, color: 'white' }}
                        >
                            Professores
                        </Button>

                        <Button
                            onClick={() => alert("Clicou Aluno!")}
                            sx={{ my: 2, color: 'white' }}
                        >
                            Alunos
                        </Button>

                        <Button
                            onClick={() => alert('Sobre!')}
                            sx={{ my: 2, color: 'white' }}
                        >
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default MyMenu