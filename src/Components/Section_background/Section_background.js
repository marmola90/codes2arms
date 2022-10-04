import './Section_background.css';
import Typography from '@mui/material/Typography';

function Section_background() {
    return(
        <article id="Inicio" className="athelas ">
            <div className="dt tc bground vh-100 w-100">
                <div className="dtc v-mid">
                    {/* <header className="Black-70 mt5">
                        <h2 className="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
                        <h3 className="f6 fw1 lh-title">Summer MMXVI</h3>
                    </header> */}
                    {/* <h1 className="f1 f-headline-l fw1 i dark-blue">Codes2Arms</h1>  */}
                    <Typography gutterBottom variant="h1"  component="div" className="tc dark-blue i">
                        Codes2Arms
                    </Typography>
                    <blockquote className="ph0 mh0 measure f4 lh-copy center">
                        <p className="fw1 Black-70">
                            IMAGINA | TRANSFORMA | CREA
                        </p>
                        <cite className="f6 ttu tracked fs-normal">TU SUEÑO EN REALIDAD</cite>
                    </blockquote>
                </div>
            </div>
        </article>
        
    );
}

export default Section_background;