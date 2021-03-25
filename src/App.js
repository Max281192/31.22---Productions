//Import Pages
import Landing from './pages/Landing';
import Event from "./pages/Event";
import Corpo from "./pages/Corpo";

//Routing
import {Switch, Route} from 'react-router-dom';

//Import Global Style
import GlobalStyle from './components/GlobalStyle';

function App() {
	return (
		<div className="App">
			<GlobalStyle/>

			<Switch>
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
		</div>
	);
}

export default App;
