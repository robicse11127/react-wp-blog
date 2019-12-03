import React from 'react';
import './App.css';

/**
 * Loaidng Components
 */
import Posts from './components/Posts';
import PostsContextProvider from './contexts/PostsContext';

function App() {
	return (
		<div className="App">
			<PostsContextProvider>
				<Posts />
			</PostsContextProvider>
		</div>
  );
}

export default App;
