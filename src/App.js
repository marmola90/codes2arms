import Navigation from './Components/Navigation/Navigation.js';
import Home from './Components/Section_background/Section_background.js';
import './App.css';
import Servicios from './Components/Servicios/Servicios.js';
import Portafolio from './Components/Portafolio/Portafolio.js';
import MidS from './Components/MidS/MidS.js';
import Footer from './Components/Footer/Footer.js';
import SeccionPasos from './Components/SeccionPasos/SeccionPasos.js';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Servicios />
      <MidS />
      <Portafolio />
      
      <SeccionPasos />
      <Footer />
    </div>
  );
}

export default App;
