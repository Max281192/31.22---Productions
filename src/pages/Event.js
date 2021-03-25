import {Link} from 'react-router-dom';
//Framer Motion
import {motion} from 'framer-motion';
//Page Animations
import {pageAnim} from "../animations";
//Import Styled
import styled from 'styled-components';
// Medias
import logo from "../img/logo.svg";
//Components
import FixedNav from "../components/EventPage/FixedNav";
import FixedFooter from "../components/EventPage/FixedFooter";

const Event = () => {
	return (
		<motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">

			<FixedNav/>

			<div>
				<FixedFooter />
			</div>



		</motion.div>
	)
}


export default Event;