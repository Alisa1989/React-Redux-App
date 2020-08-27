import React from 'react';
import { connect } from 'react-redux';

const SingleJoke = (props) => {

    return (
        <div>
            <h3>Joke</h3>
            <h3>Punchline</h3>
        </div>
    )
}



export default connect(null,null)(SingleJoke);