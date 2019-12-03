import React from 'react';
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
import PostsContextProvider from './contexts/PostsContext';
import SingleContextProvider from './contexts/SingleContext';

function App() {
	return (
		<Router>
			<div className="App">
				<PostsContextProvider>
					<Navigation />
					<Switch>
						<Route exact path="/">
							<Posts />
						</Route>
						<Route path="/:slug">
							<SingleContextProvider>
								<Single />
							</SingleContextProvider>
						</Route>
					</Switch>
					<Footer />
				</PostsContextProvider>
			</div>
		</Router>
  );
}

export default App;
