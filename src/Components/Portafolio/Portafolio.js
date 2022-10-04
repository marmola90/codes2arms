import Typography from '@mui/material/Typography';
import ButtonItem from '../ButtonItem/ButtonItem';

const images = [
    {
      url: '/static/images/buttons/breakfast.jpg',
      title: 'Hotel Villa Verde',
      width: '40%',
    },
    {
      url: '/static/images/buttons/burgers.jpg',
      title: 'Virtual Help',
      width: '20%',
    },
    {
      url: '/static/images/buttons/camera.jpg',
      title: 'Camera',
      width: '40%',
    },
  ];

function Portafolio() {

    return(
    <>
        <section className="f1 shadow-2" id="Portafolio">
            <Typography gutterBottom variant="h2"  component="div" className="tc dark-blue ">
                Portafolio
            </Typography>
            <ButtonItem images={images} />          
        </section>
    </>
    );
}

export default Portafolio;