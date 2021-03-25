import React from 'react';
//Import Styled
import styled from 'styled-components';
//Page components
import Nav from "../components/LandingPage/Nav";
//Medias
import logo from '../img/logo.svg';
//Framer Motion
import {motion} from 'framer-motion';
import {panelAnim, citiesAnim} from "../animations";
//Page Animations
import {pageAnim} from "../animations";

const Landing = () => {
	return (
		<motion.div exit="exit" variants={pageAnim} animate="show">
			<StyledPage>
				<StyledPanel variants={panelAnim} initial="hidden" animate="show">
					<div className="image">
						<img src={logo} alt="logo"/>
					</div>
					<motion.div variants={citiesAnim} initial="hidden" animate="show" className="cities">
						<p>Paris - Lyon - Bordeaux</p>
					</motion.div>
					<Nav/>
				</StyledPanel>
			</StyledPage>
		</motion.div>

	)
}

//Style
const StyledPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

  .cities {
    position: fixed;
    //z-index: -1;
    bottom: 3%;
    color: white;
  }
`;

export default Landing;