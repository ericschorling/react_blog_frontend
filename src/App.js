import React from 'react';
import BlogPosts from './components/BlogPosts'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <BlogPosts />
      </Router>
    </div>
  );
}

export default App;
