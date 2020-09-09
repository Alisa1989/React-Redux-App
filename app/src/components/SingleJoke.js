import React from 'react';
import { connect } from 'react-redux';

const SingleJoke = (props) => {

    return (
        <div className="singleJoke__container">
            <h3>Joke: {props.setup}</h3>
            <h3>Punchline: {props.punchline}</h3>
        </div>
    )
}



export default connect(null,null)(SingleJoke);