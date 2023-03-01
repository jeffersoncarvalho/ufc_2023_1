import React from "react";
import { AppBar, Container, Toolbar, Typography, Box, Button, Tooltip } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={() => alert("Clicou Professor!")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Professores
                        </Button>

                        <Button
                            onClick={() => alert("Clicou Aluno!")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Alunos
                        </Button>

                        <Button
                            onClick={() => alert('Sobre!')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
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