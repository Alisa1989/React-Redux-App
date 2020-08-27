import React from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions/jokeActions';

import SingleJoke from './SingleJoke';

const JokeList = (props) => {

    return (
        <div>
            <h2>Jokes:</h2>
            <SingleJoke />
            <button onClick={getJokes}>Get Jokes!</button>
            {/* {console.log("state", state)} */}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        joke: state.joke 
    }
};

const mapDispatchToProps = {
    getJokes
};


export default connect(mapStateToProps, mapDispatchToProps)(JokeList);