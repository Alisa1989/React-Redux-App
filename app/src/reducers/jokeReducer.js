import { FETCH_JOKES_START } from '../actions/jokeActions';
import { FETCH_JOKES_SUCCESS } from '../actions/jokeActions';
import { FETCH_JOKES_FAIL } from '../actions/jokeActions';

export const initialState = {
    joke: {setup: "joke from reducer", punchline: "heyoooo"},
    isFetching: false,
    error: ""
}

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKES_START:
            return {
            ...state,
            isFetching: true};
        case FETCH_JOKES_SUCCESS:
            return {
            ...state,
            isFetching: false,
            joke: {setup: action.payload.setup, punchline: action.payload.punchline}};
        case FETCH_JOKES_FAIL:
            return {
            ...state,
            isFetching: false,
            error: action.payload};
        default:
            return state;
    }
}