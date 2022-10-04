import Typography from '@mui/material/Typography';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import './MidS.css';
function MidS(){
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
      
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const options={
        fps_limit: 60,
        interactivity: {
            detect_on: "canvas",
            events: {
                onclick: { enable: true, mode: "push" },
                onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
            },
            modes: {
                push: { quantity: 5 },
                attract: { distance: 100, duration: 0.4, factor: 5 }
            }
        },
        particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
                anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            },
            random: false,
            value: 0.5
        },
        shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
        },
        polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
          },
        retina_detect: true,
        fullScreen: {
            enable: false
        }
    }

    return(
        <section className="f2 shadow-2 " >
            <div className='w-100 bg-navy hero-body flex'>
                <Particles 
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />
                <Typography gutterBottom variant="h3"  component="div" className=" tc white"
                    sx={{
                        position: 'absolute',
                }}>
                    Agun texto super WOOOOOOAAAAAAAOOOOOOOWWWWWW!!!!!!
                </Typography>
            </div>
        </section>
    );
}

export default MidS;