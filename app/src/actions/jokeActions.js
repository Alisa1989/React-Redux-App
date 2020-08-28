import axios from 'axios';

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAIL = "FETCH_JOKES_FAIL";


export const getJokes = () => (dispatch) => {
    console.log("getting jokes");
    dispatch({type: FETCH_JOKES_START});
    axios
        .get ("https://official-joke-api.appspot.com/random_ten" )
        .then((response)=> {
            dispatch({ type: FETCH_JOKES_SUCCESS, payload: response.data});
            console.log("API response", response.data);
        })
        .catch((error) => {
            dispatch({type: FETCH_JOKES_FAIL, payload: `${error.response.message} code: ${error.response.code}`});
            console.log(error);
        })
};