import React, {useReducer} from 'react';
import './App.css';

import {jokeReducer, initialState} from './reducers/jokeReducer';
import JokeList from './components/JokeList';

function App() {
  const [state, dispatch] = useReducer(jokeReducer, initialState);

  return (
    <div className="App">
      <h1>The Giggle Factory</h1>     
      <JokeList />
    </div>
  );
}

export default App;
