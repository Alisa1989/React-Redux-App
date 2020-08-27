import {GET_JOKES_START, GET_JOKES_SUCCESS, GET_JOKES__FAIL} from '../reducers/jokeReducer';
import axios from 'axios';

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAIL = "FETCH_JOKES_FAIL";

const headers = {
    Accept: "application/json"
  };  

export const getJokes = () => (dispatch) => {
    console.log("getting jokes");
    dispatch({FETCH_JOKES_START});
    axios
        .get ("https://official-joke-api.appspot.com/jokes/ten" , { headers: headers })
        .then((response)=> {
            dispatch({ type: FETCH_JOKES_SUCCESS, payload: response.data});
            console.log("API response", response);
        })
        .catch((error) => {
            dispatch({type: FETCH_JOKES_FAIL, payload: `${error.response.message} code: ${error.response.code}`});
            console.log(error);
        })
};