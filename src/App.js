import React, {useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/**
 * Loaidng Components
 */
import Posts from './components/Posts';
import Navigation from './components/Navigation';
import Single from './components/Single';
import Category from './components/Category';
import Author from './components/Author';
import Page from './components/Page';
import Footer from './components/Footer';
import Search from './components/Search';
/**
 * Importing Contexts
 */
import GeneralContextProvider from './contexts/GeneralContext';
import MenuContextProvider from './contexts/MenuContext';
import PostsContextProvider from './contexts/PostsContext';
import WidgetsContextProvider from './contexts/WidgetsContext';
import WidgetContextProvider from './contexts/WidgetsContext';

function App() {
	return (
		<Router>
			<div className="App">
				<GeneralContextProvider>
					<MenuContextProvider>
						<WidgetContextProvider>
							<Navigation />
							<PostsContextProvider>
								<Switch>
									<Route exact path="/">
										<Posts />
									</Route>
									<Route exact path={"/:slug"}>
										<Single />
									</Route>
									<Route exact path="/category/:id/posts">
										<Category />
									</Route>
									<Route exact path="/author/:id/posts">
										<Author />
									</Route>
									<Route exact path="/page/:slug">
										<Page />
									</Route>
									<Route exact path="/search/:keyword">
										<Search />
									</Route>
								</Switch>
							</PostsContextProvider>
							<Footer />
						</WidgetContextProvider>
					</MenuContextProvider>
				</GeneralContextProvider>
			</div>
		</Router>
  );
}

export default App;
