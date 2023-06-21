// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Typed from 'react-typed';
// import background from './background.png'

function Particle() {
    // const particlesInit = (engine) => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     loadFull(engine);
    // };

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    return (
        <>
       {/* <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height:'100vh',
            width: '100vw',
            backgroundSize:'cover',
            position:'relative',
            overflow:'hidden',
        }}>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                background: {
                    color: {
                        value: "#00",
                    },
                },
                fpsLimit: 80,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} 
        />
        
        <h1><Typed style={{
            fontSize: '3rem',
            fontWeight: 5,
        }}
        strings={[ 
            'Search for products', 
            'Search for categories', 
            'Search for brands']} 
            typeSpeed={40} 
            backSpeed={50} 
            attr="placeholder" 
            loop > 
            <input type="text"/> 
        </Typed>
        </h1>
         </div>
          */}
    {/* <Button variant="outlined">Primary</Button> */}

    </>
  );
}

export default Particle