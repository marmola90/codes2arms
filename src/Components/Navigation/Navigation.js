import './Navigation.css';

function Navigation(props) {
    return(
        <>
            <header class=" fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav class="f6 fw6 ttu tracked">
                    <a class="link dim white dib mr3" href="/">Home</a>
                    {/* <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/Productos">Productos</a> */}
                    <a class="link dim white dib mr3" href="/Servicios">Servicios</a>
                    <a class="link dim white dib mr3" href="/Portafolio">Portafolio</a>
                    <a class="link dim white dib mr3" href="/about">Acerca de</a>
                    <a class="link dim white dib mr3" href="/contact">Contactenos</a>
                </nav>
            </header>
        </>
    );
}

export default Navigation;