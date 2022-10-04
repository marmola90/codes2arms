import Cards from "../Cards/Cards";
import Typography from '@mui/material/Typography';

function Servicios() {

    return(
        <>
            <section className="f1 shadow-3" style={{backgroundColor:'#ffc107'}} id="Servicios">
                <Typography gutterBottom variant="h2"  component="div" className="tc shadow-2 dark-blue">
                    Servicios
                </Typography>
                <Cards />
                <br/>
            </section>
        </>
    );
}

export default Servicios;