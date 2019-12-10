import React, {useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/**
 * Loaidng Components
 */
import Posts from './components/Posts';
import Single from './components/Single';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
/**
 * Importing Contexts
 */
import GeneralContextProvider from './contexts/GeneralContext';
import MenuContextProvider from './contexts/MenuContext';
import PostsContextProvider from './contexts/PostsContext';

function App() {
	return (
		<Router>
			<div className="App">
				<GeneralContextProvider>
					<MenuContextProvider>
						<Navigation />
							<PostsContextProvider>
								<Switch>
									<Route exact path="/">
										<Posts />
									</Route>
									<Route path="/:slug">
										<Single />
									</Route>
								</Switch>
							</PostsContextProvider>
						<Footer />
					</MenuContextProvider>
				</GeneralContextProvider>
			</div>
		</Router>
  );
}

export default App;
