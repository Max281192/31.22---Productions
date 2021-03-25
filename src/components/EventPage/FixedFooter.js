import {Link} from "react-router-dom";
//Import Styled
import styled from 'styled-components';
//Framer Motion
import {motion} from 'framer-motion';
import {footerAnim} from "../../animations";

const FixedFooter = () => {
	return (
		<StyledFooter variants={footerAnim} initial="hidden" animate="show" exit="exit">
			<button className="log-in">
				<Link to="/">LOGGIN</Link>
			</button>
			<p>31.22 Productions - Paris - Lyon - Bordeaux</p>
			<button className="home">
				<Link to="/">HOME</Link>
			</button>
		</StyledFooter>
	)
}

//Style
const StyledFooter = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  p{
	color: white;
  }
`;

export default FixedFooter;