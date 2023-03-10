import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Signin() {
    return (
        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8
                }}
            >

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" underline='none'>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" underline='none'>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default Signin;
