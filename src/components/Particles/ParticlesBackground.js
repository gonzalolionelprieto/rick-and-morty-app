
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const ParticlesBackground = () => {

	const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

  

    return (
        <Particles
			id="particles"
			init={particlesInit}
           
			options={{
				particles: {
					number: {
						value: 70,
						density: {
							enable: true,
							value_area: 1000,
						},
					},
					color: {
						value: "rgba(134, 255, 75, 1)",
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "rgba(134, 255, 75, 1)",
						},
					},
					opacity: {
						value: 1,
						random: false,
						anim: {
							enable: true,
							speed: .5,
							opacity_min: 0.1,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 170,
						color: "rgba(134, 255, 75, 1)",
						opacity: 0.1,
						width: 1,
					},
					move: {
						enable: true,
						speed: 3,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				retina_detect: true,
			}}
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: "0",
				left: "0",
				zIndex: "-100",
			}}
		/>
    );}

	export default ParticlesBackground;	
