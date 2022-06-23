import Navigation from './Components/Navigation/Navigation.js';
import Section1 from './Components/Section_background/Section_background.js';
import './App.css';
import Servicios from './Components/Servicios/Servicios.js';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Section1 />
     <Servicios />
     {/* <Services/> */}
    </div>
  );
}

export default App;
