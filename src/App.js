import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
/**
 * Importing Contexts
 */
import GeneralContextProvider from './contexts/GeneralContext';
import MenuContextProvider from './contexts/MenuContext';
import PostsContextProvider from './contexts/PostsContext';
import WidgetContextProvider from './contexts/WidgetsContext';
import SearchContextProvider from './contexts/SearchContext';

const BaseUrl = process.env.BASE_URL;

function App() {
	return (
		<Router>
			<div className="App">
				<GeneralContextProvider>
					<MenuContextProvider>
						<SearchContextProvider>
							<WidgetContextProvider>
								<Navigation />
								<PostsContextProvider>
									<Switch>
										<Route exact path="/">
											<Posts />
											{BaseUrl}
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
										<Route exact path="/s/:keyword">
											<Search />
										</Route>
										<Route exact path="/app/login">
											<Login />
										</Route>
										<Route exact path="/app/logout">
											<Logout />
										</Route>
										<Route exact path="/app/signup">
											<Signup />
										</Route>
									</Switch>
								</PostsContextProvider>
								<Footer />
							</WidgetContextProvider>
						</SearchContextProvider>
					</MenuContextProvider>
				</GeneralContextProvider>
			</div>
		</Router>
  );
}

export default App;
