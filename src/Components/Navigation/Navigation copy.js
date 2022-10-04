import './Navigation.css';

function Navigation(props) {
    return(
        <>
            <header class=" fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
                <nav class="f6 fw6 ttu tracked db dt-l w-100 border-box pa3 ph5-l">
                    <a class="db dtc-l v-mid blue link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                        <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name"/>
                    </a>
                    <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <a class="link dim blue dib mr3" href="/">Home</a> 
                        <a class="link dim blue dib mr3" href="/Servicios">Servicios</a>
                        <a class="link dim blue dib mr3" href="/Portafolio">Portafolio</a>
                        <a class="link dim blue dib mr3" href="/about">Acerca de</a>
                        <a class="link dim blue dib mr3" href="/contact">Contactenos</a>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navigation;