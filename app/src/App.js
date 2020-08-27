import React from 'react';
import './App.css';

import {jokeList} from './components/jokeList';

function App() {
  return (
    <div className="App">
      <h1>The Giggle Factory</h1>     
      <jokeList />
    </div>
  );
}

export default App;
