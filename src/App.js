import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Loaidng Components
 */
import Posts from './components/Posts';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PostsContextProvider from './contexts/PostsContext';

function App() {
	return (
		<div className="App">
			<PostsContextProvider>
				<Navigation />
				<Posts />
				<Footer />
			</PostsContextProvider>
		</div>
  );
}

export default App;
