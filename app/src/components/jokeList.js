import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions/jokeActions';

import SingleJoke from './SingleJoke';

const JokeList = (props) => {

    useEffect(() => {
        props.getJokes();
      }, [getJokes]);
    
      if (props.isFetching) {
        return <h2>Loading...</h2>;
      }

    return (
        <div>
            <h2>Jokes:</h2>
            <button onClick={props.getJokes}>Get Jokes!</button>
            {/* {console.log("state", props.jokes)} */}
            <div className="jokeList__container">
                {props.jokes.map((item) => (
                    <SingleJoke setup={item.setup} punchline={item.punchline} key={item.id} />))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        isFetching: state.isFetching
    }
};

const mapDispatchToProps = {
    getJokes
};


export default connect(mapStateToProps, mapDispatchToProps)(JokeList);