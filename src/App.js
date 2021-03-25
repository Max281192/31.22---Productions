//Import Pages
import Landing from './pages/Landing';
import Event from "./pages/Event";
import Corpo from "./pages/Corpo";
//Routing
import {Switch, Route, useLocation} from 'react-router-dom';
//Import Global Style
import GlobalStyle from './components/GlobalStyle';
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {

	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle/>

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Landing/>
					</Route>
					<Route path="/event">
						<Event/>
					</Route>
					<Route path="/corporate">
						<Corpo/>
					</Route>
				</Switch>
			</AnimatePresence>

		</div>
	);
}

export default App;
