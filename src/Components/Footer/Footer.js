import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import  Paper  from '@mui/material/Paper';

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="white shadow-2">
            {/* <Box> */}
            <Paper elevation={24} sx={{
                        backgroundColor:'#212121',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:'center',
                        height: 200,
                        
                    }} >
                {/* <Paper> */}<br/>
                    <Container maxWidth={'lg'} className='white'>
                        <Grid container spacing={6} mt={1}>
                            <Grid item xs={12} sm={6}>
                                <Box borderBottom={1}>Contactenos</Box>
                                <Box>
                                    <Typography gutterBottom variant="body1"  component="div" >
                                        csolorzano@codes2arms.com
                                    </Typography>
                                    <Typography gutterBottom variant="body1"  component="div" >
                                        amarmol@codes2arms.com
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box borderBottom={1}>Sobre Nosotros</Box>
                                <Box>
                                    <Typography gutterBottom variant="body1"  component="div" >
                                        <a href="#Servicios" className='link white '>  Servicios</a>
                                    </Typography>
                                
                                    <Typography gutterBottom variant="body1"  component="div" >
                                    <a href="#Portafolio" className='link white'> Portafolio </a>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    </Paper>
                    <Typography gutterBottom variant="body2"  component="div" className='white shadow-5'>
                        {`Copyright © Codes2Arms ${year}`}
                    </Typography>
                {/* </Paper> */}
            {/* </Box> */}
        </footer>
    );
}

export default Footer;