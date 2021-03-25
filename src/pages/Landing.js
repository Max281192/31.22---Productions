import React from 'react';
//Import Styled
import styled from 'styled-components';
//Page components
import Nav from "../components/LandingPage/Nav";
//Medias
import logo from '../img/logo.svg';
//Framer Motion
import {motion} from 'framer-motion';

const Landing = () => {

	const panelAnim = {
		hidden: {
			width: 0,
		},
		show: {
			width: 400,
			transition: {
				duration: 1,
				ease: "easeOut",
				delay: 0.75
			}
		}
	}
	// variants={panelAnim} initial="hidden" animate="show"

	return (
		<StyledPage>
			<StyledPanel variants={panelAnim} initial="hidden" animate="show">
				<div className="image">
					<img src={logo} alt="logo"/>
				</div>
				<div className="cities">
					<p>Paris - Lyon - Bordeaux</p>
				</div>
				<Nav/>
			</StyledPanel>
		</StyledPage>
	)
}

//Style
const StyledPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const StyledPanel = styled(motion.div)`
  background-color: black;
  height: 100vh;
  width: 20vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .image {
	padding-bottom: 10rem;
	
    img {
      width: 250px;
    }
  }
  
  .cities{
	position: fixed;
    //z-index: -1;
	bottom: 3%;
	color: white;
  }
`;

export default Landing;