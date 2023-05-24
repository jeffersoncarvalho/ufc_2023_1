import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{mr:1}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration:"none",
                            color:"white",
                            fontFamily:"monospace",
                            fontWeight:800,
                            letterSpacing:".2rem"
                        }}
                    >
                        CRUD_V0
                    </Typography>
                    <Box
                        sx={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"flex-end"
                        }}
                    >
                        <Button sx={{color:"white",mt:1}}>
                            Professores
                        </Button>
                        <Button sx={{color:"white",mt:1}}>
                            Alunos
                        </Button>
                        <Button sx={{color:"white",mt:1}}>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu