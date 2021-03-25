import {Link} from "react-router-dom";
//Framer Motion
import {motion} from 'framer-motion';
//Page Animations
import {pageAnim} from "../animations";

const Corpo = () => {
	return(
		<motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
			<h1>CORPO</h1>
			<button>
				<Link to="/">ACCUEIL</Link>
			</button>
		</motion.div>
	)
}

export default Corpo;